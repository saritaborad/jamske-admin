import SideImg from "../../images/login-rgt-img.png";
import Logo from "../../images/logo.svg";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Login(params) {
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");

    const submitFormData = (formData, resetForm) => {
        console.log("form :: ", formData);
    };

    const errorContainer = (form, field) => {
        return form.touched[field] && form.errors[field] ? <span className="error text-danger">{form.errors[field]}</span> : null;
    };

    const formAttr = (form, field) => ({
        onBlur: form.handleBlur,
        onChange: form.handleChange,
        value: form.values[field],
    });

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
                                            <h1>Let’s sign you in.</h1>
                                            <p>Welcom Mr.Johndeo, provide your login information and continue with jamske</p>
                                        </div>
                                        <Formik
                                                    // innerRef={this.runforms}
                                                    enableReinitialize
                                                    initialValues={{
                                                        number: number,
                                                        password: password,
                                                    }}
                                                    validationSchema={Yup.object({
                                                        number: Yup.string().required("Mobile Number is required."),
                                                        password: Yup.string().required("Password is required."),
                                                    })}
                                                    onSubmit={(formData, { resetForm }) => {
                                                        submitFormData(formData, resetForm);
                                                    }}
                                                >
                                                    {(runform) => (
                                        <form className="row" onSubmit={runform.handleSubmit}>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Mobile Number</label>
                                                <input type="tel" className="form-control login-comn-input" name="number" {...formAttr(runform, "number")} placeholder="Enter your mobile number" />
                                                {errorContainer(runform, "number")}
                                            </div>
                                            <div className="col-12 mb-3">
                                                <label className="d-block login-label-text mb-2">Password</label>
                                                <input type="password" className="form-control login-comn-input" {...formAttr(runform, "password")} name="password" placeholder="*******" />
                                                {errorContainer(runform, "password")}
                                            </div>
                                            <div className="col-6 mb-3">
                                                <div className="custom-checkbox">
                                                    <label className="custom-lbl-part">
                                                        <input type="checkbox" id="rememberme" />
                                                        <span className="custom-checkbox-class"></span>
                                                        Remember Me
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="col-6 mb-3 text-end">
                                                <div className="d-inline-block form-link-style">
                                                    <Link to="/forgotpassword">Forgot Password ?</Link>
                                                </div>
                                            </div>
                                            <div className="col-12 mb-3 pt-2 text-center">
                                                <button type="submit" className="btn-comn-class w-100">
                                                    Sign In
                                                </button>
                                            </div>
                                        </form>)}</Formik>
                                    </div>
                                    <div className="login-btm-link text-center">
                                        <p>
                                            Don’t have an account? <Link to="/"> Register</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
