/////globly state ko manage karne ke liye context api ka use karte hai

import { createContext, useContext, useState } from "react";

const AuthContext=createContext();

export const AuthProvider=({children})=>{
    const [token,setToken]=useState(localStorage.getItem("token"))

    const login=(newToken)=>{
     localStorage.setItem("token",newToken)
     setToken(newToken)
    }

    /////ab logout ke liye function create karenge
    const logout=()=>{
        localStorage.removeItem("token")
        setToken(null)
        
          

    }

    return(
        <AuthContext.Provider value ={{login,token,logout}}>
        {children}
        </AuthContext.Provider>
    )
}


export const useAuth=()=>useContext(AuthContext)


// export const useAuth = () => {
//   return useContext(AuthContext);
// };