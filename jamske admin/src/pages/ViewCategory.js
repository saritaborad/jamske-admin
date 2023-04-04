import UserLayout from "../components/UserLayout";
import { Accordion } from "react-bootstrap";
import Product_1 from "../images/donut_1.svg";
import Product_2 from "../images/donut_2.svg";
import Product_3 from "../images/donut_3.svg";
import Product_4 from "../images/donut_4.svg";
import Product_5 from "../images/donut_5.svg";
import Product_6 from "../images/donut_6.svg";

export default function ViewCategory() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="comn-title-main">
                                    <h1 className="mb-0">
                                        Category
                                        <i className="bi bi-chevron-right"></i>
                                        <span id="view-category">View Category</span>
                                    </h1>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="vendor-products">
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Donuts</Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="dash-top-box border-0">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid" />
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
                                                                    <img src={Product_2} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_4} alt="" className="img-fluid" />
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
                                                                    <img src={Product_5} alt="" className="img-fluid" />
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
                                                                    <img src={Product_6} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                            <Accordion.Header>Grocery </Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="dash-top-box border-0">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid" />
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
                                                                    <img src={Product_2} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_4} alt="" className="img-fluid" />
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
                                                                    <img src={Product_5} alt="" className="img-fluid" />
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
                                            <Accordion.Header>Restaurants</Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="dash-top-box border-0">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid" />
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
                                                                    <img src={Product_2} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_4} alt="" className="img-fluid" />
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
                                                                    <img src={Product_5} alt="" className="img-fluid" />
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
                                            <Accordion.Header>Flowers</Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="dash-top-box border-0">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid" />
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
                                                                    <img src={Product_2} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_4} alt="" className="img-fluid" />
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
                                                                    <img src={Product_5} alt="" className="img-fluid" />
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
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Mechanical</Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="dash-top-box border-0">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid" />
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
                                                                    <img src={Product_2} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_4} alt="" className="img-fluid" />
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
                                                                    <img src={Product_5} alt="" className="img-fluid" />
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
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Local Services</Accordion.Header>
                                            <Accordion.Body className="px-0">
                                                <div className="dash-top-box border-0">
                                                    <div className="row">
                                                        <div className="col-product mb-2">
                                                            <div className="product-box">
                                                                <div className="product-img">
                                                                    <img src={Product_1} alt="" className="img-fluid" />
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
                                                                    <img src={Product_2} alt="" className="img-fluid" />
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
                                                                    <img src={Product_3} alt="" className="img-fluid" />
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
                                                                    <img src={Product_4} alt="" className="img-fluid" />
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
                                                                    <img src={Product_5} alt="" className="img-fluid" />
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
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
