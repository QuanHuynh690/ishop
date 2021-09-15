import * as React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";
/*
1. lấy đc sự kiện click của icon add to cart
2. tạo 1 array cho những sự kiện trong cart
3. đưa sp mà các bạn đang click ra ngoài vào productsInCart
4. Bởi vì productsInCart sẽ thay đổi nên mình tạo productsInCart bằng cách sử dụng useState
5. Truyền productsInCart vào Cart để lấy danh sách sản phẩm và hiển thị trong Cart
*/
import "./index.scss";
function ProductItem(props: any) {
  // console.log(props:any.image)

  // const onAddToCart = () => {
  //   console.log(props)
  //   props.clickToAdd(props)
  // }
  let discount = props?.price_discount?.valueOf();
  let discountValue = Number(
    discount?.slice(1, discount.length).slice(0, discount.length - 2)
  );
  let beforeDiscount =
    Math.round(
      (props?.sale_price * (100 + discountValue)) / 100
    ).toLocaleString("vi-VN") + " ₫ ";

  return (
    <>
      <div className="thumbnail-wrap">
        {props?.price_discount !== null && props.price_discount !== "-0%" && (
          <span className="onsale">{props?.price_discount}</span>
        )}
        <Link to={`/store/${props?.product_slug}`}>
          <img
            src={props?.thumbnailImage}
            alt=""
            loading="lazy"
            className="thumpnail-image"
          />
        </Link>
      </div>
      <div className="summary-wrap">
        <span className="product-category">{props?.category}</span>
        <Link
          to={`/store/${props?.product_slug}`}
          className="ast-loop-product__link"
        >
          <h2 className="product-name">{props?.name}</h2>
        </Link>
        <span className="price">
          {props?.price_discount !== null && props.price_discount !== "-0%" && (
            <del>
              <span className="before-sale">
                <bdi>{beforeDiscount}</bdi>
              </span>
            </del>
          )}
          <span className="after-sale">
            <bdi>{props?.price}</bdi>
          </span>
        </span>
      </div>
    </>
  );
}
export default ProductItem;
