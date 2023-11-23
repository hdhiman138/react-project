import React, { useReducer, useState } from 'react'

const label={
  name:"",
  email:"",
  password:"",
  submitdata:[],
}

    const reducer=(state,action)=>{
      switch(action.type){
        case"form":
        return({...state,[action.field]:action.payload});

        case"save":
        if (
          state.name.trim() === '' ||
          state.email.trim() === '' ||
          state.password.trim() === ''
        ) {
          alert("Please fill in all fields before submitting.");
          return state;
        } else {
          return {
            ...state,
            submitdata: [...state.submitdata, { name: state.name, email: state.email, password: state.password }],
            name: "",
            email: "",
            password: "",
          };
        }

          case'edit':
          const editdata=[...state.submitdata]
          editdata[action.index]={
            name:state.name,
            email:state.email,
            password:state.password,
          }

          return({
             ...state,
             submitdata:editdata,
             name:"",
             email:"",
             password:"",
          })

          case 'delete':
            const updatedData = [
              ...state.submitdata.slice(0, action.index),
              ...state.submitdata.slice(action.index + 1),
            ];
            return { ...state, submitdata: updatedData };      
              
      }
    }

const Usereducer2 = () => {

  const [input,dispatch]=useReducer(reducer,label);
  const [editindex,setEditIndex]=useState(-1);

  function handledelete(index) {
    dispatch({ type: 'delete', index });
  }


  const details=(e)=>{
    e.preventDefault();
    dispatch({
      type:"form",
      field:e.target.name,
      payload:e.target.value,
    })
  }

  const datasave=(e)=>{
    e.preventDefault();
    if (editindex !== -1) {
      dispatch({ type: 'edit', index: editindex });
      setEditIndex(-1);
    }
     else {
      dispatch({ type: 'save' });
    }
  
  }

  function handleEdit(index) {
    const item = input.submitdata[index];
    dispatch({ type: 'form', field: 'name', payload: item.name });
    dispatch({ type: 'form', field: 'email', payload: item.email });
    dispatch({ type: 'form', field: 'password', payload: item.password });
    setEditIndex(index);
  
}


function emailVal(e) {
  const value  = e.target.value;
  if (!validateEmail(value)) {
    dispatch({ type: 'form', field: 'email', payload: '' });
  }
}

function validateEmail(value) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(value);
}


  return (
    <div>
      <input type="text" name='name' value={input.name} onChange={details} placeholder='enter your Name' />
      <input type="text" name='email' onBlur={emailVal} value={input.email} onChange={details} placeholder='enter your Email' />
      <input type="text" name='password' value={input.password} onChange={details} placeholder='enter your Password' />
      <button onClick={datasave}>{editindex!==-1?"update":"submit"}</button>


       <table>
        <thead>
          <tr>
            <th>sr no</th>
            <th>name</th>
            <th>email</th>
            <th>password</th>
            <th>edit</th>
            <th>delete</th>
          </tr>
        </thead>

        <tbody>
        {input.submitdata.map((item,index)=>(
          <tr key={index}>
              <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.password}</td>
              <td><button onClick={()=>handleEdit(index)}>edit</button></td>
              <td><button onClick={()=>handledelete(index)}>delete</button></td>
          </tr>
        ))}
        </tbody>
       </table>
 
    </div>
  )
}

export default Usereducer2;





// import React, {useReducer} from 'react'

// const label={
//   name:"",
//   age:"",
//   gender:"",
//   email:"",
//   password:"",
//   submitdetails:[],
// }

// const reducer=(state,action)=>{
//      switch(action.type){
//       case'form':
//       return ({...state,[action.field]:action.value});

//       case'submit':
//       return({
//         ...state,
//         submitdetails:[state.submitdetails , { name:state.name , age:state.age , gender:state.gender , email:state.email , password:state.password}],
//         name:"",
//         age:"",
//         gender:"",
//         email:"",
//         password:"",
//       })
//      }
// }

// const Usereducer2 = () => {

//   const [input,dispatch]=useReducer(reducer,label)

//   const details=(e)=>{
//          e.preventDefault();
//          dispatch({
//           type:'form',
//           field:e.target.name,
//           payload:e.target.value,
//          })
//   }

//   const datasave=(e)=>{
//     e.preventDefault()
//         dispatch({
//           type:'submit'
//         })
//   }

