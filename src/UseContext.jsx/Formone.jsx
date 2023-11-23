import React, { useContext } from 'react'
import myfuction from './Context1'

const Formone = () => {
    const { input, details, tabledata, edit, abc }=useContext(myfuction)
  return (
    <div>
      <input type="text" name='name' value={input.name} onChange={details}  placeholder='enter name'/>
      <input type="text" name='email' value={input.email} onChange={details}  placeholder='enter email'/>
      <input type="text" name='password' value={input.password} onChange={details}  placeholder='enter password'/>
      <button onClick={tabledata}>{edit!==null ? "update":"submit"}</button>
      <button onClick={abc}>api</button>


    </div>
  )
}

export default Formone
