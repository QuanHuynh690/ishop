import * as React from 'react';
import { useState } from 'react'
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom'
import axios from 'axios'
import clsx from 'clsx'
import './style.scss'
import { useForm } from 'react-hook-form';
interface FormData {
  username:string;
  password:string;
  confirmPassword:string;
}
function Register() {
  // const [register, setRegister] = useState({
  //   fullname: "",
  //   email: "",
  //   password: ""
  // })
  // const input = (event: any) => {
  //   setRegister({
  //     ...register,
  //     [event.target.name]: event.target.value
  //   })
  //   console.log(event.target.value)
  // }
  //     const inputEmail = event => {
  //         setRegister({
  //            ...register,
  //            Email: event.target.value})
  // }
  //     const inputPassword = event => {
  //         setRegister({
  //                 ...register,
  //                 Password: event.target.value})
  //     }
  
const {register,handleSubmit,formState:{errors}}= useForm<FormData>()
const onSubmit = handleSubmit(data => console.log(data));
const submitRegister = (e: any) => {
  e.preventDefault();
  console.log(register)
  // register1(register)
}
  // const register1 = async (data: any) => {
  //   try {
  //     const result = await axios({
  //       method: "POST",
  //       url: "https://min-shop.herokuapp.com/rest/user/signUp",
  //       data
  //     });

  //     console.log(result.data);
  //     localStorage.setItem("token", result.data.accessToken)
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // }
  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
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
                    </h1>
                  </header>
                  <div className="entry-content clear" itemProp="text">
                    <div className="woocommerce">
                      <div className="woocommerce-notices-wrapper" />
                      <h2>Register</h2>
                      <form onSubmit={onSubmit}
                        className="woocommerce-form woocommerce-form-login login"
                        method="post"
                      >
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="username">
                            Username&nbsp;
                            <span className="required">*</span>
                          </label>
                          <input
                            type="text"
                            className={ clsx({'error-input':errors.username},'woocommerce-Input woocommerce-Input--text input-text')}
                            // name="username"
                            id="username"
                            autoComplete="username"
                            {...register("username",{required: true})}
                          />
                        </p>
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="password">
                            Password&nbsp;<span className="required">*</span>
                          </label>
                          <span className="password-input">
                            <input
                              className={ clsx({'error-input':errors.password},'woocommerce-Input woocommerce-Input--text input-text')}
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              {...register("password",{required: true})}
                            />
                            <span className="show-password-input" />
                          </span>
                        </p>
                        <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                          <label htmlFor="password">
                            Your password again&nbsp;<span className="required">*</span>
                          </label>
                          <span className="password-input">
                            <input
                              className={ clsx({'error-input':errors.confirmPassword},'woocommerce-Input woocommerce-Input--text input-text')}
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              {...register("confirmPassword",{required: true})}
                            />
                            <span className="show-password-input" />
                          </span>
                        </p>
                        <p className="form-row">
                          <div className="choose-auth">
                            <button
                              type="submit"
                              className="login-button"
                              name="login"
                              onClick={onSubmit}
                            >
                              Register
                            </button>
                            <div className="or-divide">
                              <span>or</span>
                            </div>
                            <Link to={`/login`}>
                              <button
                                type="submit"
                                className="second-button"
                                name="login"
                              >
                                Login Now
                              </button>
                            </Link>
                          </div>
                        </p>
                      </form>
                    </div>
                  </div>
                </article>
              </main>
            </div>
          </div>
        </div>
        {/* login Area End*/}
      </main>
    </Layout>
  )
}

export default Register