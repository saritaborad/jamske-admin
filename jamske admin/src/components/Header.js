import Logo from "../images/logo.svg";
import Profile from "../images/profile.png";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header(params) {

    const addmainclass = () => {
            document.getElementById("root").classList.toggle("dash-main-class-add");
    }
    
    const openUserinfo = () => {
        document.getElementById("user-detail").classList.toggle("active-user-info");
    };

        return (
            <>
                <header className="header-top-section">
                    <nav className="navbar fixed-top">
                        <ul className="d-flex align-items-senter me-auto">
                            <li>
                                <div className="hdr-logo-top ms-xl-0 ms-4 text-xl-center d-flex align-items-center">
                                    <Link  to='/dashboard'>
                                        <img src={Logo} className="img-fluid" alt="Text A Buy"/>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <ul className="d-flex align-items-center hdr-rgt-part" id="user-detail">
                            <li>
                                <bdi className="d-block position-relative">
                                    <input type="search" className="form-control login-comn-input searchbar pe-5" placeholder="Search Anything"/>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#6C6A81" className="bi bi-search fix-in-icon" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </bdi>
                            </li>
                            <li className="admin-notif position-relative" id="notify">
                                <Dropdown className="d-inline" drop="left">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-autoclose-true">
                                        <div className="hdr-notify-box d-flex align-items-center justify-content-center ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" fill="#06038D" className="bi bi-bell" viewBox="0 0 16 16">
                                                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                            </svg>
                                            <span className="notification-no">2</span>
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>
                                            <div className="d-flex mt-3">
                                                <div className="time-noti-div">
                                                    <span>2H . Activity</span>
                                                </div>
                                            </div>
                                            <div className="noti-detail-part my-3">
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item>
                                            <div className="d-flex mt-3">
                                                <div className="time-noti-div">
                                                    <span>8H . System Alert</span>
                                                </div>
                                            </div>
                                            <div className="noti-detail-part my-3 border-0">
                                                <p>
                                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry <Link to="#">Readmore</Link>
                                                </p>
                                            </div>
                                        </Dropdown.Item>
                                        <Dropdown.Item href="/notification">
                                            <button type="button" className="btn view-noti-btn w-100 py-2">
                                                View All Inbox
                                            </button>
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li>
                                <div className="hdr-rgt-line mx-3"></div>
                            </li>
                            <li className="profile-hdr-drop-class">
                                <Dropdown className="d-inline" drop="left">
                                    <Dropdown.Toggle variant="transparent" id="dropdown-autoclose-true">
                                        <div className="profile-hdr-drop ms-1">
                                            <div className="profile-pic">
                                                <img src={Profile} alt="profile" />
                                            </div>
                                            <div className="profil-detail-section text-start ms-2">
                                        <span>John Doe</span>
                                        <div>
                                            <bdi>Macy’s</bdi>
                                        </div>
                                    </div>
                                        </div>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="/settings">My Profile</Dropdown.Item>
                                        <Dropdown.Item href="#">About us</Dropdown.Item>
                                        <Dropdown.Item href="#">Terms & Condition</Dropdown.Item>
                                        <Dropdown.Item href="#">Privacy Policy</Dropdown.Item>
                                        <Dropdown.Item href="/settings">Account Settings</Dropdown.Item>
                                        <Dropdown.Item href="/login" className="border-0">
                                            Log out
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                        </ul>
                        <div className="d-md-none">
                            <button type="button" className="border-0 bg-transparent p-0" onClick={openUserinfo}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-three-dots-vertical" viewBox="0 0 16 16">
                                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </header>
                <div id="idarrow" className="arrw-left-icon position-fixed" onClick={addmainclass}>
                    <i className="bi bi-chevron-left d-flex align-items-center justify-content-center"></i>
                </div>
            </>
        );
    }

