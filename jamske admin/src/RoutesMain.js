import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import AdminEdit from "./pages/AdminEdit";
import ForgotPassword from "./pages/common/ForgotPassword";
import Login from "./pages/common/Login";
import ResetPassword from "./pages/common/ResetPassword";
import Verification from "./pages/common/Verification";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import ProductList from "./pages/ProductList";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import Vendor from "./pages/Vendor";
import Notification from "./pages/Notification";
import VendorProfile from "./pages/VendorProfile";
import ProductDetails from "./pages/ProductDetails";
import Category from "./pages/Category";
import ViewCategory from "./pages/ViewCategory";
import OrderDetail from "./pages/OrderDetail";
import Offers from "./pages/Offers";
import CreateNewOffer from "./pages/CreateNewOffer";
import Products from "./pages/Products";

export default function RoutesMain() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/forgotpassword" exact element={<ForgotPassword />} />
          <Route path="/verification" exact element={<Verification />} />
          <Route path="/resetpassword" exact element={<ResetPassword />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/vendor" exact element={<Vendor />} />
          <Route path="/orders" exact element={<Orders />} />
          <Route path="/productlist" exact element={<ProductList />} />
          <Route path="/customers" exact element={<Customers />} />
          <Route path="/transactions" exact element={<Transactions />} />
          <Route path="/admin" exact element={<Admin />} />
          <Route path="/adminedit" exact element={<AdminEdit />} />
          <Route path="/settings" exact element={<Settings />} />
          <Route path="/notification" exact element={<Notification />} />
          <Route path="/vendorprofile" exact element={<VendorProfile />} />
          <Route path="/productdetails" exact element={<ProductDetails />} />
          <Route path="/category" exact element={<Category />} />
          <Route path="/viewcategory" exact element={<ViewCategory />} />
          <Route path="/orderdetail" exact element={<OrderDetail />} />
          <Route path="/offers" exact element={<Offers />} />y
          <Route path="/createnewoffer" exact element={<CreateNewOffer />} />
          <Route path="/products" exact element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
