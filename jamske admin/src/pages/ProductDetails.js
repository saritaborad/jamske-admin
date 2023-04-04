import UserLayout from "../components/UserLayout";
import Product_1 from "../images/product_1.svg";
import ReactReadMoreReadLess from "react-read-more-read-less";

export default function ProductDetails() {
    const longText =
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Product Details</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <select className="form-select login-comn-input" name="customer-list">
                                            <option>All category</option>
                                            <option>123</option>
                                            <option>456</option>
                                        </select>
                                        <button className="ms-sm-2 mt-2 mt-sm-0 w-100 btn-comn-class head-btn-class">Export List</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <div className="dash-top-box">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <div className="product-detail-img">
                                                <img src={Product_1} alt="product-name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-7 mt-2 mt-lg-0">
                                            <div className="product-detail-head mb-3">
                                                <bdi className="d-block">John Deo’s</bdi>
                                                <div className="product-head-info py-3">
                                                    <span>Broccoli Crowns (Avg. 0.7lb)</span>
                                                    <div className="product-head-info-right">
                                                        <strong>
                                                            <mark className="p-0 bg-transparent me-2">$10.00</mark>
                                                            $9.00
                                                        </strong>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pro-qunt-order mb-3">
                                                <span className="d-block pro-info-ttl">Select Size:</span>
                                                <select className="form-select">
                                                    <option defaultValue>Choose an Quantity</option>
                                                    <option value={1}>One</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                </select>
                                            </div>
                                            <div className="pro-description mb-3">
                                                <button type="button" className="btn-comn-class mt-2 mb-3">
                                                    Add To Cart
                                                </button>
                                                <span className="d-block pro-info-ttl">Description :</span>
                                                <p>
                                                    <ReactReadMoreReadLess charLimit={200} readMoreText={"Read more ▼"} readLessText={"Read less ▲"} readMoreClassName="read-more-less--more" readLessClassName="read-more-less--less">
                                                        {longText}
                                                    </ReactReadMoreReadLess>
                                                </p>
                                            </div>
                                        </div>
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
