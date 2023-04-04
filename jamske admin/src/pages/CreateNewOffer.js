import UserLayout from "../components/UserLayout";
import UploadImg from "../images/upload-cloud.svg";

export default function CreateNewOffer() {
    return (
        <>
            <UserLayout>
                <div className="content-main-section">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 mt-3">
                                <div className="d-flex align-items-center">
                                    <div className="comn-title-main">
                                        <h1 className="mb-0">
                                            Offers
                                            <i className="bi bi-chevron-right"></i>
                                            <span id="create-offer">Create New Offer</span>
                                        </h1>
                                    </div>
                                    <div className="offer-class ms-auto">
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
                                </div>
                            </div>
                            <div className="col-12 mt-3">
                                <form className="row">
                                    <div className="col-lg-4">
                                        <div className="dash-top-box">
                                            <div className="row">
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Offer Image</label>
                                                    <label className="offer-bg-select" htmlFor="offer-bg-upload">
                                                        <img src={UploadImg} alt="Upload File" className="img-fluid" />
                                                        <div className="upload-text">Upload File</div>
                                                    </label>
                                                    <input id="offer-bg-upload" accept="image/*" name="upload_offer_img" type="file" className="d-none" />
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Title
                                                        <span className="iball-span">i</span>
                                                    </label>
                                                    <input className="form-control login-comn-input px-3" type="text" placeholder="Ex. Summer Offer" />
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Promocode<span className="iball-span">i</span>
                                                    </label>
                                                    <input className="form-control login-comn-input" type="text" placeholder="Enter Promo code" />
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Description<span className="iball-span">i</span>
                                                    </label>
                                                    <textarea className="form-control login-comn-input h-auto" rows={2} placeholder="Ex. Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        T&C<span className="iball-span">i</span>
                                                    </label>
                                                    <textarea className="form-control login-comn-input h-auto" rows={2} placeholder="Ex. Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn-comn-class w-100">
                                                        Create New Offer
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8 mt-lg-0 mt-3">
                                        <div className="dash-top-box">
                                            <div className="row">
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Valid Till</label>
                                                    <div className="payment-rgt-part">
                                                        <input type="date" className="form-control login-comn-input-1 mb-sm-0 mb-2" />
                                                        <span>To</span>
                                                        <input type="date" className="form-control login-comn-input-1 mt-sm-0 mt-2" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Time Duration</label>
                                                    <div className="payment-rgt-part">
                                                        <input type="time" className="form-control login-comn-input-1 mb-sm-0 mb-2" />
                                                        <span>To</span>
                                                        <input type="time" className="form-control login-comn-input-1 mt-sm-0 mt-2" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-block login-label-text mb-2">Minimum Perchase</label>
                                                    <input type="text" className="form-control login-comn-input" placeholder="Ex. Up to 50$" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Discount<span className="iball-span">i</span>
                                                    </label>
                                                    <input className="form-control login-comn-input" type="text" placeholder="Ex. 50%" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Max Discount Amount<span className="iball-span">i</span>
                                                    </label>
                                                    <input className="form-control login-comn-input" type="text" placeholder="Ex. 50$" />
                                                </div>
                                                <div className="col-md-6 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Categories<span className="iball-span">i</span>
                                                    </label>
                                                    <select className="form-select login-comn-input">
                                                        <option>Ex. Sides</option>
                                                        <option>***</option>
                                                        <option>***</option>
                                                        <option>***</option>
                                                    </select>
                                                </div>
                                                <div className="col-12 mb-3 ">
                                                    <label className="d-inline-flex align-items-center login-label-text mb-2">
                                                        Description<span className="iball-span">i</span>
                                                    </label>
                                                    <textarea className="form-control login-comn-input h-auto" rows={2} placeholder="Ex. Lorem Ipsum is simply dummy text of the printing and typesetting industry. " />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </UserLayout>
        </>
    );
}
