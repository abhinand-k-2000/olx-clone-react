import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Home from "../pages/Home"
import SignUP from "../pages/SignUp";
import Login from "../pages/Login";

const Body = () => {
  
  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/signup',
        element: <SignUP />
    },
    {
      path: '/login',
      element: <Login />
    }
]);


  return (
    <RouterProvider router={router} />
    )
};

export default Body;
