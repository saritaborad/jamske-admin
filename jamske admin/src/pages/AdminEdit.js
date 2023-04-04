import UserLayout from "../components/UserLayout";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useState } from "react";
import Profile from "../images/admin.png";

export default function AdminEdit() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");

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
                        <div className="col-12 mt-3">
                            <div className="dash-top-box">
                                <div className="set-box-head mb-4 pb-4">
                                    <div className="d-md-flex d-block user-info-hdr">
                                        <div className="user-info-pro">
                                            <img src={Profile} alt="User Profile" />
                                        </div>
                                        <div className="ms-md-4">
                                            <bdi>Jane Doe</bdi>
                                            <div className="user-role">Sub admin</div>
                                            <div className="user-info">janedoe@gmail.com</div>
                                        </div>
                                        <div className="ms-md-4 mt-auto user-info">+1 (515) 516 0624</div>
                                        <div className="ms-md-auto">
                                            <span className="comn-status-class received-class m-auto">Active</span>
                                        </div>
                                    </div>
                                </div>

                                <Formik
                                    // innerRef={this.runforms}
                                    enableReinitialize
                                    initialValues={{
                                        fname: fname,
                                        lname: lname,
                                        email: email,
                                    }}
                                    validationSchema={Yup.object({
                                        fname: Yup.string().required("First name is required."),
                                        lname: Yup.string().required("Last name is required."),
                                        email: Yup.string().email("Enter valid email address.").required("Email is required."),
                                    })}
                                    onSubmit={(formData, { resetForm }) => {
                                        submitFormData(formData, resetForm);
                                    }}
                                >
                                    {(runform) => (
                                        <form onSubmit={runform.handleSubmit}>
                                            <div className="set-box-head mb-4 pb-4">
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6 mb-3">
                                                        <label className="d-block login-label-text mb-2">First Name</label>
                                                        <input type="text" className="form-control login-comn-input px-3 bg-white" {...formAttr(runform, "fname")} name="fname" placeholder="Enter Your First Name" />
                                                        {errorContainer(runform, "fname")}
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 mb-3">
                                                        <label className="d-block login-label-text mb-2">Last Name</label>
                                                        <input type="text" className="form-control login-comn-input px-3 bg-white" {...formAttr(runform, "lname")} name="lname" placeholder="Enter Your Last Name" />
                                                        {errorContainer(runform, "lname")}
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 mb-3">
                                                        <label className="d-block login-label-text mb-2">Email Address</label>
                                                        <input type="email" className="form-control login-comn-input px-3 bg-white" {...formAttr(runform, "email")} name="email" placeholder="Enter Your Email Address" />
                                                        {errorContainer(runform, "email")}
                                                    </div>
                                                    <div className="col-lg-4 col-md-6 mb-3">
                                                        <label className="d-block login-label-text mb-2">User Role</label>
                                                        <select className="form-select login-comn-input px-3 bg-white">
                                                            <option>User Role</option>
                                                            <option>Admin</option>
                                                            <option>Sub Admin</option>
                                                            <option>Contributor</option>
                                                            <option>Staff</option>
                                                        </select>
                                                    </div>
                                                    <div className="col-lg-4 mb-3">
                                                        <label className="d-block login-label-text mb-2">Status</label>
                                                        <select className="form-select login-comn-input px-3 bg-white">
                                                            <option>Active</option>
                                                            <option>Deactive</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="set-box-head border-0">
                                                <div className="dash-part-hdr permission-table">
                                                    <div className="dash-part-table-hdr">
                                                        <span>Permissions</span>
                                                    </div>
                                                    <div className="table-responsive">
                                                        <table className="table table-striped mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">Module</th>
                                                                    <th scope="col">Read</th>
                                                                    <th scope="col">Write</th>
                                                                    <th scope="col">Create</th>
                                                                    <th scope="col">Delete</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">Admin</th>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="read-1" name="read-1" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="write-1" name="write-1" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="create-1" name="create-1" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="delete-1" name="delete-1" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Sub Admin</th>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="read-2" name="read-2" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="write-2" name="write-2" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="create-2" name="create-2" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="delete-2" name="delete-2" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Staff</th>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="read-3" name="read-3" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="write-3" name="write-3" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="create-3" name="create-3" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="delete-3" name="delete-3" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">Contributor</th>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="read-4" name="read-4" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="write-4" name="write-4" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="create-4" name="create-4" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                    <td>
                                                                        <label className="cust-chk-bx">
                                                                            <input type="checkbox" id="delete-4" name="delete-4" />
                                                                            <span className="cust-chkmark"></span>
                                                                        </label>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                                <div className="row mt-3">
                                                    <div className="col-xxl-2 col-md-3 mb-2">
                                                        <button type="submit" className="btn-comn-class  w-100">
                                                            Save Changes
                                                        </button>
                                                    </div>
                                                    <div className="col-xxl-2 col-md-3 col-sm-6 mb-2">
                                                        <button type="button" className="btn-comn-class-2 w-100">
                                                            Reset
                                                        </button>
                                                    </div>
                                                    <div className="col-xxl-2 col-md-3 col-sm-6 mb-2">
                                                        <button type="button" className="btn-comn-class-2 btn-red-bg w-100">
                                                            Delete User
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
