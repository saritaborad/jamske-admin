import UserLayout from "../components/UserLayout";
import Offer_1 from "../images/offer-1.svg";
import Offer_2 from "../images/offer-2.svg";
import Offer_3 from "../images/offer-3.svg";
import { Dropdown } from "react-bootstrap";

export default function Offers() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Offers</h1>
                                    </div>
                                    <div className="payment-rgt-part ms-auto mt-md-0 mt-2">
                                        <button className="ms-2 w-100 btn-comn-class">Create Offer</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6 mb-4">
                                        <div className="offer-box position-relative">
                                            <img src={Offer_1} alt="offer" />
                                            <div className="offer-options">
                                                <Dropdown drop="left" autoClose={false}>
                                                    <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/">
                                                            <div className="offer-class">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="offer-status" />
                                                                    <label className="form-check-label inactive-class ms-2" htmlFor="offer-status">
                                                                        OFF
                                                                    </label>
                                                                    <label className="form-check-label active-class ms-2" htmlFor="offer-status">
                                                                        ON
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
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
                                                        <Dropdown.Item className="border-0">
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
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="offer-box position-relative">
                                            <img src={Offer_2} alt="offer"/>
                                            <div className="offer-options">
                                                <Dropdown drop="left" autoClose={false}>
                                                    <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item  href="#/">
                                                            <div className="offer-class">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="offer-status" />
                                                                    <label className="form-check-label inactive-class ms-2" htmlFor="offer-status">
                                                                        OFF
                                                                    </label>
                                                                    <label className="form-check-label active-class ms-2" htmlFor="offer-status">
                                                                        ON
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
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
                                                        <Dropdown.Item className="border-0">
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
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 mb-4">
                                    <div className="offer-box position-relative">
                                            <img src={Offer_3} alt="offer" />
                                            <div className="offer-options">
                                                <Dropdown drop="left" autoClose={false}>
                                                    <Dropdown.Toggle className="table-dropdown-btn" id="dropdown-basic">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                                            <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                                        </svg>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/">
                                                            <div className="offer-class">
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" id="offer-status" />
                                                                    <label className="form-check-label inactive-class ms-2" htmlFor="offer-status">
                                                                        OFF
                                                                    </label>
                                                                    <label className="form-check-label active-class ms-2" htmlFor="offer-status">
                                                                        ON
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
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
                                                        <Dropdown.Item className="border-0">
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
