import React from 'react'
import Hell from './Hell'

function House(props) {

  

  return (
    <div>

     <h1>i was not {props.data}</h1> 

     <p>i have one {props.mydata}</p>
     
     <Hell item={props.mydata}/>
     
    </div>
  )
}

export default House
