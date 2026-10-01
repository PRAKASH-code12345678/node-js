import React from 'react'

function Event(){
    const handleMemouseDver=()=>{
        alert("hi")
    }
    return(
        <>
        <h1>hello ramji</h1>
        <div onMouseMove={handleMemouseDver}>mouse move here</div>
        </>
    )
}

export default Event