import * as React from "react";

function Cart(props:any) {
  console.log(props.data);
  return (
    <>
      {/* <li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart" /> <span className="cart-count">{props.data.length}</span></a> */}
      <li className="d-shop-cart"><a href="#"><i className="fas fa-shopping-cart" /> <span className="cart-count">6</span></a>
        <ul className="minicart">
          {/* {props.data.map((elm: any) => {
            return (
              <li key={elm.name}>
                <div className="cart-img">
                  <a href="#">
                    <img src={props.data.imgURL} alt="" />
                  </a>
                </div>
                <div className="cart-content">
                  <h3>
                    <a href="#">Black &amp; White Shoes</a>
                  </h3>
                  <div className="cart-price">
                    <span className="new">{props.data.price}</span>
                    <span>
                      <del>$239.9</del>
                    </span>
                  </div>
                </div>
                <div className="del-icon">
                  <a href="#">
                    <i className="far fa-trash-alt" />
                  </a>
                </div>
              </li>)
          })} */}
          <li>
            <div className="total-price">
              <span className="f-left">Total:</span>
              <span className="f-right">$300.0</span>
            </div>
          </li>
          <li>
            <div className="checkout-link">
              <a href="#">Shopping Cart</a>
              <a className="red-color" href="#">Checkout</a>
            </div>
          </li>
        </ul>
      </li>
    </>
  )
}
export default Cart