import React, { useContext } from 'react'
import myfunction from "./UseContext.jsx/Context1"

const Tutorial = () => {
  const { array, editchange, Delete   }=useContext(myfunction)
  return (
    <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">SR.NO.</th>
      <th scope="col">NAME</th>
      <th scope="col">E-MAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">EDIT</th>
      <th scope="col">DELETE</th>
    </tr>
  </thead>
  <tbody>
            {array.map((item,index)=>(
             <tr key={index}>
               <td>{index+1}</td>
               <td>{item.name}</td>
               <td>{item.email}</td>
               <td>{item.password}</td>
               <td><button onClick={()=>{editchange(index)}}>edit</button></td>
               <td><button onClick={()=>{Delete(index)}}>delete</button>
               </td>
              </tr>
            ))}
         </tbody>
</table>
    </div>
  )
}

export default Tutorial



// import React, { useContext } from 'react'
// import myfunction from'./UseContext.jsx/Context1'

// const Tablecontext = () => {
//     const { array, editchange, Delete , VIEW ,search,   searchinput}=useContext(myfunction)
//   return (
//     <div>
//        <table>
//         <thead>
//           <tr>
//             <th>Sr.No.</th>
//             <th>name</th>
//             <th>email</th>
//             <th>password</th>
//             <th>edit/dlt</th>
           
            
//           </tr>
//         </thead>

//         <tbody>
//            {array.map((item,index)=>(
//             <tr key={index}>
//                 <td>{index+1}</td>
//               <td>{item.name}</td>
//               <td>{item.email}</td>
//               <td>{item.password}</td>
             
           
//               <td><button onClick={()=>{editchange(index)}}>edit</button>
//               <button onClick={()=>{Delete(index)}}>delete</button>

//               <button type="button" onClick={()=>{VIEW(item)}} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//               VIEW</button>
//               </td>
//              </tr>
//            ))}
//         </tbody>
//       </table>
//       <br /><br />

//       <input type="text" placeholder='search' onChange={searchinput}/>

     
//     </div>
//   )
// }

// export default Tablecontext




// // import React from 'react'

// // const Tutorial = () => {
// //   return (
// //     <div>
// //       <h2>Tutorial</h2>
// //       <p>Learn tutorial by yourself</p>
// //     </div>
// //   )
// // }

// // export default Tutorial


// import React from 'react'

// const Tutorial = () => {
   
//   const onchange=(e)=>{

//   }
   
//   return (
//     <div>
//     <table class="table">
//   <thead>
//     <tr>
//       <th scope="col">#</th>
//       <th scope="col">First</th>
//       <th scope="col">Last</th>
//       <th scope="col">Handle</th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <th scope="row">1</th>
//       <td>Mark</td>
//       <td>Otto</td>
//       <td>@mdo</td>
//     </tr>
//     <tr>
//       <th scope="row">2</th>
//       <td>Jacob</td>
//       <td>Thornton</td>
//       <td>@fat</td>
//     </tr>
//     <tr>
//       <th scope="row">3</th>
//       <td colspan="2">Larry the Bird</td>
//       <td>@twitter</td>
//     </tr>
//   </tbody>
// </table>
      
//     </div>
//   )
// }

// export default Tutorial
