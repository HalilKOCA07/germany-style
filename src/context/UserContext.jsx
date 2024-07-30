import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useContext } from "react";

const userContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [validUser, setValidUser] = useState();
  const [auth, setAuth] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)


  const values = { validUser, setValidUser,loading, password, setPassword,error, auth };

  const getAuth = async(path) => {
      setLoading(true)
      try {
        const data = await axios.get(`https://6696c76c0312447373c3b288.mockapi.io/login/${path}`)
        setAuth(data.data)
      }catch(err){
        console.log("Something went wrong at getAuth", err)
        setError(true)
      }
      finally{
        setLoading(false)
      }
  }

  useEffect(() => {
    getAuth("users")
  }, [])

  return <userContext.Provider value={values}>{children}</userContext.Provider>;
};

const useAuth = () => {
  const context = useContext(userContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

export default useAuth;
