

 import React, { useState } from 'react'
 
 function Form5() {

      const label={
        name:"",
        phoneno:"",
        address:"",
        messege:"",
      }

      const [input,setInput]=useState(label);
      const [array,setArray]=useState([]);
      const [edit,setEdit]=useState(null);
      

      const data=(e)=>{
          e.preventDefault();
          if(edit!==null){
            const changes=[...array];
            changes[edit]=input;
            setArray(changes);
            setEdit(null);
          }

          else{
            setArray([...array,input])
          }

          setInput(label);
      }

      const editchanges=(index)=>{
        setInput(array[index]);
        setEdit(index);
      }

      const savedata=(e)=>{
        setInput({...input,[e.target.name]:e.target.value})
      }
      console.log(input);

   return (
     <div>
       <form action="">
           <label htmlFor="">name</label><br />
           <input type="text" name='name' value={input.name} onChange={savedata}/> <br /><br />
           <label htmlFor="">phoneno</label><br />
           <input type="text"  name='phoneno' value={input.phoneno} onChange={savedata}/><br /><br />
           <label htmlFor="">address</label><br />
           <input type="text" name='address' value={input.address} onChange={savedata}/><br /><br />
           <label htmlFor="">messege</label><br />
           <input type="text" name='messege' onChange={savedata} value={input.messege}/><br /><br />
           <button onClick={data}>{edit!==null?'update':'submit'}</button>
       </form>

       <table>
        <thead>
          <tr>
            <th>name</th>
            <th>phoneno</th>
            <th>address</th>
            <th>messege</th>
            <th>edit form</th>
          </tr>
        </thead>

        <tbody>
        {array.map((item,index)=>(
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.phoneno}</td>
            <td>{item.address}</td>
            <td>{item.messege}</td>
            <td><button onClick={()=>editchanges(index)}>edit</button></td>
          </tr>
        )) }
        </tbody>
       </table>
     </div>
   )
 }
 
 export default Form5
