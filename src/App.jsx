import { createContext, useEffect, useState } from "react";
import Body from "./components/Body";

import app from "./firebase/config.js";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseContext } from "./store/Context.jsx";
import { auth } from "./firebase/config.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUP from "./pages/SignUp.jsx";
import Login from "./pages/Login.jsx";
import SellProduct from "./components/SellProduct.jsx";
import Home from "./pages/Home.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import { PostContext } from "./store/PostContext.js";

export const UserContext = createContext(null);
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,  
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/sellProduct",
        element: <SellProduct />,
      },
      {
        path: "/productDetail",
        element: <ProductDetail />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUP />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  const [user, setUser] = useState(null);
  const [postDetails, setPostDetails] = useState(null);
 

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  return (
    <>
      <FirebaseContext.Provider value={{ app }}>
        <UserContext.Provider value={{ user, setUser }}>
          <PostContext.Provider value={{ postDetails, setPostDetails }}>
            <RouterProvider router={router}>
              <Body />
            </RouterProvider>
          </PostContext.Provider>
        </UserContext.Provider>
      </FirebaseContext.Provider>
    </>
  );
}

export default App;
