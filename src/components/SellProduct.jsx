import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utilities/constants";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { UserContext } from "../App";
import { sellProductValidate } from "../utilities/sellProductValidation";
import { toast } from "react-toastify";


const SellProduct = () => {
  const [prodName, setProdName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)

  const user = useContext(UserContext);

  const handleCreate = async (e) => {
    e.preventDefault();

    const message = sellProductValidate(prodName, category, price, location)
   
    if(message) {
      setErrorMessage(message)
      return;
    }

    if(!image) {
      setErrorMessage("Upload an image")
      toast.error("Please upload an image");
      return;
    }

    

    const storage = getStorage();
    const storageRef = ref(storage, "images/" + image.name);
    await uploadBytes(storageRef, image);  
    const url = await getDownloadURL(storageRef);
    const date = new Date();

    // creating a document
    const docRef = await addDoc(collection(db, "products"), {
      prodName,
      category,
      price,
      location,
      url,
      userId: user.user.uid,
      createdAt: date.toDateString(),
    });
    if(docRef){
        navigate("/")
    }
  };


  return (
    <div className="bg-gray-100 grid grid-cols-12 pb-5">
      <span className="col-span-4"></span>
      <div className="col-span-4 w-full m-10 bg-white rounded-xl shadow-lg">
        <div className="mx-auto text-center">
          <img className="p-2 w-24 mx-auto" src={LOGO_URL} alt="OLX Logo" />
          <h1 className="font-bold text-xl mt-6">Sell your Product</h1>

          <form className="mt-6 space-y-8 ">
            <input
              value={prodName}
              onChange={(e) => setProdName(e.target.value)}
              className="input-field border-black border-2 rounded-md m-2 p-3"
              type="text"
              placeholder="Product Name"
            />
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="input-field  border-black border-2 rounded-md m-2 p-3"
              type="text"
              placeholder="Category"
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="input-field  border-black border-2 rounded-md m-2 p-3"
              type="text"
              placeholder="Price"
            />
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="input-field  border-black border-2 rounded-md m-2 p-3"
              type="text"
              placeholder="Location"
            />

            <div className="flex justify-center">
              <img
                className="w-28 m"
                src={image ? URL.createObjectURL(image) : ""}
                alt=""
              />
            </div>

            <div>
              <label
                className="block rounded-lg cursor-pointer bg-gray-200 py-2 px-4 text-center"
                htmlFor="upload"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 inline-block mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
                Upload Picture
              </label>
              <input
                onChange={(e) => setImage(e.target.files[0])}
                id="upload"
                className="hidden"
                type="file"
                placeholder="Choose"
              />
            </div>
            <p className=" text-red-600">{errorMessage}</p>
            <div className="p-4">
              <button
                onClick={handleCreate}
                className="btn-submit py-2  px-4 bg-black text-white font-bold text-lg rounded-md"
              >
                Create
              </button>
            </div>
          </form>
        </div>
      </div>
      <span className="col-span-4"></span>
    </div>
  );
};

export default SellProduct;
