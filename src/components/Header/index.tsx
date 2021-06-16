import React from 'react';
import { Link } from 'react-router-dom';
// import { useMediaQuery } from "@material-ui/core";

import MobileHeader from './MobileHeader';
// import Cart from '../Cart';

const Header = () => {
  // const isMobileScreen = useMediaQuery("(max-width: 575px)");
  return (
    // <div id="header-sticky" className="header-area box-90 sticky-header">
    //   <div className="container-fluid">
    //     <div className="row align-items-center">
    //       <div className="col-xl-2 col-lg-6 col-md-6 col-7 col-sm-5 d-flex align-items-center pos-relative">
    //         <div className="logo">
    //           <Link to={`/`}><img src="./assets/logo_shop.png" alt="" /></Link>
    //         </div>
    //         <div className="category-menu">
    //           <h4>Category</h4>
    //           <ul>
    //             <li><a href="#"><i className="fas fa-shopping-cart" /> Table lamp</a></li>
    //             <li><a href="#"><i className="fas fa-shopping-cart" /> Furniture</a></li>
    //             <li><a href="#"><i className="fas fa-shopping-cart" /> Chair</a></li>
    //             <li><a href="#"><i className="fas fa-shopping-cart" /> Men</a></li>
    //             <li><a href="#"><i className="fas fa-shopping-cart" /> Women</a></li>
    //             <li><a href="#"><i className="fas fa-shopping-cart" /> Cloth</a></li>
    //             <li><a href="#"><i className="fas fa-shopping-cart" /> Trend</a></li>
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-xl-8 col-lg-6 col-md-8 col-8 d-none d-xl-block">
    //         <div className="main-menu text-center">
    //           <nav id="mobile-menu" style={{ display: 'block' }}>
    //             <ul>
    //               <li>
    //                 <Link to={`/`}>Home</Link>
    //               </li>
    //               <li>
    //                 <a href="#">Pages</a>
    //                 <ul className="submenu">
    //                   <li>
    //                     <a href="./login">login</a>
    //                   </li>
    //                   <li>
    //                     <a href="./register">Register</a>
    //                   </li>
    //                   <li>
    //                     <a href="./cart">Shoping Cart</a>
    //                   </li>
    //                 </ul>
    //               </li>
    //             </ul>
    //           </nav>
    //         </div>
    //       </div>
    //       <div className="col-xl-2 col-lg-6 col-md-6 col-5 col-sm-7 pl-0">
    //         <div className="header-right f-right">
    //           <ul>
    //             <li className="search-btn">
    //               <a className="search-btn nav-search search-trigger" href="#"><i className="fas fa-search" /></a>
    //             </li>
    //             <li className="login-btn"><Link to={`/login`}><i className="far fa-user" /></Link></li>
    //             {/* <Cart data={props.productsInCart} /> */}
    //             <Cart />
    //           </ul>
    //         </div>
    //       </div>
    //       <div className="col-12 d-xl-none">
    //         <div className="mobile-menu" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <header className="site-header ast-primary-submenu-animation-fade header-main-layout-1 ast-primary-menu-enabled ast-logo-title-inline ast-builder-menu-toggle-icon ast-mobile-header-inline" id="masthead" >
      <div id="ast-desktop-header" className="pc-header">
        <div className="ast-main-header-wrap main-header-bar-wrap ">
          <div className="ast-primary-header-bar ast-primary-header main-header-bar site-header-focus-item" >
            <div className="site-primary-header-wrap ast-builder-grid-row-container site-header-focus-item ast-container" >
              <div className="ast-builder-grid-row ast-builder-grid-row-has-sides ast-builder-grid-row-no-center">
                <div className="site-header-primary-section-left site-header-section ast-flex site-header-section-left">
                  <div className="ast-builder-layout-element ast-flex site-header-focus-item">
                    <div className="site-branding ast-site-identity">
                      <span className="site-logo-img">
                        <Link to={`/`}><img src="./assets/logo_shop.png" alt="Shop!" /></Link>
                      </span>
                      <div className="ast-site-title-wrap">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="site-header-primary-section-right site-header-section ast-flex ast-grid-right-section">
                  <div className="ast-builder-menu-1 ast-builder-menu ast-flex ast-builder-menu-1-focus-item ast-builder-layout-element site-header-focus-item" >
                    <div className="ast-main-header-bar-alignment">
                      <div className="main-header-bar-navigation">
                        <nav className="ast-flex-grow-1 navigation-accessibility site-header-focus-item" id="site-navigation">
                          <div className="main-navigation ast-inline-flex">
                            <ul id="ast-hf-menu-1" className="main-header-menu ast-nav-menu ast-flex  submenu-with-border astra-menu-animation-fade  stack-on-mobile" >
                              <li id="menu-item-16" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-9 current_page_item menu-item-16">
                                <Link to={`/`} className="menu-link">Home</Link>
                              </li>
                              <li id="menu-item-19" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-19">
                                <a href="https://websitedemos.net/plant-store-02/store/" className="menu-link">
                                  Store <i className="fal fa-angle-down ml-2 pt-1" />
                                </a>
                                <ul className="sub-menu">
                                  <li id="menu-item-214" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-214">
                                    <a href="https://websitedemos.net/plant-store-02/product-category/plants/" className="menu-link">Smart Phone</a>
                                  </li>
                                  <li id="menu-item-215" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-215">
                                    <a href="https://websitedemos.net/plant-store-02/product-category/cactus/" className="menu-link">Tablet</a>
                                  </li>
                                  <li id="menu-item-215" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-215">
                                    <a href="https://websitedemos.net/plant-store-02/product-category/cactus/" className="menu-link">Camera</a>
                                  </li>
                                </ul>
                              </li>
                              <li id="menu-item-456" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-456">
                                <a href="https://websitedemos.net/plant-store-02/about-us/" className="menu-link">About Us</a>
                              </li>
                              <li id="menu-item-455" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-455">
                                <a href="https://websitedemos.net/plant-store-02/contact-us/" className="menu-link">Contact Us</a>
                              </li>
                              <li id="menu-item-21" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-21">
                                <a href="https://websitedemos.net/plant-store-02/my-account/" className="menu-link">My Account</a>
                              </li>
                            </ul>
                          </div>
                        </nav>
                      </div>
                    </div>
                  </div>
                  <div className="ast-builder-layout-element site-header-focus-item ast-header-woo-cart" data-section="section-header-woo-cart">
                    <div id="ast-site-header-cart" className="ast-site-header-cart ast-menu-cart-with-border ast-menu-cart-outline">
                      <div className="ast-site-header-cart-li ">
                        <a className="cart-container" href="https://websitedemos.net/plant-store-02/cart/" title="View your shopping cart">
                          <div className="ast-cart-menu-wrap">
                            <span className="count">
                              0
                            </span>
                          </div>
                        </a>
                      </div>
                      <div className="ast-site-header-cart-data">
                        <div className="widget woocommerce widget_shopping_cart">
                          <div className="widget_shopping_cart_content">
                            <p className="woocommerce-mini-cart__empty-message">No products in the cart.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MobileHeader />
    </header>

  )
}
export default Header;
