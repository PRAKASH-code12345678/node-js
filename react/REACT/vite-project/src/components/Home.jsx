// // // import React from 'react'
// // import Navbar from './Navbar'
// // import Footer from './Footer'
// // import React, { useState } from 'react'


// // function Home() {
// //   //     const name="learn coding"
// //   // return (
// //   //   <div>
// //   //       <Navbar/>
// //   //           welcome {name}

// //   //   </div>
// //   // )
// //   /////ab state create karenge//////
// //   const [posts, setPosts] = useState([])
// //   ////ab function create karenge////
// //  console.log(posts)
// //   const getPost = async () => {
// //     try {
// //       const response = await fetch("https://jsonplaceholder.typicode.com/posts")
// //       const data =await response.json()
// //       setPosts(data)

// //     } catch (error) {
// //       console.log("Error", error);

// //     }
// //   }




// //   //////ye html page hai///////
// //   return(
// //     <div>
// //       <button onClick={getPost}>get posts</button>
// //       {
// //         posts.map((post)=>{
// //              <div key={post.id}>
// //                     <p>{post.title}</p>
                    
// //                     <p>{post.body}</p>
// //                 </div>
// //         })
// //       }
// //     </div>
// //   )

// // }



// // export default Home
















import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero';
import Card from './Card';
import React, { useEffect, useState } from 'react';

function Home() {
    const [posts, setPosts] = useState([]);


    ////ab hum useState karnege///////////////////////////////////////
    const getPost = async () => {
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            const data = await response.json();

            setPosts(data);
        } catch (error) {
            console.log("Error", error);
        }
    };


    /////dusra method ///////////////////////////////////////////////
    /////ab hum useEfect() ka use karrke banayenge////////////////////
    
    useEffect(()=>{
      
          const getPost = async () => {
            // console.log("calling")
        try {
            const response = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );

            const data = await response.json();

            setPosts(data);
        } catch (error) {
            console.log("Error", error);
        }
    }
    //////yaha pr hum get post ko call karnge
    getPost() 
    },[])
    return (
        <>
           <Navbar/>
            <Hero/>
        <section className='py-4 bg-gray-100'>
            <div className='max-w-7xl mx-auto px-4'>
                <h1 className='text-3xl text-center font-bold mb-8'>Latest Blogs</h1>
                               <div className='grid grid-cols-3 gap-6'>
            {/* /////useEfect ka use karne pr isko hatana padega */}
            {/* <button onClick={getPost}>Get Posts</button>  */}

            {posts.map((post) => (
                <Card key={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </div>

            </div>
        


        
        </section>
              <Footer/>
       </>
    );
}

export default Home;


