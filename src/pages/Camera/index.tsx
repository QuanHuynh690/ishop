import * as React from "react";
import Layout from "../../components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
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
function Camera() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const inputLogin = (event: any) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value)
  };

  const submit = (e: any) => {
    e.preventDefault();
    console.log(login);
    login1(login);
  };
  const [error, setError] = useState("");
  const login1 = async (data: any) => {
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signIn",
        data,
      });

      console.log(result.data);
      localStorage.setItem("token", result.data.accessToken);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };
  const { data: dataProducts } = useQuery<GetProductsData, GetProductsVariables>(
    GET_PRODUCTS,
    {
      variables: {
        page: 1,
        pageSize: 12,
      },
    }
  );
  console.log("dataPro :>> ", dataProducts);
  return (
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
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
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
                  <span aria-current="page" className="page-numbers current">
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
  );
}

export default Camera;
