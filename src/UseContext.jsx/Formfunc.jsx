import React ,{useEffect, useState} from 'react'
import myfunction from './Context1'

const Formfunc = ({children}) => {

    const label={
        name:'',
        email:"",
        password:"",
      }
 
  
      const [input,setInput]=useState(label);
      const [array,setArray]=useState([]);
      const [edit,setEdit]=useState(null);
      const [view,setView]=useState(null);
      const [search,setSearch]=useState('')

      const VIEW=(input)=>{
        setView(input)
      }



      const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
      };

      // const abc=async()=>{
      //   try {
      //     const response=await fetch('https://jsonplaceholder.typicode.com/users');
      //     const json=await response.json()
      //     const firstFiveEntries=json.slice(0,5)
      //     const Shuffledentries=shuffleArray(firstFiveEntries) 
      //     console.log(Shuffledentries)
      //     setArray(Shuffledentries)
      //   } catch (error) {
      //     console.error('Error fetching data:', error);
      //   }
      // }
      // useEffect(() => {
      //   abc();
      // }, []);
      
    
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

    const searchinput=(e)=>{
      setSearch(e.target.value)
    }
  

  return (
   <myfunction.Provider value={{ input,view,search, VIEW,array, edit, label, Delete, editchange,searchinput, tabledata, details,shuffleArray}}>
    {children}
   </myfunction.Provider>
  )
}


export default Formfunc
