import { createContext, useEffect, useState } from 'react'
import Body from './components/Body'

import app from './firebase/config.js'  
import { FirebaseContext } from './store/Context.jsx'
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from './firebase/config.js';

export const UserContext = createContext(null)

function App() {

  const [user, setUser] = useState(null);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(user)
        console.log("inside useEffect of app component", user)
      } else {
        // User is signed out
        // ...
      }
    });
  })

  return (
    <>
    <FirebaseContext.Provider value={{app}}>
      <UserContext.Provider value={{user, setUser}}>
      <Body />
      </UserContext.Provider>
      </FirebaseContext.Provider>
    </>
  )
}

export default App
