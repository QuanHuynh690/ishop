import React, { useState } from "react";
import Layout from "../../components/Layout";
import { withRouter, useParams, Link } from "react-router-dom";
import { Tabs, Tab, Typography, Box } from "@material-ui/core";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import { useQuery } from "@apollo/client";
import {
  GET_PRODUCT,
  GetProductData,
  GetProductVariables,
} from "../../graphql/product/product.query";
import LoadingComponent from "../../components/LoadingComponent";
import "./index.scss";
import { images } from "../../assets";
import Modal from "../../components/Modal";
import Rating from 'react-rating'
type Params = {
  slug: string;
};
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
interface StyledTabProps {
  label: string;
}
function ProductDetail(props: any) {
  // dùng useParams()
  const { slug }: Params = useParams();
  const id = Number(slug.slice(-8));
  const [viewImage, setViewImage] = useState("");
  const [viewImageModal, setViewImageModal] = useState("");
  const [openModal, setOpenModal] = useState(false);
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
          <Box>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  const useStyle = makeStyles({
    indicator: {
      top: "0px",
    },
  });
  const classes = useStyle();
  const StyledTab = withStyles((theme: Theme) =>
    createStyles({
      root: {
        textTransform: "none",
        width: "auto",
      },
    })
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
  const handleClose = () => {
    setOpenModal(false);
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
                  <div className="detail-thumbnail">
                    <img
                      width="100%"
                      src={viewImage || dataProduct?.getProduct?.thumbnailImage}
                      alt=""
                    />
                    <span
                      className="view-big-image"
                      onClick={() => setOpenModal(true)}
                    >
                      <images.Search />
                    </span>
                  </div>
                  <ul className="sub-image-list">
                    {dataProduct?.getProduct?.images.map((image, index) => {
                      return (
                        <li
                          className="sub-image"
                          key={index}
                          onClick={() => {
                            setViewImage(image);
                          }}
                        >
                          <img src={image} width="64" alt="" />{" "}
                        </li>
                      );
                    })}
                  </ul>
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
              <div className="description-container">
                {/* <AppBar position="static" color="default"> */}
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="styled tabs example"
                  indicatorColor="secondary"
                  textColor="secondary"
                  classes={{
                    indicator: classes.indicator,
                  }}
                >
                  <StyledTab label="Description" {...a11yProps(0)} />
                  <StyledTab label="Reviews" {...a11yProps(1)} />
                </Tabs>
                {/* </AppBar> */}
                <TabPanel value={value} index={0}>
                  <span>
                    Nam nec tellus a odio tincidunt auctor a ornare odio. Sed
                    non mauris vitae erat consequat auctor eu in elit. Class
                    aptent taciti sociosqu ad litora torquent per conubia
                    nostra, per inceptos himenaeos. Mauris in erat justo. Nullam
                    ac urna eu felis dapibus condimentum sit amet a augue. Sed
                    non neque elit sed.
                  </span>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div>
                    <h5>Reviews</h5>
                    <span>There are no reviews yet</span>
                    <div className="review-container">
                      <span className="review-title">
                        Be the first to review "{dataProduct?.getProduct?.name}"
                      </span>
                      <form>
                        <span>
                          Your email address will not be published. Required
                          fields are marked *
                        </span><br/>
                        <span>Your rating </span><span className="required-label">(*)</span><br/>
                        <Rating/>
                        
                      </form>
                    </div>
                  </div>
                </TabPanel>
              </div>
              <Modal open={openModal} handleClose={handleClose}>
                <div>
                  <div className="modal-thumpnail-image">
                    <img
                      src={
                        viewImageModal ||
                        dataProduct?.getProduct?.thumbnailImage
                      }
                      alt=""
                    />
                  </div>
                  <ul className="sub-image-list">
                    {dataProduct?.getProduct?.images.map((image, index) => {
                      return (
                        <li
                          className="sub-image"
                          key={index}
                          onClick={() => {
                            setViewImageModal(image);
                          }}
                        >
                          <img src={image} width="64" alt="" />{" "}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </Modal>
            </section>
          </main>
        </Layout>
      )}
    </>
  );
}

export default withRouter(ProductDetail);
