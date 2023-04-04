import UserLayout from "../components/UserLayout";
import Order_1 from "../images/order_1.svg";
import Order_2 from "../images/order_2.svg";
import Order_3 from "../images/order_3.svg";

export default function OrderDetail() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-sm-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Order Details</h1>
                                    </div>
                                    <div className="order-rgt-top ms-auto mt-md-0 mt-2">
                                        <div className="d-flex align-items-center">
                                            <div className="order-label">Order Status : </div>
                                            <div className="order-status-box pending-class ms-2">Pending</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-2 mt-sm-0">
                                <div className="order-detail-class">
                                    Details for Order ID: <span id="order-id">3453012</span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="order-main-part">
                                    <div className="dash-top-box border-0">
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M16 20H2C0.89543 20 0 19.1046 0 18V4C0 2.89543 0.89543 2 2 2H4V0H6V2H12V0H14V2H16C17.1046 2 18 2.89543 18 4V18C18 19.1046 17.1046 20 16 20ZM2 8V18H16V8H2ZM2 4V6H16V4H2ZM14 16H12V14H14V16ZM10 16H8V14H10V16ZM6 16H4V14H6V16ZM14 12H12V10H14V12ZM10 12H8V10H10V12ZM6 12H4V10H6V12Z"
                                                        fill="#232222"
                                                    />
                                                </svg>
                                            </div>
                                            <div className="order-time">Wed, Aug 13, 2020, 4:34PM</div>
                                        </div>
                                        <div className="order-id-class">Order ID: 3453012</div>
                                    </div>
                                    <div className="order-bill-box">
                                        <div className="row">
                                            <div className="col-md-4 mt-2">
                                                <div className="d-flex">
                                                    <div className="order-info">
                                                        <span>
                                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M10.0001 20C8.48816 20.0043 6.99532 19.6622 5.6361 19C5.13865 18.758 4.66203 18.4754 4.2111 18.155L4.0741 18.055C2.83392 17.1396 1.81997 15.9522 1.1101 14.584C0.375836 13.1679 -0.00499271 11.5952 4.94229e-05 10C4.94229e-05 4.47715 4.47725 0 10.0001 0C15.5229 0 20.0001 4.47715 20.0001 10C20.0051 11.5944 19.6247 13.1664 18.8911 14.582C18.1822 15.9494 17.1697 17.1364 15.9311 18.052C15.4639 18.394 14.968 18.6951 14.4491 18.952L14.3691 18.992C13.009 19.6577 11.5144 20.0026 10.0001 20ZM10.0001 15C8.50158 14.9971 7.12776 15.834 6.4431 17.167C8.68449 18.2772 11.3157 18.2772 13.5571 17.167V17.162C12.8716 15.8305 11.4977 14.9954 10.0001 15ZM10.0001 13C12.1662 13.0028 14.1635 14.1701 15.2291 16.056L15.2441 16.043L15.2581 16.031L15.2411 16.046L15.2311 16.054C17.7601 13.8691 18.6644 10.3423 17.4987 7.21011C16.3331 4.07788 13.3432 2.00032 10.0011 2.00032C6.65901 2.00032 3.66909 4.07788 2.50345 7.21011C1.33781 10.3423 2.2421 13.8691 4.7711 16.054C5.83736 14.169 7.83446 13.0026 10.0001 13ZM10.0001 12C7.79096 12 6.0001 10.2091 6.0001 8C6.0001 5.79086 7.79096 4 10.0001 4C12.2092 4 14.0001 5.79086 14.0001 8C14.0001 9.06087 13.5787 10.0783 12.8285 10.8284C12.0784 11.5786 11.061 12 10.0001 12ZM10.0001 6C8.89553 6 8.0001 6.89543 8.0001 8C8.0001 9.10457 8.89553 10 10.0001 10C11.1047 10 12.0001 9.10457 12.0001 8C12.0001 6.89543 11.1047 6 10.0001 6Z"
                                                                    fill="#06038D"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <div className="vendor-detail-box border-0 p-0">
                                                            <span>Customer Info</span>
                                                            <p>John Deo</p>
                                                            <p>johndeo@gmail.com</p>
                                                            <p>+1 123 4567 789</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-2">
                                                <div className="d-flex">
                                                    <div className="order-info">
                                                        <span>
                                                            <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M9.89705 18.968C9.36603 18.9696 8.85647 18.7586 8.48205 18.382L0.648054 10.547C0.234643 10.1348 0.0226645 9.56207 0.0680544 8.98001L0.568054 2.41401C0.639353 1.4264 1.42625 0.641631 2.41405 0.573012L8.98005 0.0730117C9.03105 0.0620117 9.08305 0.0620117 9.13405 0.0620117C9.6639 0.063372 10.1718 0.273991 10.5471 0.648012L18.3821 8.48201C18.7573 8.85711 18.9681 9.36594 18.9681 9.89651C18.9681 10.4271 18.7573 10.9359 18.3821 11.311L11.3111 18.382C10.9369 18.7583 10.4277 18.9693 9.89705 18.968ZM9.13305 2.06201L2.56205 2.56201L2.06205 9.13301L9.89705 16.968L16.9671 9.89801L9.13305 2.06201ZM5.65405 7.65402C4.69989 7.65422 3.87847 6.98037 3.69213 6.04458C3.5058 5.10879 4.00646 4.17169 4.88792 3.80639C5.76939 3.44109 6.78615 3.74933 7.31638 4.54259C7.84662 5.33586 7.74265 6.39322 7.06805 7.06801C6.69388 7.44433 6.18473 7.65534 5.65405 7.65402Z"
                                                                    fill="#06038D"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <div className="vendor-detail-box border-0 p-0">
                                                            <span>Order Info</span>
                                                            <p>Shipping : Fed Ex</p>
                                                            <p>payment method : Card</p>
                                                            <p>Status : Pending</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 mt-2">
                                                <div className="d-flex">
                                                    <div className="order-info">
                                                        <span>
                                                            <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M7 19C5.73693 17.9227 4.56619 16.7416 3.5 15.4691C1.9 13.5581 8.83662e-07 10.712 8.83662e-07 8.00005C-0.00141728 5.1676 1.70425 2.61344 4.32107 1.52945C6.93789 0.445455 9.95007 1.04529 11.952 3.04905C13.2685 4.35966 14.0059 6.14244 14 8.00005C14 10.712 12.1 13.5581 10.5 15.4691C9.43382 16.7416 8.26307 17.9227 7 19ZM7 3.00005C4.23995 3.00336 2.00331 5.24 2 8.00005C2 9.16605 2.527 11.1851 5.035 14.1861C5.65314 14.9241 6.30902 15.6297 7 16.3001C7.69105 15.6305 8.34724 14.9259 8.966 14.1891C11.473 11.1841 12 9.16505 12 8.00005C11.9967 5.24 9.76006 3.00336 7 3.00005ZM7 11.0001C5.34315 11.0001 4 9.6569 4 8.00005C4 6.3432 5.34315 5.00005 7 5.00005C8.65686 5.00005 10 6.3432 10 8.00005C10 8.7957 9.68393 9.55876 9.12132 10.1214C8.55871 10.684 7.79565 11.0001 7 11.0001Z"
                                                                    fill="#06038D"
                                                                />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                    <div className="ms-3">
                                                        <div className="vendor-detail-box border-0 p-0">
                                                            <span>Delivery Address</span>
                                                            <p>City : Ny, Usa</p>
                                                            <p>1180 6th Ave, New York, NY 10036, USA </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-lg-8">
                                                <div className="order-table table-responsive">
                                                    <table className="table">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col">No.</th>
                                                                <th scope="col">Product</th>
                                                                <th scope="col">Name</th>
                                                                <th scope="col">Unit Price</th>
                                                                <th scope="col">Quantity</th>
                                                                <th scope="col">Total</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>
                                                                    <div className="order-img">
                                                                        <img src={Order_1} alt="Order_1" />
                                                                    </div>
                                                                </td>
                                                                <td>Coco Strawberry Pancake</td>
                                                                <td>$15</td>
                                                                <td>2</td>
                                                                <td>$15.40</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>
                                                                    <div className="order-img">
                                                                        <img src={Order_2} alt="Order_2" />
                                                                    </div>
                                                                </td>
                                                                <td>Coco Strawberry Pancake</td>
                                                                <td>$15</td>
                                                                <td>3</td>
                                                                <td>$15.40</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>
                                                                    <div className="order-img">
                                                                        <img src={Order_3} alt="Order_3" />
                                                                    </div>
                                                                </td>
                                                                <td>Coco Strawberry Pancake</td>
                                                                <td>$15</td>
                                                                <td>1</td>
                                                                <td>$15.40</td>
                                                            </tr>
                                                            <tr>
                                                                <td colSpan="4"></td>
                                                                <td>
                                                                    <div className="order-label">
                                                                        <span>Subtotal</span>
                                                                        <span>Taxes</span>
                                                                        <span>Commission</span>
                                                                        <span>Seller Tip</span>
                                                                        <span className="text-black fw-bold">Total Amount</span>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <div className="order-amount">
                                                                        <span>$37.50</span>
                                                                        <span>+$2.00</span>
                                                                        <span>$5.00</span>
                                                                        <span>$5.00</span>
                                                                        <span className="total">$45.50</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 mt-lg-0 mt-2">
                                                <div className="dash-top-box h-auto">
                                                    <div className="order-pay-info d-sm-flex mb-2">
                                                        <span>Type</span>
                                                        <span className="ms-auto d-block text-black">Mastercard**** **** 4768</span>
                                                    </div>
                                                    <div className="order-pay-info d-sm-flex mb-2">
                                                        <span>Owner Name</span>
                                                        <span className="ms-auto d-block text-black">John Deo</span>
                                                    </div>
                                                    <div className="order-pay-info d-sm-flex">
                                                        <span>Phone Number</span>
                                                        <span className="ms-auto d-block text-black">+1 123 465 7897</span>
                                                    </div>
                                                </div>
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
