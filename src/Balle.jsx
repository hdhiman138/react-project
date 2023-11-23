import React from 'react'
import Form from './Form'

function Balle(xyz) {


    const msg="i dont speak , but notice every single thing"

  return (
    <div>
      <h1>my choose stream {xyz.item.name}</h1>
      <Form j={msg} data2={xyz.data}/>
    </div>
  )
}

export default Balle
