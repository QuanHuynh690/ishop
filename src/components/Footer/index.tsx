import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import logo from "../../assets/images/logo_shop.png";
import { images } from "../../assets";

const Footer = () => {
  return (
    <footer className="footer" id="colophon">
      <div className="footer-container">
        <div className="site-footer-focus-item">
          <h2 className="footer-title">
            Get In Touch With Us For The Best Quality Plants &amp; Succulents
          </h2>
          <div className="textwidget">
            <p>
              Qui dolore ipsum quia dolor sit amet, consec tetur adipisci velit,
              sed quia non numquam eius modi tempora incidunt lores ta porro
              ame.
            </p>
          </div>
        </div>
        <div className="footer-social">
          <div className="footer-logo">
            <img
              loading="lazy"
              className="alignnone wp-image-1018"
              src={logo}
              alt="Shop!"
              width={120}
            />
            <p>
              <strong>
                <span className="uabb-heading-text">Shop!</span>
              </strong>
            </p>
          </div>
          <div className="ast-builder-layout-element ast-flex">
            <Link to={`/`} target="_blank" className="footer-social-item">
              <span className="social-icon">
                <images.Facebook />
              </span>
            </Link>
            <Link to={`/`} target="_blank" className="footer-social-item">
              <span className="social-icon">
                <images.Twitter />
              </span>
            </Link>
            <Link to={`/`} target="_blank" className="footer-social-item">
              <span className="social-icon">
                <images.Instagram />
              </span>
            </Link>
            <Link to={`/`} target="_blank" className="footer-social-item">
              <span className="social-icon">
                <images.Linkedin />
              </span>
            </Link>
          </div>
        </div>
        <div className="site-footer-focus-item">
          <div>
            <h2 className="footer-title">Quick Links</h2>
            <ul className="footer-menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1302">
                <Link to={`/`} className="menu-link">
                  Introduction
                </Link>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1303">
                <Link to={`/`} className="menu-link">
                  Know more About Us
                </Link>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1304">
                <Link to={`/`} className="menu-link">
                  Visit Store
                </Link>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1305">
                <Link to={`/`} className="menu-link">
                  Let’s Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="site-footer-focus-item">
          <div>
            <h2 className="footer-title">Important Links</h2>
            <ul className="footer-menu">
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1306">
                <Link to={`/`} className="menu-link">
                  Privacy Policy
                </Link>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1307">
                <Link to={`/`} className="menu-link">
                  Shipping Details
                </Link>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1308">
                <Link to={`/`} className="menu-link">
                  Terms &amp; Conditions
                </Link>
              </li>
              <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-1309">
                <Link to={`/`} className="menu-link">
                  Media Kit
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
