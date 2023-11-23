import React, { useEffect, useState } from 'react'

const UseEffect = () => {

   const [count1,setCount1]=useState(0)
   const [count2,setCount2]=useState(0)

   const counter1=()=>{
    setCount1(count1+1)
    console.log("counter-one",count1)
   }
   
   const counter2=()=>{
     setCount2(count2+1)
     console.log("counter-two",count2)
    }
    
    useEffect(()=>{
      
      setTimeout(() => {
        if(count1<49)

        
       counter2()
       counter1()
      
     }, 100);


   },[count1],[count2])

  return (
    <div>
      <p>counter {count1}</p>
      <p>counter {count2}</p>
      <button onClick={counter1}>click 1</button>
      <button onClick={counter2}>click 2</button>
    </div>
  )
}

export default UseEffect





// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {

//   const [count,setcount]=useState(0)

//    const count1=()=>{
//     console.log("function 1 call",count)
//             setcount(count+1)
//    }

//    const count2=()=>{
//     console.log("function 2 call",count)
//      setcount(count+1)
//      count1()
//    }
   
//    useEffect(()=>{
//      count1()

//    },[])


//   return (
//     <div>
//       <button onClick={count2}>onClick</button>
//     </div>
//   )
// }

// export default UseEffect
