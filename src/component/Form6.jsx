import React, { useState } from 'react'

    const label={
      name:'',
      email:"",
      password:"",
    }

const Form6 = () => {

    const [input,setInput]=useState(label);
    const [array,setArray]=useState([]);
    const [edit,setEdit]=useState(null);

     
         
     
    const details=(e)=>{
      setInput({...input,[e.target.name]:e.target.value})
    }

   const tabledata=(e)=>{
    e.preventDefault()
    if(edit!==null){
      const editt=[...array]
      editt[edit]=input
      setArray(editt)
      setEdit(null)
    }
    else{
      setArray([...array,input])
    }
        
         setInput(label)
   }

   const editchange=(index)=>{
    setInput(array[index])
    setEdit(index)
  }

  const Delete=(index)=>{
    const dlt=array.slice()
    dlt.splice(index,1)
    setArray(dlt)
  }

  return (
    <div>
      <input type="text" name='name' value={input.name} onChange={details}  placeholder='enter name'/>
      <input type="text" name='email' value={input.email} onChange={details}  placeholder='enter email'/>
      <input type="text" name='password' value={input.password} onChange={details}  placeholder='enter password'/>
      <button onClick={tabledata}>{edit!==null ? "update":"submit"}</button>


      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>edit from</th>
          </tr>
        </thead>

        <tbody>
           {array.map((item,index)=>(
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button onClick={()=>{editchange(index)}}>edit</button></td>
              <td><button onClick={()=>{Delete(index)}}>delete</button></td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  )
}

export default Form6

























// import React, { useState } from 'react'

// const Form6 = () => {

//   const persondetails={
//     name:"",
//     age:"",
//     gender:"",
//     phoneno:"",
//   }

//   const [input,setInput]=useState(persondetails);
//   const [array,setArray]=useState([]);
//   const [edit,setEdit]=useState(null);

//   const tabledata=(e)=>{
//     e.preventDefault();
//     if(edit!==null){
//       const editdata=[...array];
//       editdata[edit]=input;
//       setArray(editdata);
//       setEdit(null);
//     }
//     else{
//       setArray([...array,input])
      
//     }
//     setInput(persondetails)
//   }

//   const editclick=(index)=>{
//         setInput(array[index])
//         setEdit(index)
//   }

//   const Delete=(index)=>{
//         const abc=array.slice(); 
//         abc.splice(index,1)
//         setArray(abc)
//   }

//   const onchange=(e)=>{
//     setInput({...input,[e.target.name]:e.target.value})
//   }

//   console.log(input)

//   return (
//     <div>
//       <form action="">
//         <label htmlFor="">Name:</label><br />
//         <input type="text"  name='name' value={input.name} onChange={onchange}/><br /><br />

//         <label htmlFor="">Age: </label><br />
//         <input type="text"  name='age' value={input.age} onChange={onchange}/><br /><br />

//         <label htmlFor="">Gender:</label><br />
//         <input type="text" name='gender' value={input.gender} onChange={onchange} /><br /><br />

//         <label htmlFor="">Phone Number</label><br />
//         <input type="text" name='phoneno' value={input.phoneno} onChange={onchange} /><br /><br />

//         <button onClick={tabledata}>{edit!==null?"update":"submit"}</button>
//       </form>

//       <table>
//         <thead>
//         <tr>
//           <th>sr no</th>
//           <th>name</th>
//           <th>age</th>
//           <th>gender</th>
//           <th>phoneno</th>
//           <th>edit form</th>
//           <th>delete</th>
//         </tr>
//         </thead>

//         <tbody>
//         {array.map((item,index)=>(
//           <tr>
//             <td>{index+1}</td>
//             <td>{item.name}</td>
//             <td>{item.age}</td>
//             <td>{item.gender}</td>
//             <td>{item.phoneno}</td>
//             <td><button onClick={()=>editclick(index)}>edit</button></td>
//             <td><button onClick={()=>Delete(index)}>delete</button></td>
//           </tr>
//         ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Form6




// import React, { useState } from 'react';

// function Form3() {
//   const label = {
//     FirstName: '',
//     LastName: '',
//     DateofBirth: '',
//     Email: '',
//     PhoneNumber: '',
//   };

//   const [inputData, setInputData] = useState(label);
//   const [array, setArray] = useState([]);
//   const [editIndex, setEditIndex] = useState(null);

//   const savedata = (e) => {
//     e.preventDefault();
//     if (editIndex !== null) {
//       const newArray = [...array];
//       newArray[editIndex] = inputData;
//       setArray(newArray);
//       setEditIndex(null); 
//     } else {
//       setArray([...array, inputData]);
//     }

//     setInputData(label);
//   };

//   const editData = (index) => {
    
//     setInputData(array[index]);
//     setEditIndex(index);
//   };

//   const details = (e) => {
//     setInputData({ ...inputData, [e.target.name]: e.target.value });
//   };

//   console.log(array, '===>>>>>');

//   return (
//     <div>
//       <form action="" className="form1">
//       <label htmlFor="">First Name: </label><br />
//         <input type="text" value={inputData.FirstName} onChange={details} name='FirstName' className='i1' placeholder='enter your first name'/> <br /><br />
//         <label htmlFor="">Last Name: </label><br />
//         <input type="text" value={inputData.LastName} onChange={details} name='LastName' className='i1' placeholder='enter your last name'/><br /><br />
//         <label htmlFor="">Date of Birth: </label><br />
//         <input type="date" value={inputData.DateofBirth} onChange={details} name='DateofBirth' className='i1' placeholder='00-00-0000'/><br /><br />
//         <label htmlFor="">E-mail: </label><br />
//         <input type="email" value={inputData.Email} onChange={details} name='Email' className='i1' placeholder='abc123@gmail.com'/><br /><br />
//         <label htmlFor="">Phone Number: </label><br />
//         <input type="number" value={inputData.PhoneNumber} onChange={details} name='PhoneNumber' className='i1' placeholder='9876543210'/><br /><br />
//         <button className="btn" onClick={savedata}>
//           {editIndex !== null ? 'Update' : 'Submit'}
//         </button>
//         <br />
//         <br />
//       </form>

//       <table>
//         <thead>
//           <th>fname</th>
//           <th>lname</th>
//           <th>dob</th>
//           <th>email</th>
//           <th>phoneno</th>
//           <th>edit</th>
//         </thead>

//         <tbody>
//           {array.map((item, index) => (
//             <tr key={index}>
//               <td>{item.FirstName}</td>
//               <td>{item.LastName}</td>
//               <td>{item.DateofBirth}</td>
//               <td>{item.Email}</td>
//               <td>{item.PhoneNumber}</td>
//               <td><button onClick={() => editData(index)}>Edit</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Form3;





















// import React, { useState } from 'react'

// function Form6() {

// const label={
//     email:"",
//     password:"",
// }

// const [input,setInput]=useState(label);
// const [data,setData]=useState([]);


// const details=(e)=>{
//     setInput({...input,[e.target.name]:e.target.value})
// }
// console.log(details);

// const datasaved=(e)=>{
//     e.preventDefault();
//     setData([...data,input]);
//     setInput(label);
// }


//   return (
//     <div>
//       <form action="">
//         <label htmlFor="">email</label><br />
//         <input type="text" name='email' value={input.email} onChange={details}/><br /><br />
//         <label htmlFor="">password</label><br />
//         <input type="text"  name='password' value={input.password} onChange={details}/><br /><br />
//         <button onClick={datasaved}>SUBMIT</button>
//       </form>

//       <table>
//         <thead>
//             <tr>
//                 <th>email</th>
//                 <th>password</th>
//             </tr>
//         </thead>

//         <tbody>
//            {data.map((item,index)=>(
//              <tr key={index}>
//                 <td>{item.email}</td>
//                 <td>{item.password}</td>
//                 <td><button>Edit</button></td>
//              </tr>
//            ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Form6
