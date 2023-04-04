import UserLayout from "../components/UserLayout";
import Vendor from "../images/vendor.png";
import { Accordion } from "react-bootstrap";
import MUIDataTable from "mui-datatables";
import Product_1 from "../images/product_1.svg";
import Product_2 from "../images/product_2.svg";
import Product_3 from "../images/product_3.svg";
import Product_4 from "../images/product_4.svg";
import Product_5 from "../images/product_5.svg";
import Product_6 from "../images/product_6.svg";
import Product_7 from "../images/product_7.svg";
import Product_8 from "../images/product_8.svg";
import Product_9 from "../images/product_9.svg";
import Product_10 from "../images/product_10.svg";
import { Link } from "react-router-dom";

export default function VendorProfile() {
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
        pagination: false,
        filter: false,
        filterType: "dropdown",
        toolbar: false,
        searchOpen: false,
        search: false,
    };
    const Transactions = [
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
        {
            Invoice_ID: "#123478",
            Coustomer: "John Deo",
            Method: "Mastercard",
            Date: "01/10/2021",
            Time: "12:50 Pm",
        },
    ];
    const columns = [
        {
            name: "Invoice_ID",
            label: "Invoice ID",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Coustomer",
            label: "Coustomer",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Method",
            label: "Method",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Date",
            label: "Date",
            options: {
                filter: false,
                sort: true,
            },
        },
        {
            name: "Time",
            label: "Time",
            options: {
                filter: false,
                sort: true,
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
                        <button className="border-0 bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
                                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
                            </svg>
                        </button>
                    );
                },
            },
        },
    ];
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Vendor profile</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <button className="w-100 btn-comn-class head-btn-class">Export List</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="dash-top-box">
                                    <div className="vendor-top-box">
                                        <div className="vendor-profile">
                                            <img src={Vendor} alt="vendor name" />
                                        </div>
                                        <div>
                                            <div className="vendor-detail-box pe-lg-4">
                                                <span>Vendor Detail</span>
                                                <p>John Deo</p>
                                                <p>johndeo@gmail.com</p>
                                                <p>#439</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="vendor-detail-box px-lg-4">
                                                <span>Store Detail</span>
                                                <p>Store Name: John Deo</p>
                                                <p>Timing Hours: 8:00 Am To 8:00 Pm</p>
                                                <p>Sunday: Off</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="vendor-detail-box border-0 ps-lg-4">
                                                <span>Address</span>
                                                <p>Country: California</p>
                                                <p>Address: Ranchview Dr. Richardson</p>
                                                <p>Postal code: 62639</p>
                                            </div>
                                        </div>
                                        <div className="ms-lg-auto">
                                            <span className="comn-status-class received-class">Active</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Menu</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="vendor-products">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Vegetables <span>(20)</span></Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="dash-top-box">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_2} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_3} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Tomatoes On-The-Vine</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_4} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Fresh Cilantro (Corriander)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_5} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Dole Cauliflower</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_6} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Dole Iceberg Lettuce</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_7} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Grown Red Sweet Peppers</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_8} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Wegmans Onions, Yellow</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_9} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Sweet Onions (Avg. 0.61lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_10} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Red Onions (Avg. 0.525lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Packaged Fruit and vegetable <span>(10)</span></Accordion.Header>
                                            <Accordion.Body className="px-0">
                                            <div className="dash-top-box">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_2} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_3} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Tomatoes On-The-Vine</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_4} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Fresh Cilantro (Corriander)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_5} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Dole Cauliflower</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Cheese <span>(7)</span></Accordion.Header>
                                            <Accordion.Body className="px-0">
                                            <div className="dash-top-box">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_2} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_3} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Tomatoes On-The-Vine</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_4} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Fresh Cilantro (Corriander)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_5} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Dole Cauliflower</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>Cold Cuts <span>(10)</span></Accordion.Header>
                                            <Accordion.Body className="px-0">
                                            <div className="dash-top-box">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_2} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Broccoli Crowns (Avg. 0.7lb)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_3} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Tomatoes On-The-Vine</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_4} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Fresh Cilantro (Corriander)</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_5} alt="" className="img-fluid"/>
                                                                </div>
                                                                <div className="pro-detail">
                                                                    <bdi>Dole Cauliflower</bdi>
                                                                    <div className="pro-price">$37.50</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                            <div className="dash-part-hdr">
                                            <div className="dash-part-table-hdr d-flex align-items-center">
                                                <span>Transations</span>
                                                <div className="ms-auto">
                                                    <Link to="/transactions">See All</Link>
                                                </div>
                                            </div>
                                            <div className="bx-white-main">
                                                <MUIDataTable data={Transactions} columns={columns} options={options} />
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
