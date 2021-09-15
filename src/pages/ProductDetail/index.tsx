import React from "react";
import Layout from "../../components/Layout";
import dataProduct from "../../product.json";
import { withRouter, useParams, Link } from "react-router-dom";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import { makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import { useQuery } from "@apollo/client";
import {
  GET_PRODUCT,
  GetProductData,
  GetProductVariables,
} from "../../graphql/product/product.query";
import LoadingComponent from "../../components/LoadingComponent";
import "./index.scss";
type Params = {
  slug: string;
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface StyledTabsProps {
  value: number;
  onChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}
interface StyledTabProps {
  label: string;
}
function ProductDetail(props: any) {
  // dùng useParams()
  const { slug }: Params = useParams();
  const id = Number(slug.slice(-8));
  console.log("ProductDetail Props", props);

  // dùng withRouter
  // const product = dataProduct.data.find((elm) => String(elm.id) === params.id);
  const { data: dataProduct, loading: loadingProduct } = useQuery<
    GetProductData,
    GetProductVariables
  >(GET_PRODUCT, { variables: { id: id } });
  console.log(id, "params");
  // if (!dataProduct) {
  //   return <h1>404 ko tim thay san pham</h1>;
  // }
  const [value, setValue] = React.useState(0);
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const StyledTabs = withStyles({
    indicator: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      '& > span': {
        width: '100%',
        backgroundColor: '#635ee7',
      },
    },
  })((props: StyledTabsProps) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);
  const StyledTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: 'none',
      color: '#ee6457',
      fontWeight: theme.typography.fontWeightRegular,
      fontSize: theme.typography.pxToRem(15),
      marginRight: theme.spacing(1),
      '&:focus': {
        opacity: 1,
      },
    },
  }),
)((props: StyledTabProps) => <Tab {...props} />);
  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      {loadingProduct ? (
        <LoadingComponent />
      ) : (
        <Layout productsInCart={[]}>
          <main>
            {/* breadcrumb-area-start */}
            {/* shop-area start */}
            <section className="product-detail-area">
              <div className="product-detail">
                <div className="product-details-img mb-10">
                  <div className="tab-content" id="myTabContentpro">
                    <div className="tab-pane fade show active">
                      {/* <div className="product-large-img"> */}
                      <img
                        width="100%"
                        src={dataProduct?.getProduct?.thumbnailImage}
                        alt=""
                      />
                      {/* </div> */}
                    </div>
                  </div>
                  <div className="shop-thumb-tab mb-30">
                    <ul className="nav" id="myTab2" role="tablist">
                      {dataProduct?.getProduct?.images.map((image, index) => {
                        return (
                          <li className="nav-item" key={index}>
                            <a className="nav-link active" href="#home">
                              <img src={image} width="64" alt="" />{" "}
                            </a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="product-details">
                  <nav className="detail-breadcrumb">
                    <Link to={`/`} className="detail-breadcrumb">
                      Home
                    </Link>
                    &nbsp;/&nbsp;
                    <Link
                      to={`/store?cat=${dataProduct?.getProduct?.category_slug}`}
                      className="detail-breadcrumb"
                    >
                      {dataProduct?.getProduct?.category}
                    </Link>
                    &nbsp;/&nbsp;{dataProduct?.getProduct?.name}
                  </nav>
                  <h2 className="pro-details-title mb-15">
                    {dataProduct?.getProduct?.name}
                  </h2>
                  <div className="detail-price">
                    <del className="old-price">
                      {dataProduct?.getProduct?.price}
                    </del>
                    <span className="new-price">
                      {dataProduct?.getProduct?.price}
                    </span>
                  </div>
                  <div className="product-variant">
                    <div className="product-desc variant-item">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip.
                      </p>
                    </div>
                    <div className="product-action-details">
                      <div className="cart-plus-minus">
                        <button className="dec qtybutton">-</button>
                        <input type="number" defaultValue={1} min={1} />
                        <button className="inc qtybutton">+</button>
                      </div>
                      <button className="add-to-cart">Add to cart</button>
                    </div>
                    <div className="details-cat">
                      <span>Categories: </span>
                      <Link
                        to={`/store?cat=${dataProduct?.getProduct?.category_slug}`}
                        className="detail-breadcrumb"
                      >
                        {dataProduct?.getProduct?.category}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <AppBar position="static" color="default">
                  <StyledTabs
                    value={value}
                    onChange={handleChange}
                    aria-label="styled tabs example"
                  >
                    <StyledTab label="Description" {...a11yProps(0)} />
                    <StyledTab label="Reviews" {...a11yProps(1)} />
                  </StyledTabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                  Item One
                </TabPanel>
                <TabPanel value={value} index={1}>
                  Item Two
                </TabPanel>
              </div>
            </section>
            {/* shop-area end */}
            {/* product-area start */}
            {/* <section className="product-area pb-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="area-title text-center mb-50">
                  <h2>Releted Products</h2>
                  <p>Browse the huge variety of our products</p>
                </div>
              </div>
            </div>
            <div className="product-slider-2 owl-carousel">
              <div className="pro-item">
                <div className="product-wrapper">
                  <div className="product-img mb-25">
                    <a href="product-details.html">
                      <img src="img/product/pro4.jpg" alt="" />
                      <img
                        className="secondary-img"
                        src="img/product/pro5.jpg"
                        alt=""
                      />
                    </a>
                    <div className="product-action text-center">
                      <Link to={`/`} title="Shoppingb Cart">
                        <i className="flaticon-shopping-cart" />
                      </Link>
                      <Link to={`/`} title="Quick View">
                        <i className="flaticon-eye" />
                      </Link>
                      <Link
                        to={`/`}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Compare"
                      >
                        <i className="flaticon-compare" />
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="pro-cat mb-10">
                      <a href="shop.html">decor, </a>
                      <a href="shop.html">furniture</a>
                    </div>
                    <h4>
                      <a href="product-details.html">
                        Raglan Baseball Style shirt
                      </a>
                    </h4>
                    <div className="product-meta">
                      <div className="pro-price">
                        <span>$119.00 USD</span>
                        <span className="old-price">$230.00 USD</span>
                      </div>
                    </div>
                    <div className="product-wishlist">
                      <Link to={`/`}>
                        <i className="far fa-heart" title="Wishlist" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-item">
                <div className="product-wrapper">
                  <div className="product-img mb-25">
                    <a href="product-details.html">
                      <img src="img/product/pro5.jpg" alt="" />
                      <img
                        className="secondary-img"
                        src="img/product/pro6.jpg"
                        alt=""
                      />
                    </a>
                    <div className="product-action text-center">
                      <Link to={`/`} title="Shoppingb Cart">
                        <i className="flaticon-shopping-cart" />
                      </Link>
                      <Link to={`/`} title="Quick View">
                        <i className="flaticon-eye" />
                      </Link>
                      <Link
                        to={`/`}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Compare"
                      >
                        <i className="flaticon-compare" />
                      </Link>
                    </div>
                    <div className="sale-tag">
                      <span className="new">new</span>
                      <span className="sale">sale</span>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="pro-cat mb-10">
                      <a href="shop.html">decor, </a>
                      <a href="shop.html">furniture</a>
                    </div>
                    <h4>
                      <a href="product-details.html">
                        Raglan Baseball Style shirt
                      </a>
                    </h4>
                    <div className="product-meta">
                      <div className="pro-price">
                        <span>$119.00 USD</span>
                        <span className="old-price">$230.00 USD</span>
                      </div>
                    </div>
                    <div className="product-wishlist">
                      <Link to={`/`}>
                        <i className="far fa-heart" title="Wishlist" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-item">
                <div className="product-wrapper">
                  <div className="product-img mb-25">
                    <a href="product-details.html">
                      <img src="img/product/pro7.jpg" alt="" />
                      <img
                        className="secondary-img"
                        src="img/product/pro8.jpg"
                        alt=""
                      />
                    </a>
                    <div className="product-action text-center">
                      <Link to={`/`} title="Shoppingb Cart">
                        <i className="flaticon-shopping-cart" />
                      </Link>
                      <Link to={`/`} title="Quick View">
                        <i className="flaticon-eye" />
                      </Link>
                      <Link
                        to={`/`}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Compare"
                      >
                        <i className="flaticon-compare" />
                      </Link>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="pro-cat mb-10">
                      <a href="shop.html">decor, </a>
                      <a href="shop.html">furniture</a>
                    </div>
                    <h4>
                      <a href="product-details.html">
                        Raglan Baseball Style shirt
                      </a>
                    </h4>
                    <div className="product-meta">
                      <div className="pro-price">
                        <span>$119.00 USD</span>
                        <span className="old-price">$230.00 USD</span>
                      </div>
                    </div>
                    <div className="product-wishlist">
                      <Link to={`/`}>
                        <i className="far fa-heart" title="Wishlist" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-item">
                <div className="product-wrapper">
                  <div className="product-img mb-25">
                    <a href="product-details.html">
                      <img src="img/product/pro9.jpg" alt="" />
                      <img
                        className="secondary-img"
                        src="img/product/pro10.jpg"
                        alt=""
                      />
                    </a>
                    <div className="product-action text-center">
                      <Link to={`/`} title="Shoppingb Cart">
                        <i className="flaticon-shopping-cart" />
                      </Link>
                      <Link to={`/`} title="Quick View">
                        <i className="flaticon-eye" />
                      </Link>
                      <Link
                        to={`/`}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Compare"
                      >
                        <i className="flaticon-compare" />
                      </Link>
                    </div>
                    <div className="sale-tag">
                      <span className="new">new</span>
                      <span className="sale">sale</span>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="pro-cat mb-10">
                      <a href="shop.html">decor, </a>
                      <a href="shop.html">furniture</a>
                    </div>
                    <h4>
                      <a href="product-details.html">
                        Raglan Baseball Style shirt
                      </a>
                    </h4>
                    <div className="product-meta">
                      <div className="pro-price">
                        <span>$119.00 USD</span>
                        <span className="old-price">$230.00 USD</span>
                      </div>
                    </div>
                    <div className="product-wishlist">
                      <Link to={`/`}>
                        <i className="far fa-heart" title="Wishlist" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pro-item">
                <div className="product-wrapper">
                  <div className="product-img mb-25">
                    <a href="product-details.html">
                      <img src="img/product/pro1.jpg" alt="" />
                      <img
                        className="secondary-img"
                        src="img/product/pro11.jpg"
                        alt=""
                      />
                    </a>
                    <div className="product-action text-center">
                      <Link to={`/`} title="Shoppingb Cart">
                        <i className="flaticon-shopping-cart" />
                      </Link>
                      <Link to={`/`} title="Quick View">
                        <i className="flaticon-eye" />
                      </Link>
                      <Link
                        to={`/`}
                        data-toggle="tooltip"
                        data-placement="right"
                        title="Compare"
                      >
                        <i className="flaticon-compare" />
                      </Link>
                    </div>
                    <div className="sale-tag">
                      <span className="new">new</span>
                      <span className="sale">sale</span>
                    </div>
                  </div>
                  <div className="product-content">
                    <div className="pro-cat mb-10">
                      <a href="shop.html">decor, </a>
                      <a href="shop.html">furniture</a>
                    </div>
                    <h4>
                      <a href="product-details.html">
                        Raglan Baseball Style shirt
                      </a>
                    </h4>
                    <div className="product-meta">
                      <div className="pro-price">
                        <span>$119.00 USD</span>
                        <span className="old-price">$230.00 USD</span>
                      </div>
                    </div>
                    <div className="product-wishlist">
                      <Link to={`/`}>
                        <i className="far fa-heart" title="Wishlist" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
            {/* product-area end */}
          </main>
        </Layout>
      )}
    </>
  );
}

export default withRouter(ProductDetail);