//   return (
//     <div>
//       <input type="text" name='name' value={input.name} onChange={details} placeholder='enter your name'/> <br />
//       <input type="text" name='age' value={input.age} onChange={details} placeholder='enter your age'/><br />
//       <input type="text" name='gender' value={input.gender} onChange={details} placeholder='enter your gender'/><br />
//       <input type="text" name='email' value={input.email} onChange={details} placeholder='enter your email'/><br />
//       <input type="text" name='password' value={input.password} onChange={details} placeholder='enter your password'/><br />
//       <button onClick={datasave}>submit</button>

//       <ol>
//         {input.submitdata.map((item,index)=>(
//             <li key={index}>
//                 {`name:${item.age} , age:${item.age} , gender:${item.gender} , email:${item.email} , password:${item.password}`}
//             </li>       
//         ))}
//       </ol>
//     </div>
//   )
// }

// export default Usereducer2





// import React, { useReducer } from 'react'


//     const label={
//         email:"",
//         password:"",
//         submit:[],
//     }

//     const reducer=(state,action)=>{
//        switch(action.type){
//         case'data':
//         return({...state,[action.field]:action.payload});
       

//        case 'submitt':
//        return{
//         ...state,
//         submit: [...state.submit, { name: state.email, age: state.password }],
//         email:"",
//         password:"",
//     }
//     }
//     }
// const Usereducer2 = () => {

//      const [input,dispatch]=useReducer(reducer,label)

//       const details=(e)=>{
//       e.preventDefault()
//         dispatch({
//             type:'data',
//         field:e.target.name,
//         payload:e.target.value
//         })
//       }

//      const submitdata=(e)=>{
//             e.preventDefault()
//             dispatch({
//                 type:'submitt'
//             })
//      }

      

//   return (
//     <div>
//       <input type="text" name='email' value={input.email} onChange={details} placeholder='enter your email'/>
//       <input type="text" name='password' value={input.password} onChange={details} placeholder='enter yout password'/>
//       <button onClick={submitdata}>submit</button>

//       <ul>
//         {input.submit.map((item, index) => (
//           <li key={index}>
//             {`Name: ${item.email}, Age: ${item.password}`}
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default Usereducer2



// import React, { useReducer } from 'react'



// const person={
//     name:"",
//     age:"",
//     gender:"",
//     phoneno:"",
//     submitdata:[],
// }

// const reducer=(state,action)=>{
//    switch(action.type){
//     case 'change':
//     return ({...state,[action.field]:action.payload});

//     case"submit":
//     return({
//         ...state,
//         submitdata:[...state.submitdata,{name:state.name , age:state.age , gender:state.gender , phoneno:state.phoneno}],
//         name:"",
//         age:"",
//         gender:"",
//         phoneno:'',
//     });

//     case"delete":
//      const dlt=state.submitdata.filter(
//         (_, index)=> index !== action.index
//      );
//      return { ...state, submitdata: dlt }; 

//    }
// }

// const Usereducer2 = () => {

//     const [data,dispatch]=useReducer(reducer,person)

//     const handlechange=(e)=>{
//        dispatch({
//         type:'change',
//         field: e.target.name,
//         payload:e.target.value,
//        })
//     }

//     const handlesubmit=(e)=>{
//         e.preventDefault()
//         dispatch({
//             type:"submit"
//         })
//     }

//     function cutdata(index){
//         dispatch({
//             type:"delete"
//            ,index   
//          })
//     }

    

//   return (
//     <div>
//       NAME: <input type="text" name='name' value={data.name} onChange={handlechange} placeholder='enter your name'/><br />
//       AGE: <input type="text" name='age' value={data.age} onChange={handlechange}  placeholder='enter your age '/><br />
//       GENDER: <input type="text" name='gender' value={data.gender} onChange={handlechange} placeholder='ur gender'/><br />
//       PHONE: <input type="text" name='phoneno' value={data.phoneno} onChange={handlechange} placeholder='ur number'/><br />
//       <button onClick={handlesubmit}>submit</button>

// <ol>
 

//         {data.submitdata.map((item,index)=>(
//                 <li key={index}>
//                     {`name:${item.name}${("     ")},age:${item.age}  , gender:${item.gender}, phoneno:${item.phoneno}`}
//                     <button onClick={()=>cutdata(index)} >delete</button>
//                 </li>
//         ))}
   
// </ol>
//     </div>
//   )
// }

// export default Usereducer2
