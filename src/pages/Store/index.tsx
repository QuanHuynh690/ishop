import * as React from "react";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams, useRouteMatch } from "react-router-dom";
import axios from "axios";

import "./style.scss";
import Banner from "../../components/Area/BannerArea";
import SideBar from "../../components/SideBar";
import { useQuery } from "@apollo/client";
import {
  GetProductsData,
  GetProductsVariables,
  GET_PRODUCTS,
  Product,
} from "../../graphql/product/product.query";
import ProductItem from "../../components/ProductItem";
import LoadingComponent from "../../components/LoadingComponent";
function Store() {
  let query = new URLSearchParams(useLocation().search);
  let category = query.get("cat");
  const [condition, setCondition] = useState({
    category: category || "",
    // priceFrom: "",
    // priceTo: "",
    vendor: "",
    sortPirce: 1,
    search: "",
  });
  const { data: dataProducts, loading: loadingProducts } = useQuery<
    GetProductsData,
    GetProductsVariables
  >(GET_PRODUCTS, {
    variables: {
      page: 1,
      pageSize: 12,
      condition: condition,
    },
  });
  useEffect(() => {});
  // console.log("dataPro :>> ", dataProducts);
  const params = useParams();
  let abc = useRouteMatch();
  
  console.log("query :>> ", category);
  return (
    <>
      {loadingProducts ? (
        <LoadingComponent />
      ) : (
        <Layout productsInCart={[]}>
          <main>
            <Banner title="Store" page="store" />
            <section className="main-content">
              <SideBar />
              <div className="content-area">
                <div className="sort-container">
                  <p className="result-count">
                    Showing 1–12 of {dataProducts?.getProducts?.total} results
                  </p>
                  <select name="orderby" className="orderby">
                    <option value="menu_order">Default sorting</option>
                    <option value="popularity">Sort by name A-Z</option>
                    <option value="rating">Sort by name Z-A</option>
                    <option value="price">Sort by price: low to high</option>
                    <option
                      value="price-desc"
                      onClick={() =>
                        setCondition({ ...condition, sortPirce: -1 })
                      }
                    >
                      Sort by price: high to low
                    </option>
                  </select>
                </div>
                <ul className="products columns-4">
                  {dataProducts?.getProducts?.Products?.map(
                    (item: Product, index: number) => (
                      <li className="genuine-product-item" key={index}>
                        <ProductItem {...item} />
                      </li>
                    )
                  )}
                </ul>
                <nav className="woocommerce-pagination">
                  <ul className="page-numbers">
                    <li>
                      <span
                        aria-current="page"
                        className="page-numbers current"
                      >
                        1
                      </span>
                    </li>
                    <li>
                      <a
                        className="page-numbers"
                        href="https://websitedemos.net/furniture-store-03/shop/page/2/"
                      >
                        2
                      </a>
                    </li>
                    <li>
                      <a
                        className="next page-numbers"
                        href="https://websitedemos.net/furniture-store-03/shop/page/2/"
                      >
                        →
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </section>
          </main>
        </Layout>
      )}
    </>
  );
}

export default Store;
