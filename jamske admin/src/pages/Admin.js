import UserLayout from "../components/UserLayout";
import MUIDataTable from "mui-datatables";
import Profile from "../images/customer.png";
import { Offcanvas } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { useState } from "react";

export default function Admin() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
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
    const options = {
        page: 1,
        show: false,
        sizePerPage: 5,
        totalSize: 10,
        responsive: "standard",
        onColumnSortChange: (changedColumn, direction) => console.log("changedColumn: ", changedColumn, "direction: ", direction),
        onChangeRowsPerPage: (numberOfRows) => console.log("numberOfRows: ", numberOfRows),
        onChangePage: (currentPage) => console.log("currentPage: ", currentPage),
        selectableRows: false,
        download: false,
        print: false,
        viewColumns: false,
        sort: true,
        pagination: true,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Admin = [
        {
            no: "1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Role: "Admin",
        },
        {
            no: "1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Role: "Admin",
        },
        {
            no: "1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Role: "Admin",
        },
        {
            no: "1",
            Name: "John Deo",
            Mail_ID: "johndeo@gmail.com",
            Role: "Admin",
        },
    ];
    const columns = [
        {
            name: "no",
            label: "No.",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "table-head-class" }),
            },
        },
        {
            name: "Photo",
            label: "Photo",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "table-head-class" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                        <span className="comn-table-profile">
                            <img src={Profile} className="img-fluid" alt="Profile" />
                        </span>
                    );
                },
            },
        },
        {
            name: "Name",
            label: "Name",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Mail_ID",
            label: "Mail ID",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Role",
            label: "Role",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Status",
            label: "Status",
            options: {
                filter: false,
                sort: true,
                customBodyRenderLite: (dataIndex) => {
                    return <span className="comn-status-class received-class">Active</span>;
                },
            },
        },
        {
            label: "Action",
            name: "Action",
            options: {
                filter: false,
                sort: false,
                setCellProps: () => ({ className: "text-center" }),
                setCellHeaderProps: () => ({ className: "text-center" }),
                customBodyRenderLite: (dataIndex) => {
                    return (
                      <div className="table-ed-drop">
                      <Dropdown drop="left">
                          <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                              </svg>
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                              <Dropdown.Item href="/admin-edit">
                                  <bdi className="d-flex align-items-center">
                                      <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M10 14C8.35987 14.0204 6.7367 13.6664 5.254 12.965C4.10469 12.4042 3.07265 11.6297 2.213 10.683C1.30243 9.7041 0.585467 8.56164 0.1 7.31598L0 6.99998L0.105 6.68398C0.590815 5.43941 1.30624 4.29725 2.214 3.31698C3.07334 2.37029 4.10504 1.59584 5.254 1.03498C6.73671 0.333567 8.35988 -0.0204101 10 -2.11214e-05C11.6401 -0.0203749 13.2633 0.333601 14.746 1.03498C15.8953 1.59571 16.9274 2.37017 17.787 3.31698C18.6993 4.29453 19.4165 5.43734 19.9 6.68398L20 6.99998L19.895 7.31598C18.3262 11.3998 14.3742 14.0693 10 14ZM10 1.99998C6.59587 1.89331 3.47142 3.87507 2.117 6.99998C3.4712 10.1251 6.59579 12.1069 10 12C13.4041 12.1064 16.5284 10.1247 17.883 6.99998C16.5304 3.87356 13.4047 1.89106 10 1.99998ZM10 9.99998C8.55733 10.0095 7.30937 8.99734 7.02097 7.58375C6.73256 6.17017 7.48427 4.75 8.81538 4.19364C10.1465 3.63728 11.6852 4.10011 12.4885 5.29849C13.2919 6.49686 13.1354 8.09606 12.115 9.11598C11.5563 9.68124 10.7948 9.99954 10 9.99998Z"
                                              fill="#1A202C"
                                          />
                                      </svg>
                                      <span className="ms-2">Details</span>
                                  </bdi>
                              </Dropdown.Item>
                              <Dropdown.Item href="/admin-edit">
                                  <bdi className="d-flex align-items-center">
                                      <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M1.41999 19.079C1.13948 19.0785 0.872062 18.9603 0.682993 18.753C0.490439 18.5475 0.394758 18.2695 0.419993 17.989L0.664993 15.295L11.983 3.98103L15.52 7.51703L4.20499 18.83L1.51099 19.075C1.47999 19.078 1.44899 19.079 1.41999 19.079ZM16.226 6.81003L12.69 3.27403L14.811 1.15303C14.9986 0.965251 15.2531 0.859741 15.5185 0.859741C15.7839 0.859741 16.0384 0.965251 16.226 1.15303L18.347 3.27403C18.5348 3.4616 18.6403 3.71612 18.6403 3.98153C18.6403 4.24694 18.5348 4.50146 18.347 4.68903L16.227 6.80903L16.226 6.81003Z"
                                              fill="#1A202C"
                                          />
                                      </svg>
                                      <span className="ms-2">Edit</span>
                                  </bdi>
                              </Dropdown.Item>
                              <Dropdown.Item>
                                  <bdi className="d-flex align-items-center">
                                      <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path
                                              d="M14 20H4C2.89543 20 2 19.1046 2 18V5H0V3H4V2C4 0.89543 4.89543 0 6 0H12C13.1046 0 14 0.89543 14 2V3H18V5H16V18C16 19.1046 15.1046 20 14 20ZM4 5V18H14V5H4ZM6 2V3H12V2H6ZM12 16H10V7H12V16ZM8 16H6V7H8V16Z"
                                              fill="#1A202C"
                                          />
                                      </svg>
                                      <span className="ms-2">Delete</span>
                                  </bdi>
                              </Dropdown.Item>
                          </Dropdown.Menu>
                      </Dropdown>
                  </div>
                    );
                },
            },
        },
    ];

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Admin</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <button className="w-100 btn-comn-class" onClick={handleShow}>Add Admin</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="bx-white-main comn-table-box">
                                    <MUIDataTable data={Admin} columns={columns} options={options} />
                                </div>
                            </div>
                        </div>
                        <Offcanvas show={show} onHide={handleClose} placement="end" className="add-admin-box-main">
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Add New Admin</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    <Formik
                                        // innerRef={this.runforms}
                                        enableReinitialize
                                        initialValues={{
                                            fname: fname,
                                            lname: lname,
                                            email: email,
                                            password: password,
                                        }}
                                        validationSchema={Yup.object({
                                            fname: Yup.string().required("First name is required."),
                                            lname: Yup.string().required("Last name is required."),
                                            email: Yup.string().email("Enter valid email address.").required("Email is required."),
                                            password: Yup.string().required("Password is required."),
                                        })}
                                        onSubmit={(formData, { resetForm }) => {
                                            submitFormData(formData, resetForm);
                                        }}
                                    >
                                        {(runform) => (
                                            <form className="row" onSubmit={runform.handleSubmit}>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">First Name</label>
                                                    <input type="text" className="form-control login-comn-input px-3" {...formAttr(runform, "fname")} name="fname" placeholder="Enter Your First Name" />
                                                    {errorContainer(runform, "fname")}
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Last Name</label>
                                                    <input type="text" className="form-control login-comn-input px-3" {...formAttr(runform, "lname")} name="lname" placeholder="Enter Your Last Name" />
                                                    {errorContainer(runform, "lname")}
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Email Address</label>
                                                    <input type="email" className="form-control login-comn-input px-3" {...formAttr(runform, "email")} name="email" placeholder="Enter Your Email Address" />
                                                    {errorContainer(runform, "email")}
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Role</label>
                                                    <select className="form-select login-comn-input px-3">
                                                        <option>User Role</option>
                                                        <option>Admin</option>
                                                        <option>Sub Admin</option>
                                                        <option>Contributor</option>
                                                        <option>Staff</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 mb-3">
                                                    <label className="d-block login-label-text mb-2">Default Password</label>
                                                    <input type="password" className="form-control login-comn-input px-" {...formAttr(runform, "password")} name="password" placeholder="Enter Your Password" />
                                                    {errorContainer(runform, "password")}
                                                </div>
                                                <div className="col-sm-6 mb-3">
                                                    <button type="submit" className="btn-comn-class  w-100">
                                                        Add Admin
                                                    </button>
                                                </div>
                                                <div className="col-sm-6 mb-3">
                                                    <button type="button" className="btn-comn-class-2 w-100">
                                                        Cancel
                                                    </button>
                                                </div>
                                            </form>
                                        )}
                                    </Formik>
                                </Offcanvas.Body>
                            </Offcanvas>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
