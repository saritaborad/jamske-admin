import UserLayout from "../components/UserLayout";
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

export default function Products() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-2">
                                <div className="d-md-flex d-block align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">Products List</h1>
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
                                    
                                       
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
