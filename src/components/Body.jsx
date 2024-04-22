import { createBrowserRouter, Outlet, Route, RouterProvider } from "react-router-dom";

import Home from "../pages/Home"
import SignUP from "../pages/SignUp";
import Login from "../pages/Login";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {



  return (
    <>
    <Header />
    <Outlet/>
    <Footer/>
    </>
    
    )
};

export default Body;
