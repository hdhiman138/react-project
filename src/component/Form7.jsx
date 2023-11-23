import React, { useState } from 'react';

const Form7 = () => {
  const label = {
    name: '',
    age: '',
    gender: '',
    phoneno: '',
    email: '',
    password: '',
  };

  const [input, setInput] = useState(label);
  const [table, setTable] = useState([]);
  const [edit, setEdit] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [password,setPassword]=useState(true) 

    const Password=(inputPassword)=>{
            const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            const abc = passwordRegex.test(inputPassword)
            setPassword(abc)
            setInput({ ...input, ["password"]:""})
          }
          const pass=()=>{
            Password(input.password);
          }


  const tabledata = (e) => {
    e.preventDefault();
    if(input.name==="" || input.age==="" || input.gender==="" || input.phoneno==="" || input.email==="" || input.password===" "){
      alert("All fields are required")
      return;
    }
    if (edit !== null) {
      const change = [...table];
      change[edit] = input;
      setTable(change);
      setEdit(null);
    } else {
      setTable([...table, input]);
    }
    setInput(label);
  } 
  

  const change = (index) => {
    setInput(table[index]);
    setEdit(index);
  };

  const Delete = (index) => {
    const dlt = table.slice();
    dlt.splice(index, 1);
    setTable(dlt);
  };

  const details = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value});
  };

          const NAME=()=>{
            if(input.name.length<=4){
              alert("name not valid")
              setInput({ ...input, ["name"]:""})
            }
          }

          const AGE=()=>{ 
                if(input.age<18 || input.age>50){
                  alert("18+ or 50-")
                  setInput({ ...input, ["age"]:""})
                }
          }
          
          const PHONENO=()=>{
            if(input.phoneno.length<=9 || input.phoneno.length>=11 ){
              alert("10 digits required")
              setInput({ ...input, ["phoneno"]:""})
            }
          }

          const validateEmail = (inputEmail) => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isValid = emailRegex.test(inputEmail);
            setIsValidEmail(isValid);
            setInput({ ...input, ["email "]:""})
          };

         
          const handleBlur = () => {
            validateEmail(input.email);
          };

          const nosubmit=(e)=>{
            e.preventDefault()
            if(!input.name==="" || !input.age==="" || !input.gender==="" || !input.phoneno==="" || !input.email==="" || !input.password===" "){
              alert("All fields are required")
            }
          }

        
  return (
    <div>
      <form action="" onSubmit={nosubmit}> 
        <label htmlFor="">Name: </label><br />
        <input type="text" name="name" value={input.name} onBlur={NAME} onChange={details} /><br /><br />
        

        <label htmlFor="">Age: </label><br />
        <input type="text" name="age" value={input.age} onBlur={AGE} onChange={details} /><br /><br />

        <label htmlFor="">Gender: </label><br />
        <input type="text" name="gender" value={input.gender} onChange={details} /><br /><br />

        <label htmlFor="">Phoneno: </label><br />
        <input type="text" name="phoneno" onBlur={PHONENO} value={input.phoneno} onChange={details} /><br /><br />

        <label htmlFor="">PASSWORD: </label><br />
        <input type="text" name="password" onBlur={pass} value={input.password} onChange={details} /><br /><br />
         {password ? null : <p>invalid password</p>}
        <label htmlFor="">Email: </label><br />
        <input type="text" name="email"  onBlur={handleBlur}  value={input.email} onChange={details} /><br /><br />
        {isValidEmail ? null : <p style={{ color: 'red' }}>Invalid email address</p>}
        <button type="submit" onClick={tabledata}>{edit !== null ? 'Update' : 'Submit'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>SR. NO.</th>
            <th>NAME</th>
            <th>GENDER</th>
            <th>PHONENO.</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>edit form</th>
            <th>delete</th>
          </tr>
        </thead>
        <tbody>
          {table.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.gender}</td>
              <td>{item.phoneno}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button onClick={() => change(index)}>edit</button></td>
              <td><button onClick={() => Delete(index)}>delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Form7;







// import React, { useState } from 'react'

// const Form7 = () => {

//       const label={
//         name:"",
//         age:"",
//         gender:"",
//         phoneno:"",
//         email:"",
//         address:"",
//       }

//       const [input,setInput]=useState(label);
//       const [table,setTable]=useState([]);
//       const [edit,setEdit]=useState(null);


//       const tabledata=(e)=>{
//         e.preventDefault();
//         if(edit!==null){
//           const change=[...table];
//           change[edit]=input;
//           setTable(change);
//           setEdit(null)
//         }

//         else{
//           setTable([...table,input]);
//         }
//         setInput(label);
//       }
      
//       const change=(index)=>{
//          setInput(table[index])
//          setEdit(index)
//       }

//       const Delete=(index)=>{
//              const dlt=table.slice()
//              dlt.splice(index,1)
//              setTable(dlt)
//       } 
      
//       const details=(e)=>{
//         setInput({...input,[e.target.name]:e.target.value})
//       }
//       console.log(input)

//       const handleSubmit=(e)=>{
//         e.preventDefault();
//         if(!input.name || !input.age || !input.gender || !input.phoneno || !input.address || !input.email){
//           alert("All fields are mandatory")
//         }
//         else {
//           tabledata(e);
//         }
//       }
      
//       return (
       
//         <div>
//       <form action="" onSubmit={handleSubmit}>
//         <label htmlFor="">Name: </label><br />
//         <input type="text" name='name' value={input.name} onChange={details} /><br /><br />
      

//         <label htmlFor="">Age: </label><br />
//         <input type="text" name='age' value={input.age} onChange={details} /><br /><br />

//         <label htmlFor="">Gender: </label><br />
//         <input type="text" name='gender' value={input.gender} onChange={details} /><br /><br />

//         <label htmlFor="">Phoneno: </label><br />
//         <input type="text" name='phoneno' value={input.phoneno} onChange={details} /><br /><br />
        
//         <label htmlFor="">Address: </label><br />
//         <input type="text" name='address' value={input.address} onChange={details} /><br /><br />

//         <label htmlFor="">Email: </label><br />
//         <input type="text" name='email' value={input.email} onChange={details} /><br /><br />


//         <button onClick={tabledata}>{edit!==null?"update":"submit"}</button>
//       </form>

//       <table>
//         <thead>
//             <tr>
//                 <th>SR. NO.</th>
//                 <th>NAME</th>
//                 <th>GENDER</th>
//                 <th>PHONENO.</th>
//                 <th>EMAIL</th>
//                 <th>ADDRESS</th>
//                 <th>edit form</th>
//                 <th>delete</th>
//             </tr>
//         </thead>
//               {table.map((item,index)=>(
//                 <tr key={index}>
//                   <td>{index+1}</td>
//                   <td>{item.name}</td>
//                   <td>{item.gender}</td>
//                   <td>{item.phoneno}</td>
//                   <td>{item.email}</td>
//                   <td>{item.address}</td>
//                   <td><button onClick={()=>change(index)}>edit</button></td>
//                   <td><button onClick={()=>Delete(index)}>delete</button></td>
//                 </tr>
//               ))}
//         <tbody>
           
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default Form7
