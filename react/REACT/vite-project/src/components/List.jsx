import React from 'react'

function List() {
    // const fruits=["apple","mango","kela","sitaphal"]
    const user=[
        {id:1,name:"ram",age:36},
        {id:2,name:"rahul",age:46}
    ]
  return (
    <div>
       {/* <ul>
        {fruits.map((fruits)=>(
            <li>{fruits}</li>
        ))}
      </ul>  */}
      ////use dusra method ////
           {
            user.map((students)=>(
                <div key={students.id}>
                    <h2>{students.name}</h2>
                    <h3>{students.age}</h3>
                </div>
            ))
           }

    </div>
  )
}

export default List
