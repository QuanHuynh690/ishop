import * as React from "react";
import Layout from "../../components/Layout";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./style.css";
function Login() {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const inputLogin = (event: any) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
    // console.log(event.target.value)
  };

  const submit = (e: any) => {
    e.preventDefault();
    console.log(login);
    login1(login);
  };
  const [error, setError] = useState("");
  const login1 = async (data: any) => {
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signIn",
        data,
      });

      console.log(result.data);
      localStorage.setItem("token", result.data.accessToken);
    } catch (error) {
      console.log(error.response.data.message);
      setError(error.response.data.message);
    }
  };
  return (
    <Layout productsInCart={[]}>
      <main>
        <div id="content" className="site-content">
          <div className="ast-container">
            <div id="primary" className="content-area primary">
              <main id="main" className="site-main">
                <article
                  className="post-8 page type-page status-publish ast-article-single"
                  id="post-8"
                  itemType="https://schema.org/CreativeWork"
                >
                  <header className="entry-header ast-no-thumbnail ast-no-meta">
                    <h1 className="entry-title" itemProp="headline">
                      My account
                    </h1>{" "}
                  </header>
                  <div className="entry-content clear" itemProp="text">
                    <div className="woocommerce">
                      <div className="woocommerce-notices-wrapper" />
                      <h2>Login</h2>
                      <form
                        className="woocommerce-form woocommerce-form-login login"
                        method="post"
                      >
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="username">
                            Username or email address&nbsp;
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className="woocommerce-Input woocommerce-Input--text input-text"
                            name="username"
                            id="username"
                            autoComplete="username"
                          />{" "}
                        </p>
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="password">
                            Password&nbsp;<span className="required">*</span>
                          </label>
                          <span className="password-input">
                            <input
                              className="woocommerce-Input woocommerce-Input--text input-text"
                              type="password"
                              name="password"
                              id="password"
                              autoComplete="current-password"
                            />
                            <span className="show-password-input" />
                          </span>
                        </p>
                        <p className="form-row">
                          <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                            <input
                              className="woocommerce-form__input woocommerce-form__input-checkbox"
                              name="rememberme"
                              type="checkbox"
                              id="rememberme"
                              defaultValue="forever"
                            />{" "}
                            <span>Remember me</span>
                          </label>
                          <div className="choose-auth">
                            <button
                              type="submit"
                              className="login-button"
                              name="login"
                            >
                              Log in
                            </button>
                            <div className="or-divide">
                              <span>or</span>
                            </div>
                            <Link to={`/register`}>
                              <button
                                type="submit"
                                className="second-button"
                                name="login"
                              >
                                Register Now
                              </button>
                            </Link>
                          </div>
                        </p>
                        <p className="woocommerce-LostPassword lost_password">
                          <a href="https://websitedemos.net/plant-store-02/my-account/lost-password/">
                            Lost your password?
                          </a>
                        </p>
                      </form>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>

        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Login From Here</h3>
                  <form onSubmit={submit}>
                    <p className="text-danger">{error}</p>
                    <label htmlFor="name">
                      Email Address <span>**</span>
                    </label>
                    <input
                      name="email"
                      id="name"
                      type="text"
                      placeholder="Enter Username or Email address..."
                      onChange={inputLogin}
                    />
                    <label htmlFor="pass">
                      Password <span>**</span>
                    </label>
                    <input
                      name="password"
                      id="pass"
                      type="password"
                      placeholder="Enter password..."
                      onChange={inputLogin}
                    />
                    <div className="login-action mb-20 fix">
                      <span className="log-rem f-left">
                        <input id="remember" type="checkbox" />
                        <label htmlFor="remember">Remember me!</label>
                      </span>
                      <span className="forgot-login f-right">
                        <Link to={`/`}>Lost your password?</Link>
                      </span>
                    </div>
                    <button className="btn theme-btn-2 w-100">Login Now</button>
                    <div className="or-divide">
                      <span>or</span>
                    </div>
                    <Link to={`/register`} className="btn theme-btn w-100">
                      Register Now
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  );
}

export default Login;
