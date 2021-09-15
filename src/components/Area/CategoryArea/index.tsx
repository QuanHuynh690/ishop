/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.scss";
const CategoryArea = () => {
  return (
    <section className="category-area">
      <div className="category-item-wrapper cate-phone">
        <div className="category-content">
          <h4 className="category-text">Smartphone</h4>
          <p className="category-text">
            The best smartphone with cheapest price.
          </p>
          <a
            href="#"
            className="elementor-button-link elementor-button elementor-size-sm"
            role="button"
          >
            <span className="elementor-button-text">See Collection</span>
          </a>
        </div>
      </div>
      <div className="category-item-wrapper cate-tablet">
        <div className="category-content">
          <h4 className="category-text">Tablet</h4>
          <p className="category-text">
            Let our tablets make your experience better.
          </p>
          <a
            href="#"
            className="elementor-button-link elementor-button elementor-size-sm"
            role="button"
          >
            <span className="elementor-button-text">See Collection</span>
          </a>
        </div>
      </div>
      <div className="category-item-wrapper cate-camera">
        <div className="category-content">
          <h4 className="category-text"> Variaty Camera</h4>
          <p className="category-text">
            Capture every precious moment in your life.
          </p>
          <a
            href="#"
            className="elementor-button-link elementor-button elementor-size-sm"
            role="button"
          >
            <span className="elementor-button-text">See Collection</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default CategoryArea;
