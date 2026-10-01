// import React from 'react'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
// import Home from './components/Home'
// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from './components/Login'
// import Course from './components/Course'
// import Signup from './components/Signup'
// import Bonus from './components/Bonus';
// import Now from './components/Now';
// import Event from './components/Event';
// import List from './components/List';
// import { useAuth } from '../../../context-api/AuthContext';

// function App() {
//   ////yaha se hum js ko likhte hai
//   const {token}=useAuth()
//   // console.log(token);
  
// ///////////////////////////////////////////////////////////////////////////
//   //////yaha html start hota hai

//   // {/* <Navbar/>  */}
//   // {/* <Login/>
//   // <Course/> */}
//   //     {/* <Home/> */}
//   //     {/* <Footer/> */}

//   // <Routes>
//   //   <Route path="/" element={<Home />} />
//   //   <Route path="/Login" element={<Login />} />
//   //   <Route path="/Signup" element={<Signup />} />
//   //   <Route path="/Course" element={<Course />} />
//   //   <Route path="/Footer" element={<Footer />} />
//   //   <Route path="/Navbar" element={<Navbar />} />
//   //    <Route path="/Bonus" element={<Bonus />} />
//   //    <Route path="/Now" element={<Now />} />
//   //     <Route path="/Event" element={<Event />} />
//   // </Routes>

//   //////ab hum conditional rendaring karnge
//   // if (user) {
//   //   return (<Routes>
//   //     <Route path="/" element={<Home />} />
//   //     <Route path="/Course" element={<Course />} />

//   //   </Routes>
//   //   )
//   // } else {
//   //   return (<Routes>
//   //     <Route path="/Login" element={<Login />} />
//   //     <Route path="/Signup" element={<Signup />} />
//   //     <Route path="/Footer" element={<Footer />} />
//   //     <Route path="/Navbar" element={<Navbar />} />
//   //     <Route path="/Bonus" element={<Bonus />} />
//   //     <Route path="/Now" element={<Now />} />
//   //     <Route path="/Event" element={<Event />} />
//   //   </Routes>
//   //   )
//   // }

//   ///////////////////////////////////////////////////////////////////////////////////
// return(
//   <Routes>
//     {token ?  (

//       <>
//       <Route path="/" element={<Home />} />
       
//       <Route path="/course" element={<Course />} />
//          <Route path="/list" element={<List />} /> 
//              <Route path="/Footer" element={<Footer />} />
//   //     <Route path="/navbar" element={<Navbar />} />
//   //     <Route path="/bonus" element={<Bonus />} />
//   //     <Route path="/now" element={<Now />} />
//   //     <Route path="/event" element={<Event />} />
//           {/* <Route path="/login" element={<Login />} />
//            <Route path="/signup" element={<Signup />} />  */}
//       </>
  
//     ):(
//       <>
//       <Route path="/" element={<Navigate to="<login" />} />
//          <Route path="/login" element={<Login />} />
//               <Route path="/signup" element={<Signup />} />
//       </>
//     )}

    
  
//   </Routes>


// )
  
//   }

// export default App






















































import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Course from "./components/Course";
import Signup from "./components/Signup";
import List from "./components/List";
import { useAuth } from "../../../context-api/AuthContext";

function App() {
  const { token } = useAuth();

  console.log(token);

  return (
    <Routes>
      {token ? (
        <>
          {/* Login user */}
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/list" element={<List />} />
          <Route path="/footer" element={<Footer />} />

          {/* Agar logged-in user login/signup par jaye */}
          <Route
            path="/login"
            element={<Navigate to="/" />}
          />

          <Route
            path="/signup"
            element={<Navigate to="/" />}
          />

          {/* Unknown route */}
          <Route
            path="*"
            element={<Navigate to="/" />}
          />
        </>
      ) : (
        <>
          {/* Login nahi hai */}
          {/* <Route
            path="/"
            element={<Navigate to="/login" />}
          /> */}

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          {/* Unknown route */}
          <Route
            path="*"
            element={<Navigate to="/login" replace />}
          />
        </>
      )}
    </Routes>
  );
}

export default App;