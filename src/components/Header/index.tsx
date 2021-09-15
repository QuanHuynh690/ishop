import React, { useEffect, useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import clsx from "clsx";
import "./index.scss";
// import { useMediaQuery } from "@material-ui/core";
import logo from "../../assets/images/logo_shop.png";
import MobileHeader from "./MobileHeader";
// import Cart from '../Cart';

const Header = () => {
  const [isScrolled, setScrolled] = useState<boolean>(false);
  function handleScroll() {
    setScrolled(!!window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });
  const HeaderStyle: React.CSSProperties = {
    backgroundColor: isScrolled ? "white" : "transparent",
    boxShadow: isScrolled ? "0px 2px 10px #657d81" : "none",
  };
  let { path } = useRouteMatch();
  return (
    <header className="site-header" style={HeaderStyle}>
      <div id="ast-desktop-header" className="pc-header">
        <div className="header-container">
          <div className=" site-header-section ast-flex">
            <Link to={`/`}>
              <img src={logo} alt="Shop!" width={90} />
            </Link>
          </div>
          <div className="site-header-section ast-flex">
            <div className="ast-flex main-navigation">
              <ul className="header-menu ast-flex ">
                <li className="menu-item ">
                  <Link
                    to={`/`}
                    className={clsx("menu-link", { active: path === "/" })}
                  >
                    Home
                  </Link>
                </li>
                <li className="menu-item" id="store-menu">
                  <Link to="/store" className={clsx("menu-link", { active: path === "/store" })}>
                    Store <i className="fal fa-angle-down ml-2 pt-1" />
                  </Link>
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <Link to="/store?cat=dien-thoai-smartphone" className="sub-menu-link">
                        Smart Phone
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/store?cat=May-tinh-bang" className="sub-menu-link">
                        Tablet
                      </Link>
                    </li>
                    <li className="menu-item">
                      <Link to="/store?cat=May-Anh" className="sub-menu-link">
                        Camera
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <Link to="/about-us" className={clsx("menu-link", { active: path === "/about-us" })}>
                    About Us
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to="/contact-us" className={clsx("menu-link", { active: path === "/contact-us" })}>
                    Contact Us
                  </Link>
                </li>
                <li className="menu-item">
                  <Link to={`/login`} className={clsx("menu-link", { active: path === "/login" })}>
                    My Account
                  </Link>
                </li>
              </ul>
            </div>
            <div id="cart-wrapper">
              <Link
                className="cart-container"
                to="/cart/"
                title="View your shopping cart"
              >
                <span className="header-count">0</span>
              </Link>
              {/* <div className="header-cart-data">
                <div className="widget woocommerce widget_shopping_cart">
                  <div className="widget_shopping_cart_content">
                    <p className="woocommerce-mini-cart__empty-message">
                      No products in the cart.
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </header>
  );
};
export default Header;
