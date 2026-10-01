////// is me hum useRef() ka use karenge

import React, { useRef } from 'react'


function Now(){
    /////ab reference create karenge/////
    const headingRef=useRef(null)
    ///ab change karenge
    const changeText=()=>{
headingRef.current.textContent="hello reaact"
    }
    return(
        <>
        <h2 ref={headingRef}>now</h2>
        <button onClick={changeText}>change heading</button>
        </>
    )
}


export default Now