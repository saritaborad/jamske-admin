import UserLayout from "../components/UserLayout";
import { Nav, Row, Col, Tab } from "react-bootstrap";
import Profile from "../images/profile.png";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useState } from "react";

export default function Settings() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [mono, setNumber] = useState("");
    const [bank_name, setBankname] = useState("");
    const [account_name, setAccountname] = useState("");
    const [ac_no, setAccountNumber] = useState("");
    const [code, setCode] = useState("");
    const [old_password, setOldpassword] = useState("");
    const [new_password, setNewpassword] = useState("");
    const [confirm_password, setConfirmpassword] = useState("");
    const [Twitter_link, setTwlink] = useState("");
    const [Google_link, setGlink] = useState("");
    const [Facebook_link, setFblink] = useState("");
    const [LinkedIn_link, setLlink] = useState("");
    const [Instagram_link, setInstalink] = useState("");
    const [Quora_link, setQlink] = useState("");


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
        <UserLayout>
        <div className="content-main-section">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mt-2">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">
                                            Account Settings
                                            <i className="bi bi-chevron-right"></i>
                                            <span id="setting-tab">My Profile</span>
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-12 settings-main-part mt-2">
                                    <Tab.Container id="left-tabs-example" defaultActiveKey="my_profile">
                                        <Row>
                                            <Col lg={3}>
                                                <Nav variant="pills" className="flex-lg-column mb-lg-0 mb-3 nav-tabs-custom-class">
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="my_profile">My Profile</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="change_password">Change Password</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="social_accounts">Social Accounts</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="notification">Notification</Nav.Link>
                                                    </Nav.Item>
                                                    <Nav.Item>
                                                        <Nav.Link eventKey="logout" className="border-0" href="/login">
                                                            <button type="button" className="border-0 bg-white text-start w-100">Logout</button>
                                                        </Nav.Link>
                                                    </Nav.Item>
                                                </Nav>
                                            </Col>
                                            <Col lg={9}>
                                                <Tab.Content>
                                                    <Tab.Pane eventKey="my_profile">
                                                        <div className="dash-top-box">
                                                            <div className="set-box-head mb-4 pb-4">
                                                                <div className="set-comn-title">
                                                                    <h2>My Account</h2>
                                                                </div>
                                                                <div className="mt-3">
                                                                    <div className="d-md-flex d-block user-info-hdr me-auto">
                                                                        <div className="user-info-pro">
                                                                            <img src={Profile} alt="User Profile" />
                                                                        </div>
                                                                        <div className="ms-md-4">
                                                                            <bdi>John Doe</bdi>
                                                                            <div className="user-role">Admin</div>
                                                                            <div className="d-sm-flex d-block mt-2">
                                                                                <button type="button" className="btn-comn-class ">
                                                                                    Change
                                                                                </button>
                                                                                <button type="button" className="btn-comn-class-2 mt-2 mt-sm-0 ms-sm-2">
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <Formik
                                                                // innerRef={this.runforms}
                                                                enableReinitialize
                                                                initialValues={{
                                                                    fname:fname,
                                                                    lname:lname,
                                                                    email: email,
                                                                    mono: mono,
                                                                    bank_name: bank_name,
                                                                    account_name: account_name,
                                                                    ac_no: ac_no,
                                                                    code: code,
                                                                }}
                                                                validationSchema={Yup.object({
                                                                    fname: Yup.string().required("First name is required."),
                                                                    lname: Yup.string().required("Last name is required."),
                                                                    email: Yup.string().email("Enter valid email address.").required("Email is required."),
                                                                    mono: Yup.string().required("Mobile Number is required."),
                                                                    bank_name: Yup.string().required("Bank name is required."),
                                                                    account_name: Yup.string().required("Account name is required."),
                                                                    ac_no: Yup.string().required("Account Number is required."),
                                                                    code: Yup.string().required("Swift Code is required."),
                                                                })}
                                                                onSubmit={(formData, { resetForm }) => {
                                                                    submitFormData(formData, resetForm);
                                                                }}
                                                            >
                                                                {(runform) => (
                                                                    <form onSubmit={runform.handleSubmit}>
                                                                        <div className="set-box-head mb-4 pb-3">
                                                                            <div className="set-comn-title">
                                                                                <h2>Personal Information</h2>
                                                                            </div>
                                                                            <div className="mt-3">
                                                                                <div className="row">
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">First Name</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "fname")}
                                                                                            name="fname"
                                                                                            placeholder="Enter Your First Name"
                                                                                        />
                                                                                        {errorContainer(runform, "fname")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Last Name</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "lname")}
                                                                                            name="lname"
                                                                                            placeholder="Enter Your Last Name"
                                                                                        />
                                                                                        {errorContainer(runform, "lname")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Email Address</label>
                                                                                        <input
                                                                                            type="email"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "email")}
                                                                                            name="email"
                                                                                            placeholder="Enter Your Email Address"
                                                                                        />
                                                                                        {errorContainer(runform, "email")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Mobile Number</label>
                                                                                        <input
                                                                                            type="tel"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "mono")}
                                                                                            name="mono"
                                                                                            placeholder="Enter Your Mobile Number"
                                                                                        />
                                                                                        {errorContainer(runform, "mono")}
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="set-box-head border-0">
                                                                            <div className="set-comn-title">
                                                                                <h2>Bank Details</h2>
                                                                            </div>
                                                                            <div className="mt-3">
                                                                                <div className="row">
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Bank Name</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "bank_name")}
                                                                                            name="bank_name"
                                                                                            placeholder="Enter Your Bank Name"
                                                                                        />
                                                                                        {errorContainer(runform, "bank_name")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Account Name</label>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "account_name")}
                                                                                            name="account_name"
                                                                                            placeholder="Enter Your Account Name"
                                                                                        />
                                                                                        {errorContainer(runform, "account_name")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Account Number</label>
                                                                                        <input
                                                                                            type="tel"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            name="ac_no"
                                                                                            {...formAttr(runform, "ac_no")}
                                                                                            placeholder="Enter Your Account Number"
                                                                                        />
                                                                                        {errorContainer(runform, "ac_no")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Swift Code</label>
                                                                                        <input
                                                                                            type="tel"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            name="code"
                                                                                            {...formAttr(runform, "code")}
                                                                                            placeholder="Enter Your Swift Code"
                                                                                        />
                                                                                        {errorContainer(runform, "code")}
                                                                                    </div>
                                                                                    <div className="col-md-7 mt-sm-3">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-6">
                                                                                                <button type="submit" className="btn-comn-class  w-100">
                                                                                                    Save Changes
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="col-sm-6  mt-2 mt-sm-0">
                                                                                                <button type="button" className="btn-comn-class-2 w-100">
                                                                                                    Cancel
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                )}
                                                            </Formik>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="change_password">
                                                        <div className="dash-top-box">
                                                            <Formik
                                                                // innerRef={this.runforms}
                                                                enableReinitialize
                                                                initialValues={{
                                                                    old_password: old_password,
                                                                    new_password: new_password,
                                                                    confirm_password: confirm_password,
                                                                }}
                                                                validationSchema={Yup.object({
                                                                    old_password: Yup.string().required("Password is required."),
                                                                    new_password: Yup.string()
                                                                        .when("old_password", {
                                                                            is: (val) => (val && val.length > 0 ? true : false),
                                                                            then: Yup.string().notOneOf([Yup.ref("old_password")], "Password must be different from old password."),
                                                                        })
                                                                        .required("Password is required."),
                                                                    confirm_password: Yup.string()
                                                                        .when("new_password", {
                                                                            is: (val) => (val && val.length > 0 ? true : false),
                                                                            then: Yup.string().oneOf([Yup.ref("new_password")], "Retype password Correctly."),
                                                                        })
                                                                        .required("Confirmation of Password is required."),
                                                                })}
                                                                onSubmit={(formData, { resetForm }) => {
                                                                    submitFormData(formData, resetForm);
                                                                }}
                                                            >
                                                                {(runform) => (
                                                                    <form className="row" onSubmit={runform.handleSubmit}>
                                                                        <div className="col-md-6 mb-3">
                                                                            <label className="d-block login-label-text mb-2">Old Password</label>
                                                                            <bdi className="d-block position-relative show-class">
                                                                                <input
                                                                                    type="password"
                                                                                    className="form-control login-comn-input px-3 bg-white"
                                                                                    {...formAttr(runform, "old_password")}
                                                                                    name="old_password"
                                                                                    placeholder="Enter Your Old Password."
                                                                                />
                                                                                <span className="show-pwd">
                                                                                    <i className="bi bi-eye-slash"></i>
                                                                                </span>
                                                                            </bdi>
                                                                            {errorContainer(runform, "old_password")}
                                                                        </div>
                                                                        <div className="col-12">
                                                                            <div className="row">
                                                                                <div className="col-md-6 mb-3">
                                                                                    <label className="d-block login-label-text mb-2">New Password</label>
                                                                                    <bdi className="d-block position-relative show-class">
                                                                                        <input
                                                                                            type="password"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "new_password")}
                                                                                            name="new_password"
                                                                                            placeholder="Enter Your New Password."
                                                                                        />
                                                                                        <span className="show-pwd">
                                                                                            <i className="bi bi-eye-slash"></i>
                                                                                        </span>
                                                                                    </bdi>
                                                                                    {errorContainer(runform, "new_password")}
                                                                                </div>
                                                                                <div className="col-md-6 mb-3">
                                                                                    <label className="d-block login-label-text mb-2">Retype New Password</label>
                                                                                    <bdi className="d-block position-relative show-class">
                                                                                        <input
                                                                                            type="password"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "confirm_password")}
                                                                                            name="confirm_password"
                                                                                            placeholder="Retype Your New Password."
                                                                                        />
                                                                                        <span className="show-pwd">
                                                                                            <i className="bi bi-eye-slash"></i>
                                                                                        </span>
                                                                                    </bdi>
                                                                                    {errorContainer(runform, "confirm_password")}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-7 mt-sm-3">
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <button type="submit" className="btn-comn-class  w-100">
                                                                                        Save Changes
                                                                                    </button>
                                                                                </div>
                                                                                <div className="col-sm-6  mt-2 mt-sm-0">
                                                                                    <button type="button" className="btn-comn-class-2 w-100">
                                                                                        Cancel
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                )}
                                                            </Formik>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="social_accounts">
                                                        <div className="dash-top-box">
                                                            <Formik
                                                                // innerRef={this.runforms}
                                                                enableReinitialize
                                                                initialValues={{
                                                                    Twitter_link: Twitter_link,
                                                                    Google_link: Google_link,
                                                                    Facebook_link: Facebook_link,
                                                                    LinkedIn_link: LinkedIn_link,
                                                                    Instagram_link: Instagram_link,
                                                                    Quora_link: Quora_link,
                                                                }}
                                                                validationSchema={Yup.object({
                                                                    Twitter_link: Yup.string().required("Required."),
                                                                    Google_link: Yup.string().required("Required."),
                                                                    Facebook_link: Yup.string().required("Required."),
                                                                    LinkedIn_link: Yup.string().required("Required."),
                                                                    Instagram_link: Yup.string().required("Required."),
                                                                    Quora_link: Yup.string().required("Required."),
                                                                })}
                                                                onSubmit={(formData, { resetForm }) => {
                                                                    submitFormData(formData, resetForm);
                                                                }}
                                                            >
                                                                {(runform) => (
                                                                    <form onSubmit={runform.handleSubmit}>
                                                                        <div className="set-box-head border-0">
                                                                            <div className="set-comn-title">
                                                                                <h2>Social Accounts</h2>
                                                                            </div>
                                                                            <div className="mt-3">
                                                                                <div className="row">
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Twitter</label>
                                                                                        <input
                                                                                            type="url"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "Twitter_link")}
                                                                                            name="Twitter_link"
                                                                                            placeholder="Add Link"
                                                                                        />
                                                                                        {errorContainer(runform, "Twitter_link")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Facebook</label>
                                                                                        <input
                                                                                            type="url"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "Facebook_link")}
                                                                                            name="Facebook_link"
                                                                                            placeholder="Add Link"
                                                                                        />
                                                                                        {errorContainer(runform, "Facebook_link")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Google +</label>
                                                                                        <input
                                                                                            type="url"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "Google_link")}
                                                                                            name="Google_link"
                                                                                            placeholder="Add Link"
                                                                                        />
                                                                                        {errorContainer(runform, "Google_link")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">LinkedIn</label>
                                                                                        <input
                                                                                            type="url"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "LinkedIn_link")}
                                                                                            name="LinkedIn_link"
                                                                                            placeholder="Add Link"
                                                                                        />
                                                                                        {errorContainer(runform, "LinkedIn_link")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Instagram</label>
                                                                                        <input
                                                                                            type="url"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "Instagram_link")}
                                                                                            name="Instagram_link"
                                                                                            placeholder="Add Link"
                                                                                        />
                                                                                        {errorContainer(runform, "Instagram_link")}
                                                                                    </div>
                                                                                    <div className="col-md-6 mb-3">
                                                                                        <label className="d-block login-label-text mb-2">Quora</label>
                                                                                        <input
                                                                                            type="url"
                                                                                            className="form-control login-comn-input px-3 bg-white"
                                                                                            {...formAttr(runform, "Quora_link")}
                                                                                            name="Quora_link"
                                                                                            placeholder="Add Link"
                                                                                        />
                                                                                        {errorContainer(runform, "Quora_link")}
                                                                                    </div>
                                                                                    <div className="col-md-7 mt-sm-3">
                                                                                        <div className="row">
                                                                                            <div className="col-sm-6">
                                                                                                <button type="submit" className="btn-comn-class  w-100">
                                                                                                    Save Changes
                                                                                                </button>
                                                                                            </div>
                                                                                            <div className="col-sm-6  mt-2 mt-sm-0">
                                                                                                <button type="button" className="btn-comn-class-2 w-100">
                                                                                                    Cancel
                                                                                                </button>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </form>
                                                                )}
                                                            </Formik>
                                                        </div>
                                                    </Tab.Pane>
                                                    <Tab.Pane eventKey="notification">
                                                        <div className="dash-top-box">
                                                            <div className="set-box-head mb-4 pb-4">
                                                                <div className="set-comn-title">
                                                                    <h2>Activity</h2>
                                                                </div>
                                                                <div className=" set-noti-part">
                                                                    <div className="row  ms-2 mt-3">
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not1" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not1">
                                                                                    Email me whenever someone make changes in admin portal.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not2" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not2">
                                                                                    Email me whenever any payments recived.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not3" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not3">
                                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="set-box-head border-0">
                                                                <div className="set-comn-title">
                                                                    <h2>System</h2>
                                                                </div>
                                                                <div className=" set-noti-part">
                                                                    <div className="row  ms-2 mt-3">
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not4" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not4">
                                                                                    Email me whenever server down.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not5" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not5">
                                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not6" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not6">
                                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not7" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not7">
                                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-12 my-2">
                                                                            <div className="form-check form-switch row align-items-center">
                                                                                <input className="form-check-input col-1" type="checkbox" id="set_not8" />
                                                                                <label className="form-check-label ms-2 col-11" htmlFor="set_not8">
                                                                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-md-7 mt-sm-3">
                                                                            <div className="row">
                                                                                <div className="col-sm-6">
                                                                                    <button type="submit" className="btn-comn-class  w-100">
                                                                                        Save Changes
                                                                                    </button>
                                                                                </div>
                                                                                <div className="col-sm-6  mt-2 mt-sm-0">
                                                                                    <button type="button" className="btn-comn-class-2 w-100">
                                                                                        Cancel
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Tab.Pane>
                                                </Tab.Content>
                                            </Col>
                                        </Row>
                                    </Tab.Container>
                                </div>
                            </div>
                        </div>
                    </div>
        </UserLayout>
    </>
  )
}