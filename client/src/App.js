import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import { Home } from "./Components/pages/Home";
import Products from "./Components/pages/Products";
import WishList from "./Components/pages/WishList";
import Bag from "./Components/pages/Bag";
import Footer from "./Components/Footer";
import Register from "./Components/pages/Register";
import { Toaster } from "react-hot-toast";
import Login from "./Components/pages/Login";
import Dashboard from "./Components/pages/Dashboard";
import PrivateRoute from "./Components/Routes/Private";
import ForgotPassword from "./Components/pages/ForgotPassword";
import AdminRoute from "./Components/Routes/AdminRoute";
import CreateCategory from "./Components/Dashboard/CreateCategory";
import CreateProduct from './Components/Dashboard/CreateProduct'
import UserMenu from "./Components/Dashboard/UserMenu";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="/dashboard-menu" element={<UserMenu />} />
        </Route>
        <Route path="/dashboard" element={<PrivateRoute />}>
          <Route path="user" element={<Dashboard />} />
        </Route>
        <Route path="/create-category" element={<CreateCategory />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/bag" element={<PrivateRoute />}>
          <Route path="" element={<Bag />} />
        </Route>
      </Routes>

      <Toaster />
      <Footer />
    </>
  );
}

export default App;
