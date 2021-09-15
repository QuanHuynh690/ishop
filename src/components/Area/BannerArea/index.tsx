import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import clsx from "clsx";
import "./index.scss";
interface BannerProps {
  page: string;
  title: string;
}
const Banner = (props: BannerProps) => {
  let route = useLocation();
  console.log(route.pathname);
  const { title, page } = props;
  const [isScrolled, setScrolled] = useState<boolean>(false);
  function handleScroll() {
    setScrolled(!!window.scrollY);
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
  });
  return (
    <>
      <section
        className={clsx(
          { scrolled: isScrolled },
          `banner-${page} banner-container`
        )}
      >
        <div
          className={clsx(
            {
              "banner-wrapper-other": route.pathname !== "/",
            },
            "ast-flex banner-wrapper"
          )}
        >
          <div className="banner-content">
            {route.pathname === "/" && (
              <h5 className="banner-sub-title">Best Quality Products</h5>
            )}
            <h1 className="banner-title">{title}</h1>{" "}
            {route.pathname === "/" && (
              <Link
                to={`/`}
                className="elementor-button-link elementor-button elementor-size-md"
                role="button"
              >
                <span className="elementor-button-content-wrapper">
                  <span className="elementor-button-text">Shop Now</span>
                </span>
              </Link>
            )}
          </div>
        </div>
      </section>
      {route.pathname === "/" && (
        <section className="benefit-area">
          <div className="benefit-item-wrapper ast-flex">
            <div className="benefit-item ast-flex">
              <span className="benefit-icon ast-flex">
                <i aria-hidden="true" className="fas fa-box" />
              </span>
              <div>
                <h5 className="benefit-title">High quality products</h5>
                <p className="benefit-sentence">The best products for you</p>
              </div>
            </div>
          </div>
          <div className="benefit-item-wrapper ast-flex">
            <div className="benefit-item ast-flex">
              <span className="benefit-icon ast-flex">
                <i aria-hidden="true" className="fas fa-shipping-fast" />
              </span>
              <div>
                <h5 className="benefit-title">Free Shipping</h5>
                <p className="benefit-sentence">Free shipping on order</p>
              </div>
            </div>
          </div>
          <div className="benefit-item-wrapper ast-flex">
            <div className="benefit-item ast-flex">
              <span className="benefit-icon ast-flex">
                <i aria-hidden="true" className="fas fa-sync" />
              </span>
              <div>
                <h5 className="benefit-title">100% Money Back</h5>
                <p className="benefit-sentence">If the item didn't suit you</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default Banner;
