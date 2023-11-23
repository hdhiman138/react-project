import React, { useState } from 'react';

const Form3 = () => {
  const initialInput = {
    email: "",
    password: "",
  };

  const [input, setInput] = useState(initialInput);
  const [array, setArray] = useState([]);
  const [edit, setEdit] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateForm = () => {
    let isValid = true;

    if (input.email === "" || !isValidEmail(input.email)) {
      setEmailError("Enter a valid email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (input.password === "") {
      setPasswordError("Password is required");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  const isValidEmail = (email) => {
    // Add your email validation logic here
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const oochange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const tabledetails = (e) => {
    e.preventDefault();

    if (validateForm()) {
      if (edit !== null) {
        const edits = [...array];
        edits[edit] = input;
        setArray(edits);
        setEdit(null);
      } else {
        setArray([...array, input]);
      }

      setInput(initialInput);
    }
  };

  const Delete = (index) => {
    const dlt = array.slice();
    dlt.splice(index, 1);
    setArray(dlt);
  };

  const changedata = (index) => {
    setInput(array[index]);
    setEdit(index);
  };

  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            value={input.email}
            onChange={oochange}
          />
          <p style={{ color: 'red' }}>{emailError}</p>
        </div>

        <div>
          <label>Password:</label>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            value={input.password}
            onChange={oochange}
          />
          <p style={{ color: 'red' }}>{passwordError}</p>
        </div>

        <button onClick={tabledetails}>{edit !== null ? "Update" : "Submit"}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Sr no</th>
            <th>Email</th>
            <th>Password</th>
            <th>Buttons</th>
          </tr>
        </thead>

        <tbody>
          {array.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td>
                <button onClick={() => changedata(index)}>Edit</button>
                <button onClick={() => Delete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form3;


















// import React, { useState } from 'react'

// const Form3 = () => {

//   const label={
//         email:"",
//         password:"",
//   }
   

//   const [input,setInput]=useState(label);
//   const [array, setArray] = useState([]);
//   const [edit,setEdit]=useState(null);
//   const [email,setEmail]=useState(true); 

//   const validateEmail=()=>{

//   }

//   const oochange=(e)=>{
//     setInput({...input,[e.target.name]:e.target.value})
//   }


//   const tabledetails=(e)=>{
//     e.preventDefault()
    
//     if(edit!==null){
//       const edits=[...array];
//       edits[edit]=input;
//       setArray(edits);
//       setEdit(null);
//     }
//     else{
//     setArray([...array,input])
//   }
//     setInput(label)
//   }


//   const Delete=(index)=>{
//     const dlt=array.slice()
//     dlt.splice(index,1)
//     setArray(dlt)
//   }

  
//   const changedata=(index)=>{
//     setInput(array[index])
//     setEdit(index)
//   }
//   console.log(input)

//   return (
//     <div>
//       <form action="">
//         <input type="email" placeholder='enter email' name='email' value={input.email} onChange={oochange}  />
//         <input type="text" placeholder='enter password' name='password'value={input.password} onChange={oochange}/>
//         <button onClick={tabledetails}>{edit !== null ? "update":"submit"}</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>sr no</th>
//             <th>email</th>
//             <th>password</th>
//             <th>buttons</th>
//           </tr>
//         </thead>

//         <tbody>
//         {array.map((item, index) => (
//   <tr key={index}>
//     <td>{index + 1}</td>
//     <td>{item.email}</td>
//     <td>{item.password}</td>
//     <td><button onClick={() => changedata(index)}>edit</button>
//     <button onClick={() => Delete(index)}>delete</button></td>
//   </tr>
// ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Form3









// import React, { u<form action="">


// const Form3 = () => {
//   const initialInput = {
//     email: '',
//     password: '',
//   };

//   const [input, setInput] = useState(initialInput);
//   const [array, setArray] = useState([]);
//   const [edit, setEdit] = useState(null);
//   const [validations, setValidations] = useState({
//     email: true,
//     password: true,
//   });

//   const tabledata = (e) => {
//     e.preventDefault();

//     if (input.email === '' || input.password === '') {
//       alert('ALL FIELDS ARE REQUIRED');
//       return;
//     }

//     if (edit !== null) {
//       const editdata = [...array];
//       editdata[edit] = input;
//       setArray(editdata);
//       setEdit(null);
//     } else {
//       setArray([...array, input]);
//     }
//     setInput(initialInput);
//   };

//   const changedata = (index) => {
//     setInput(array[index]);
//     setEdit(index);
//   };

//   const handleValidation = () => {
//     emailValidation(input.email);
//     passwordValidation(input.password);
//   };

//   const emailValidation = (inputEmail) => {
//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const isValid = emailRegex.test(inputEmail);
//     setValidations({ ...validations, email: isValid });
//     return isValid;
//   };

//   const passwordValidation = (inputPassword) => {
//     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
//     const isValid = passwordRegex.test(inputPassword);
//     setValidations({ ...validations, password: isValid });
//     return isValid;
//   };

//   const handleBlur = (fieldName) => {
//     if (fieldName === 'email') {
//       emailValidation(input.email);
//     } else if (fieldName === 'password') {
//       passwordValidation(input.password);
//     }
//   };

//   return (
//     <div>
//       <form>
//         Email:
//         <input
//           type="text"
//           name="email"
//           onBlur={() => handleBlur('email')}
//           value={input.email}
//           onChange={(e) => setInput({ ...input, email: e.target.value })}
//         />
//         {!validations.email && <p style={{ color: 'red' }}>Enter a valid email</p>}

//         Password:
//         <input
//           type="text"
//           name="password"
//           onBlur={() => handleBlur('password')}
//           value={input.password}
//           onChange={(e) => setInput({ ...input, password: e.target.value })}
//         />
//         {!validations.password && (
//           <p style={{ color: 'red' }}>
//             Enter a password with at least one uppercase letter, 3-4 lowercase letters, one special character, and a minimum length of 8
//           </p>
//         )}

//         <button onClick={tabledata}>{edit !== null ? 'Update' : 'Submit'}</button>
//       </form>

//       <table>
//         <thead>
//           <tr>
//             <th>Sr no</th>
//             <th>Email</th>
//             <th>Password</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>

//         <tbody>
//           {array.map((item, index) => (
//             <tr key={index}>
//               <td>{index + 1}</td>
//               <td>{item.email}</td>
//               <td>{item.password}</td>
//               <td>
//                 <button onClick={() => changedata(index)}>Edit</button>
//               </td>
//               <td>
//                 <button onClick={() => setArray(array.filter((_, i) => i !== index))}>Delete</button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Form3;
