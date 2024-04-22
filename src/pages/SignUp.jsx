import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utilities/constants";
import { useState, useContext, useRef } from "react";
import { FirebaseContext } from "../store/Context";
import { auth, db } from "../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { signUpValidte } from "../utilities/signUpValidation";
import { ToastContainer, toast } from "react-toastify";

const SignUP = () => {
  const [userName, setUserName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState(null)

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const mobileRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  // const { app } = useContext(FirebaseContext);

  const handleSignUp = async () => {

    const message = signUpValidte(nameRef.current.value, mobileRef.current.value, emailRef.current.value, passwordRef.current.value)
    console.log(nameRef.current.value, mobileRef.current.value, emailRef.current.value, passwordRef.current.value)
    if(message) {
      // toast.error(message)
      setErrorMessage(message)
      return;
    }

    const user = await createUserWithEmailAndPassword(auth, email, password);

    await updateProfile(auth.currentUser, {
      displayName: userName,
    });

    const docRef = await addDoc(collection(db, "users"), {
      id: user.user.uid,
      username: userName,
      mobile: mobile,
      email: email,
    });
    navigate("/login");
  };

  return (
    <>
     <ToastContainer/>
    
    <div className="bg-gray-100 grid grid-cols-12 h-screen pb-5">
     
      <span className="col-span-4"></span>
      <div className="col-span-4 m-10 bg-white h-3/3 my-auto rounded-xl">
        <Link to={"/"}>
          <img className="w-14 mt-8 mx-auto text-center" src={LOGO_URL} />
        </Link>

        <div className="mx-auto text-center">
          <img className="p-2 w-24 mx-auto" src="/olx-logo.png" alt="" />

          <h1 className="font-bold text-xl mt-6">Create your Account </h1>

          <input
          ref={nameRef}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="py-2 px-2 border-2 w-3/4 rounded-md mt-10 border-black"
            type="text"
            placeholder="Username"
          />
          <input
          ref={mobileRef}
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="py-2 px-2 border-2 w-3/4 rounded-md mt-5 border-black"
            type="text"
            placeholder="Phone Number"
          />
          <input
          ref={emailRef}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="py-2 px-2 border-2 w-3/4 rounded-md mt-5 border-black"
            type="text"
            placeholder="Email"
          />
          <input
          ref={passwordRef}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="py-2 px-2 border-2 w-3/4 rounded-md mt-5 border-black"
            type="password"
            placeholder="Password"
          />

          <p className="text-red-600 mt-3">{errorMessage}</p>

          <button
            onClick={handleSignUp}
            className="w-3/4 bg-black text-white font-bold text-center text-lg rounded-md py-3 mt-6"
          >
            Create
          </button>

          <Link to={"/login"}>
            <p className="underline my-5">Login with Account</p>
          </Link>
        </div>
      </div>
    </div>
    </>

  );
};

export default SignUP;
