import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PostContext } from "../store/PostContext";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ProductDetail = () => {
  const { postDetails } = useContext(PostContext);
  const [userDetails, setUserDetails] = useState({});

  const getUser = async () => {
    const q = query(collection(db, "users"), where("id", "==", postDetails?.userId)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setUserDetails(doc.data());
    });
  };



  useEffect(() => {
    getUser();
  }, []);

  if (!postDetails) {
    return null; 
  }

  console.log(postDetails)

  return (
    <div className="container mx-auto">
      <img className="p-5 mx-auto object-cover w-52 " src={postDetails.url} alt="" />
      <div className="grid grid-cols-5 gap-5 ">
        <div className="col-span-2 space-y-4 p-5 bg-gray-50 shadow-lg ml-3  rounded-lg my-6">
          <h1 className="text-4xl font-bold">{postDetails.prodName}</h1>
          <h2>Category: {postDetails.category}</h2>
          <p>Price: Rs. {postDetails.price}</p>
          <p>Location: {postDetails.location}</p>
        </div>

        <div className="col-span-2 p-5 bg-gray-50 rounded-lg space-y-4 shadow-lg my-6">
          <p className="text-xl underline mb-1">Seller Details </p>
          <h1 className="text-lg">Seller name:  <span className="font-medium">{userDetails.username}</span></h1>
          <h1>Phone : <span className="font-medium">{userDetails.mobile}</span></h1>
          {/* <p>Seller ID :</p> */}
        </div>
        <div className="col-span-1 p-5 bg-gray-50 rounded-lg my-6">
          <h1 className="text-4xl font-bold text-center py-5">₹ </h1>
          <button className="bg-green-950 text-white w-full rounded-lg font-semibold py-3">
            Buy Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
