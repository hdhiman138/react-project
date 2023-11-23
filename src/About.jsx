import React, { useContext } from 'react'
import myfuction from './UseContext.jsx/Context1'

const Formone = () => {
    const { input, details, tabledata, edit }=useContext(myfuction)
  return (
    <div>
      <input type="text" name='name' value={input.name} onChange={details}  placeholder='enter name'/><br /><br />
      <input type="text" name='email' value={input.email} onChange={details}  placeholder='enter email'/><br /><br />
      <input type="text" name='password' value={input.password} onChange={details}  placeholder='enter password'/><br /><br />
      <button onClick={tabledata}>{edit!==null ? "update":"submit"}</button><br /><br />
      {/* <button onClick={abc}>api</button> */}


    </div>
  )
}

export default Formone






// // // About.js
// // import React from 'react';

// // const About = () => {
// //   return (
// //     <div>
// //       <h2>About</h2>
// //       <p>This is the About page.</p>
// //     </div>
// //   );
// // };

// // export default About;

// import React from 'react'

// const About = () => {
//   return (
//     <div>
//    <form>
//   <div class="mb-3">
//     <label for="exampleInputEmail1" class="form-label">Email address</label>
//     <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div class="mb-3">
//     <label for="exampleInputPassword1" class="form-label">Password</label>
//     <input type="password" class="form-control" id="exampleInputPassword1"/>
//   </div>
//   <div class="mb-3 form-check">
//     <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
//     <label class="form-check-label" for="exampleCheck1">Check me out</label>
//   </div>
//   <button type="submit" class="btn btn-primary">Submit</button>
// </form>
//     </div>
//   )
// }

// export default About
