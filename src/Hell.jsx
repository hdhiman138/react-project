 import React from "react";
import Form from "./Form";
import House from "./House";
 

 function hello(props){


 return (
    <div>
        <h1>my name is {props.item}</h1>
        
      {/* <Form mydata={props.data}/> */}
 

     {/* <p>i have one {props.mydata}</p> */}
        

    </div>
 )
 }

 export default hello;