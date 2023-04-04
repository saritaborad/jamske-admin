import SideImg from "../../images/login-rgt-img.png";
import Logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Verification() {
  return (
    <>
<div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 p-0 d-lg-block d-none">
                        <div className="login-side-img position-relative">
                            <img src={SideImg} alt="JAMSKE" className="w-100 side-img" />
                        </div>
                    </div>
                    <div className="col-lg-6 p-0">
                        <div className="login-main-area">
                            <div className="login-main-part-scroll">
                                <div className="login-main-side">
                                    <div className="m-auto login-main-box">
                                        <div className="w-100 text-center mb-5">
                                            <img src={Logo} alt="JAMSKE" className="img-fluid" />
                                        </div>
                                        <div className="mb-5">
                                            <h1>Verification</h1>
                                            <p>Enter your OTP that we send you on </p>
                                            <p><span id="emaid-id"> johndeo@gmail.com</span></p>
                                        </div>
                                        <form className="row">
                                        <div className="col-12 mb-3 mx-auto">
                                                    <ul className="row otp-verify-class me-0">
                                                        <li className="col-2 pe-0">
                                                            <input type="tel" className="form-control text-center login-comn-input" minLength="1" maxLength="1" placeholder="" />
                                                        </li>
                                                        <li className="col-2 pe-0">
                                                            <input type="tel" className="form-control text-center login-comn-input" minLength="1" maxLength="1" placeholder="" />
                                                        </li>
                                                        <li className="col-2 pe-0">
                                                            <input type="tel" className="form-control text-center login-comn-input" minLength="1" maxLength="1" placeholder="" />
                                                        </li>
                                                        <li className="col-2 pe-0">
                                                            <input type="tel" className="form-control text-center login-comn-input" minLength="1" maxLength="1" placeholder="" />
                                                        </li>
                                                        <li className="col-2 pe-0">
                                                            <input type="tel" className="form-control text-center login-comn-input" minLength="1" maxLength="1" placeholder="" />
                                                        </li>
                                                        <li className="col-2 pe-0">
                                                            <input type="tel" className="form-control text-center login-comn-input" minLength="1" maxLength="1" placeholder="" />
                                                        </li>
                                                    </ul>
                                                </div>
                                            <div className="col-12 mb-3 pt-2 text-center">
                                                <button type="submit" className="btn-comn-class w-100">
                                                Send Reset Link
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="login-btm-link text-center">
                                        <p>
                                        Want to change mail address?  <Link to="/forgotpassword"> Back</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
