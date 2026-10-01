// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { BrowserRouter } from 'react-router-dom'
// import { AuthProvider } from '../../../context-api/AuthContext.jsx'

// createRoot(document.getElementById('root')).render(

//     <BrowserRouter>
//         <AuthProvider>
//             <App />
//         </AuthProvider>

//     </BrowserRouter>
// )



































import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './index.css'
import { AuthProvider } from "../../../context-api/AuthContext";
import logo from "./assets/logo.png";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);