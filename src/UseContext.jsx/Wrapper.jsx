import React, { useState,useReducer,useEffect } from 'react'
import context from './Context';


const Wrapper =  ({ children }) => {
  const obj = {
    name: "",
    age: "",
    address: "",
    email: "",
    submitData: [],
  };
  const [mydata, setMydata] = useState(obj);
  const [myarr, setMyarr] = useState([]);
  const [tableEdit, setTableEdit] = useState(-1);

  function handleChang (e) {
    console.log(mydata);
    setMydata({ ...mydata, [e.target.name]: e.target.value });
  }
  function blankarr(e) {
    e.preventDefault();
    if (tableEdit === -1) {
      setMyarr([...myarr, mydata]);
    } else {
      const newArray = [...myarr];
      newArray[tableEdit] = mydata;
      setMyarr(newArray);
      setTableEdit(-1);
    }

    setMydata(obj);
  }
  function handleEdit(i) {
    setTableEdit(i);
    setMydata(myarr[i]);
  }
  function handleDelete(i) {
    const updatedData = [...myarr];
    updatedData.splice(i, 1);
    setMyarr(updatedData);
  }
  return (
    <context.Provider
      value={{
        obj,
        mydata,
        myarr,
        tableEdit,
        handleChang,
        blankarr,
        handleEdit,
        handleDelete
        
        ,
      }}
    >
      {children}
    </context.Provider>
  );
    };

export default Wrapper ;

