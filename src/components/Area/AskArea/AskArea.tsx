/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.scss";
const AskArea = () => {
  return (
    <section className="ask-area">
      <div className="ask-button-wrapper">
        <h3 className="ask-title">Need help in choosing the right products?</h3>

        <a href="tel: +84903012621" className="ask-phone" role="button">
          <span className="elementor-button-content-wrapper">
            <span className="phone-icon">
              <i aria-hidden="true" className="fas fa-phone " />
            </span>
            <span className="elementor-button-text">Ask For Help</span>
          </span>
        </a>
      </div>
      <div className="ask-content">
        <p>
          Commodo sociosqu venenatis cras dolor sagittis integer luctus sem
          primis eget maecenas sedurna malesuada consectetuer.
        </p>
        <p>
          Ornare integer commodo mauris et ligula purus, praesent cubilia
          laboriosam viverra. Mattis id rhoncus. Integer lacus eu volutpat
          fusce. Elit etiam phasellus suscipit suscipit dapibus, condimentum
          tempor quis, turpis luctus dolor sapien vivamus.
        </p>
      </div>
    </section>
  );
};
export default AskArea;
