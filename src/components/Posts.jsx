import React from 'react'
import {db} from '../firebase/config'
import { collection, getDocs, addDoc } from 'firebase/firestore';

const Posts = () => {

const handleClick = async() =>{
    const querySnapshot = await getDocs(collection(db, "prods"));
    const fetchedPosts = liam.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    console.log(fetchedPosts)
}

const addData = async () => {
    const data = await addDoc(collection(db, "prod"), {
        name: "Iphone 15 pro",
        price: 150000
    })

    console.log("doc written successfully", data)
}

  return (
    <div>
        <h1 className='font-medium text-xl m-3 p-3'>Fresh Recomedations</h1>
        <div className='container'>
    <button onClick={handleClick}>CLick</button>
    <button onClick={addData}>Add data</button>
        </div>
    </div>
  )
}

export default Posts