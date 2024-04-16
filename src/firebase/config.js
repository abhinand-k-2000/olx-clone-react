import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";





const firebaseConfig = {
  apiKey: "AIzaSyCbOv8O7q-deHpllnBtcg7dzZpQx0SzxWY",
  authDomain: "olx-clone-91317.firebaseapp.com",
  projectId: "olx-clone-91317",
  storageBucket: "olx-clone-91317.appspot.com",
  messagingSenderId: "1058170039603",
  appId: "1:1058170039603:web:0e795d9051e41ae8a22246",
  measurementId: "G-882Y6EDCLT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app);

export default app