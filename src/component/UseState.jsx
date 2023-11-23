import React, { useState } from 'react'

const Counter =()=>{

  const [count,setCount]=useState(0)
  const [countt,setCountt]=useState(0)
  const [counttt,setCounttt]=useState(0)

  const change=()=>{
    setCount(count+1)  
  }

  const chnge=()=>{
    setCountt(countt-1)
  }

  const chainj=()=>{
    setCounttt(counttt+10)
  }

  const reset=()=>{
    setCount(0)
  }

  const reset1=()=>{
    setCountt(0)
  }

  return(
    <div>
       <h1>counting {count}</h1>
       <button onClick={change}>tap here</button> <br />
       <button onClick={reset}> tap here reset</button>
       <h1>counting {countt}</h1>
       <button onClick={chnge}>tap here</button><br />
       <button onClick={reset1}>tap here to reset</button>
       <h1>counying{counttt}</h1>
       <button onClick={chainj}>dhakkk</button>
    </div>
  )
}

  
  export default Counter
  
  
  
  {/* <h1>my counter is {count}</h1>
<button onClick={changedata}>inc</button> */}




// const UseState = () => {
  // const [count,setCount]=useState(0);
  
  // const changedata=()=>{
    //     setCount(count+1)
    // }
    // }
    {/* <h1 style={css2}>my name is  {name}</h1>
    <h1 style={{backgroundColor:Backgroundcolor }}>my favourite is    {Backgroundcolor}</h1>
    
    
    
    //  const useSta=()=>{
      //   const [name,setName]=useState("harry")
      //   const [color,setColor]=useState("red")
      //   const css={
        //       fontSize:"40px",
      //       textShadow:"2px 4px 5px",
      //       // fontFamily:"cursive"
    //   }
    //   const [css2,setCss]=useState(css)
    //   const [Backgroundcolor,setBackgroundcolor]=useState("violet")
    
    //   const changename=()=>{
      //       setName("dhiman")
      //       setColor("blue")
    //       setBackgroundcolor("yellow")
    //       setCss({
      //           textShadow:"2px 3px 10px black" ,
      //           fontSize:"140px",
    //           fontFamily:"cursive",
    //           color:"white",
    
    //       })
    //   }  
  <button onClick={changename} >click</button> */}
  
  
  
  
  
  
  
  
  
  // <h1 style={Css3}>i dont learn{Abc}</h1>
  // <h1>but start {Efg}</h1>
  // <h1>facing {Gh} </h1>
  // <button style={Btn} onClick={boo}>tap button</button>
  

  






// let Foo=()=>{
//           let [Abc,setAbc]=useState()
//           let [AbcColor,setAbcColor]=useState("red")
//           let [Efg,setEfg]=useState()
//           let [Gh,setGh]=useState()
//           let Css={
//             color:"red",
//             backgroundColor:"yellow",
//           }
//           let [Css3,setCss]=useState()

//           let [Btn,setBtn]=useState()
//           let css1={
//             fontSize:"40px"
//           }
          
         
//           let boo=()=>{
//             setAbc(" "+"javascript")
//             setEfg("react")
//             setAbcColor("red")
//             setCss({
//               color:"red",
//             backgroundColor:"yellow",
//             })

//             setGh("trouble")

//             setBtn({
//               fontSize:"40px"
//             })
           
//           }
          


