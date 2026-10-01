// import React from 'react'


// function FreeCourse({ courses }) {
//     return (
//         <>
//             <h2>Free Course</h2>

//             {courses.map((course) => (
//                 <div key={course.id}>
//                     <p>ID: {course.id}</p>
//                     <h3>Title: {course.tittle}</h3>
//                     <h2>Name: {course.name}</h2>
//                 </div>
//             ))}
//         </>
//     );
// }

// function PaidCourse({ courses }) {
//     return (
//         <>
//             <h2>Paid Course</h2>

//             {courses.map((course) => (
//                 <div key={course.id}>
//                     <p>ID: {course.id}</p>
//                     <h3>Title: {course.tittle}</h3>
//                     <h2>Name: {course.name}</h2>
//                 </div>
//             ))}
//         </>
//     );
// }

// // function Course() {
// //     const name = "PRAKASH"
// //     return (
// //         <>
// //             <div>{name}</div></>
// //     )
// // }


// function Course() {
//     const freeCourse = [
//         {
//             id: 1,
//             tittle: "html,css",
//             name: "rahul"
//         },
//         {
//             id: 2,
//             tittle: "css,js",
//             name: "rp"
//         }
//     ]

//      const paidCourse = [
//         {
//             id: 3,
//             tittle: "html,css",
//             name: "rahul"
//         },
//         {
//             id: 4,
//             tittle: "css,js",
//             name: "rp"
//         }
//     ]
//     return (
//         <>
//           <div>Course</div>
//             <PaidCourse courses ={paidCourse}/>
//             <FreeCourse courses={freeCourse} />
//         </>

//     )
// }

// export default Course


























////////ab hum props ka use karenge///////
import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'


function FreeCourse({ Course }) {
    return (
        <div>
            <h2 className='text-3xl font-bold to-blue-400 mb-6 '>Free<span className='text-red-500'>Course</span></h2>

            <div className='grid grid-flow-col-1 md:grid-flow-col-2 hover:shadow-inner lg:grid-cols-3 gap-6'>
                {Course.map((c) => (
                    <div className='bg-white shadow-lg rounded-xl p-5 border hover:shadow-inherit transition duration-500  ' key={c.id}>
                        <span className='bg-orange-600 text-white px-3 py-1 rounded-lg'>FREE</span>
                        <h3 className='text-lg font-semibold mt-4'>{c.title}</h3>
                        <p className='text-red-500 mt-3'>₹400</p>
                        <button className='mt-5 bg-green-400 text-yellow-200 px-4 py-2 rounded-md'>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
<br />

function PaidCourse({ Course }) {
    return (
        <div>
            <h2 className='text-3xl font-bold to-blue-400 mb-6 mt-20'>Paid<span className='text-red-500'>Course</span></h2>

            <div className='grid grid-flow-col-1 md:grid-flow-col-2 hover:shadow-inner lg:grid-cols-3 gap-6'>
                {Course.map((c) => (
                    <div className='bg-white shadow-lg rounded-xl p-5 border hover:shadow-inherit transition duration-500  ' key={c.id}>
                        <span className='bg-orange-500 text-white px-3 py-1 rounded-lg'>PREMIMUM</span>
                        <h3 className='text-lg font-semibold mt-4'>{c.title}</h3>
                        <p className='text-red-500 mt-3'>₹400</p>
                        <button className='mt-5 bg-blue-400 text-yellow-200 px-4 py-2 rounded-md'>Buy Now</button>
                    </div>
                ))}
            </div>
        </div>
    )
}



function Course() {
    ////ab state create karenge props pass karne ke liye////////
    const [course, setCourse] = useState([])

    useEffect(() => {

        const getPost = async () => {
            console.log("calling")
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/todos"
                );

                const data = await response.json();

                setCourse(data.slice(0, 20))
            } catch (error) {
                console.log("Error", error);
            }
        }
        //////yaha pr hum get post ko call karnge
        getPost()
    }, [])

    const freeCourse = course.filter((course) => course.completed)
    const paidCourse = course.filter((course) => !course.completed)
    return (
        <>
        <Navbar/>
            <div className='max-w-7xl mx-auto px-6 py-10'>
                <FreeCourse Course={freeCourse} />

                <PaidCourse Course={paidCourse} />
            </div>
            <Footer/>
        </>

    )
}

export default Course