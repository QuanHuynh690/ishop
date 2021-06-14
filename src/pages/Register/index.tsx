import * as React from 'react';
import { useState } from 'react'
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom'
import axios from 'axios'

function Register() {
  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    password: ""
  })
  const input = (event: any) => {
    setRegister({
      ...register,
      [event.target.name]: event.target.value
    })
    // console.log(event.target.value)
  }
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
  const submitRegister = (e: any) => {
    e.preventDefault();
    console.log(register)
    register1(register)
  }

  const register1 = async (data: any) => {
    try {
      const result = await axios({
        method: "POST",
        url: "https://min-shop.herokuapp.com/rest/user/signUp",
        data
      });

      console.log(result.data);
      localStorage.setItem("token", result.data.accessToken)
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <Layout productsInCart={[]}>
      <main>
        {/* breadcrumb-area-start */}
        <section className="breadcrumb-area" style={{ backgroundImage: 'url("./assets/page-title.png")' }}>
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="breadcrumb-text text-center">
                  <h1>Register</h1>
                  <ul className="breadcrumb-menu">
                    <li><Link to={`/`}>home</Link></li>
                    <li><span>Register</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* breadcrumb-area-end */}
        {/* login Area Strat*/}
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  <h3 className="text-center mb-60">Signup From Here</h3>
                  <form onSubmit={submitRegister}>
                    <label htmlFor="name">Fullname <span>**</span></label>
                    <input name="fullname" id="name" type="text" placeholder="Enter Username or Email address..." onChange={input} />
                    <label htmlFor="email-id">Email Address <span>**</span></label>
                    <input name="email" id="email-id" type="text" placeholder="Enter Username or Email address..." onChange={input} />
                    <label htmlFor="pass">Password <span>**</span></label>
                    <input name="password" id="pass" type="password" placeholder="Enter password..." onChange={input} />
                    <div className="mt-10" />
                    <button className="btn theme-btn-2 w-100">Register Now</button>
                    <div className="or-divide"><span>or</span></div>
                    <Link to={`/login`} className="btn theme-btn w-100">login Now</Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* login Area End*/}
      </main>
    </Layout>
  )
}

export default Register