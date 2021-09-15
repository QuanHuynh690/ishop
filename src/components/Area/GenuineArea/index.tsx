import React from "react";

import { useQuery } from "@apollo/client";
import {
  GetProductsData,
  GetProductsVariables,
  GET_PRODUCTS,
  Product,
} from "../../../graphql/product/product.query";
import ProductItem from "../../ProductItem";
import "./index.scss";
const GenuineArea = () => {
  const { data: dataGenuineProducts } = useQuery<
    GetProductsData,
    GetProductsVariables
  >(GET_PRODUCTS, {
    variables: {
      page: 1,
      pageSize: 8,
      condition: { search: "Hàng Chính Hãng" },
    },
  });
  console.log("dataPro :>> ", dataGenuineProducts);
  return (
    <section className="genuine-area">
      <div className="genuine-wrapper">
        <h2 className="section-title">Genuine Products</h2>
        <p className="section-text">Genuine products with guaranteed quality</p>
        <ul className="products columns-4">
          {dataGenuineProducts?.getProducts?.Products?.map(
            (item: Product, index: number) => (
              <li className="genuine-product-item" key={index}>
                <ProductItem {...item} />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};
export default GenuineArea;
