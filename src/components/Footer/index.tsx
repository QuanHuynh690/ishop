import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo_shop.png";

const Footer = () => {
  return (
    // <div className="footer-area pl-100 pr-100">
    //   <div className="footer-area box-90 pt-100 pb-60" data-background="img/bg/footer.jpg" style={{ backgroundImage: 'url("img/bg/footer.jpg")' }}>
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-xl-5 col-lg-6 col-md-6 ">
    //           <div className="footer-widget mb-40 pr-70">
    //             <div className="footer-logo">
    //               <a href="#"><img src="./assets/logo_shop.png" alt="" /></a>
    //             </div>
    //             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt
    //             ut labore et dolore mag na
    //             aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    //             ex ea commodo consequat.
    //               </p>
    //             <div className="footer-time d-flex mt-30">
    //               <div className="time-icon">
    //                 <img src="./assets/time.png" alt="" />
    //               </div>
    //               <div className="time-text">
    //                 <span>Got Questions ? Call us 24/7!</span>
    //                 <h2>(0600) 874 548</h2>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-xl-2 col-lg-3 col-md-3">
    //           <div className="footer-widget mb-40">
    //             <h3>Social Media</h3>
    //             <ul className="footer-link">
    //               <li><a href="#">Facebook</a></li>
    //               <li><a href="#">Twitter</a></li>
    //               <li><a href="#">Behance</a></li>
    //               <li><a href="#"> Dribbble</a></li>
    //               <li><a href="#">Linkedin</a></li>
    //               <li><a href="#">Youtube</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-xl-3 col-lg-2 col-md-3 d-md-none d-xl-block">
    //           <div className="footer-widget pl-50 mb-40">
    //             <h3>Location</h3>
    //             <ul className="footer-link">
    //               <li><a href="#">New York</a></li>
    //               <li><a href="#">Tokyo</a></li>
    //               <li><a href="#">Dhaka</a></li>
    //               <li><a href="#">Chittagong</a></li>
    //               <li><a href="#">China</a></li>
    //               <li><a href="#">Japan</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-xl-2 col-lg-3 col-md-3">
    //           <div className="footer-widget mb-40">
    //             <h3>About</h3>
    //             <ul className="footer-link">
    //               <li><a href="#">Terms &amp; Conditions</a></li>
    //               <li><a href="#"> Privacy Policy</a></li>
    //               <li><a href="#">Contact Us</a></li>
    //               <li><a href="#">FAQ</a></li>
    //               <li><a href="#">Wholesale</a></li>
    //               <li><a href="#">Direction</a></li>
    //             </ul>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer className="site-footer" id="colophon">
      <div
        className="site-primary-footer-wrap ast-builder-grid-row-container site-footer-focus-item ast-builder-grid-row-4-equal ast-builder-grid-row-tablet-2-equal ast-builder-grid-row-mobile-full ast-footer-row-stack ast-footer-row-tablet-stack ast-footer-row-mobile-stack"
        data-section="section-primary-footer-builder"
      >
        <div className="ast-builder-grid-row-container-inner">
          <div className="ast-builder-footer-grid-columns site-primary-footer-inner-wrap ast-builder-grid-row">
            <div className="site-footer-primary-section-1 site-footer-section site-footer-section-1">
              <aside className="footer-widget-area widget-area site-footer-focus-item">
                <div className="footer-widget-area-inner site-info-inner">
                  <section id="text-3" className="widget widget_text">
                    <h2 className="widget-title">
                      Get In Touch With Us For The Best Quality Plants &amp;
                      Succulents
                    </h2>
                    <div className="textwidget">
                      <p>
                        Qui dolore ipsum quia dolor sit amet, consec tetur
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidunt lores ta porro ame.
                      </p>
                    </div>
                  </section>
                </div>
              </aside>
            </div>
            <div className="site-footer-primary-section-2 site-footer-section site-footer-section-2">
              <aside
                className="footer-widget-area widget-area site-footer-focus-item"
                data-section="sidebar-widgets-footer-widget-2"
                aria-label="Footer Widget 2"
              >
                <div className="footer-widget-area-inner site-info-inner">
                  <section id="text-4" className="widget widget_text">
                    <div className="textwidget">
                      <p>
                        <img
                          loading="lazy"
                          className="alignnone wp-image-1018"
                          src={logo}
                          alt="Shop!"
                          width={92}
                          height={92}
                        />
                      </p>
                      <p>
                        <strong>
                          <span className="uabb-heading-text">Shop!</span>
                        </strong>
                      </p>
                    </div>
                  </section>
                </div>
              </aside>
              <div
                className="ast-builder-layout-element ast-flex site-footer-focus-item"
                data-section="section-fb-social-icons-1"
              >
                <div className="ast-footer-social-1-wrap ast-footer-social-wrap">
                  <div className="footer-social-inner-wrap element-social-inner-wrap social-show-label-false ast-social-color-type-custom ast-social-stack-none ast-social-element-style-filled">
                    <Link
                      to={`/`}
                      aria-label="Facebook"
                      target="_blank"
                      style={{
                        color: "#557dbc",
                        backgroundColor: "transparent",
                      }}
                      className="ast-builder-social-element ast-inline-flex ast-facebook footer-social-item"
                    >
                      <i className="fab fa-facebook fa-2x" />
                    </Link>
                    <Link
                      to={`/`}
                      aria-label="Twitter"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#7acdee",
                        backgroundColor: "transparent",
                      }}
                      className="ast-builder-social-element ast-inline-flex ast-twitter footer-social-item"
                    >
                      <i className="fab fa-twitter fa-2x" />
                    </Link>
                    <Link
                      to={`/`}
                      aria-label="Instagram"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#8a3ab9",
                        backgroundColor: "transparent",
                      }}
                      className="ast-builder-social-element ast-inline-flex ast-instagram footer-social-item"
                    >
                      <i className="fab fa-instagram fa-2x" />
                    </Link>
                    <Link
                      to={`/`}
                      aria-label="Linkedin"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#1c86c6",
                        backgroundColor: "transparent",
                      }}
                      className="ast-builder-social-element ast-inline-flex ast-linkedin footer-social-item"
                    >
                      <i className="fab fa-linkedin fa-2x" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-footer-primary-section-3 site-footer-section site-footer-section-3">
              <aside
                className="footer-widget-area widget-area site-footer-focus-item"
                data-section="sidebar-widgets-footer-widget-3"
                aria-label="Footer Widget 3"
              >
                <div className="footer-widget-area-inner site-info-inner">
                  <section id="nav_menu-3" className="widget widget_nav_menu">
                    <h2 className="widget-title">Quick Links</h2>
                    <nav
                      className="menu-quick-links-container"
                      aria-label="Quick Links"
                    >
                      <ul id="menu-quick-links" className="menu">
                        <li
                          id="menu-item-1302"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1302"
                        >
                          <Link to={`/`} className="menu-link">
                            Introduction
                          </Link>
                        </li>
                        <li
                          id="menu-item-1303"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1303"
                        >
                          <Link to={`/`} className="menu-link">
                            know more About Us
                          </Link>
                        </li>
                        <li
                          id="menu-item-1304"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1304"
                        >
                          <Link to={`/`} className="menu-link">
                            Visit Store
                          </Link>
                        </li>
                        <li
                          id="menu-item-1305"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1305"
                        >
                          <Link to={`/`} className="menu-link">
                            Let’s Connect
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </section>
                </div>{" "}
              </aside>
            </div>
            <div className="site-footer-primary-section-4 site-footer-section site-footer-section-4">
              <aside
                className="footer-widget-area widget-area site-footer-focus-item"
                data-section="sidebar-widgets-footer-widget-4"
                aria-label="Footer Widget 4"
              >
                <div className="footer-widget-area-inner site-info-inner">
                  <section id="nav_menu-4" className="widget widget_nav_menu">
                    <h2 className="widget-title">Important Links</h2>
                    <nav
                      className="menu-important-links-container"
                      aria-label="Important Links"
                    >
                      <ul id="menu-important-links" className="menu">
                        <li
                          id="menu-item-1306"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1306"
                        >
                          <Link to={`/`} className="menu-link">
                            Privacy Policy
                          </Link>
                        </li>
                        <li
                          id="menu-item-1307"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1307"
                        >
                          <Link to={`/`} className="menu-link">
                            Shipping Details
                          </Link>
                        </li>
                        <li
                          id="menu-item-1308"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1308"
                        >
                          <Link to={`/`} className="menu-link">
                            Terms &amp; Conditions
                          </Link>
                        </li>
                        <li
                          id="menu-item-1309"
                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1309"
                        >
                          <Link to={`/`} className="menu-link">
                            Media Kit
                          </Link>
                        </li>
                      </ul>
                    </nav>
                  </section>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
