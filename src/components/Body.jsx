import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login";

const Body = () => {
  const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
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
