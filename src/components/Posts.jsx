import React, { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs, addDoc, getDoc } from "firebase/firestore";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Posts = () => {

    const [products, setProducts] = useState([])

  const fetchData = async() => {
    const querySnapshot = await getDocs(collection(db, "products"))
    const allPosts = querySnapshot.docs.map((product) => {
        return {
            ...product.data(),
            id: product.id
        }
    })
    console.log("Posts", allPosts)
    setProducts(allPosts)
  }

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length ? <Shimmer/> :(
    <div>
      <h1 className="font-medium text-xl m-3 p-3">Fresh Recomedations</h1>
      <div className="container grid grid-cols-4 gap-10">

        {
            
            products.map((prod) => {
                return  <Card key={prod.id} data={prod}/>
            })
        }

       
       

      </div>
    </div>
  );
};

export default Posts;
