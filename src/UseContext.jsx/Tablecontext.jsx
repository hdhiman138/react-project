import React, { useContext } from 'react'
import myfunction from'./Context1'

const Tablecontext = () => {
    const { array, editchange, Delete , VIEW ,search,   searchinput}=useContext(myfunction)
  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Sr.No.</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
            <th>address</th>
            <th>company</th>
            <th>edit from</th>
            <th>edit/dlt from</th>
          </tr>
        </thead>

        <tbody>
           {array.filter((item)=>{
            return search.toLowerCase() ===''
            ? item
            : item.name.toLowerCase().includes(search);
           }).map((item,index)=>(
            <tr key={index}>
                <td>{index+1}</td>
              <td>{item.name}</td>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.address.geo.lat}</td>
              <td>{item.company.catchPhrase}</td>
              <td>{item.password}</td>
              <td><button onClick={()=>{editchange(index)}}>edit</button>
              <button onClick={()=>{Delete(index)}}>delete</button>

              <button type="button" onClick={()=>{VIEW(item)}} class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              VIEW</button>
              </td>
             </tr>
           ))}
        </tbody>
      </table>
      <br /><br />

      <input type="text" placeholder='search' onChange={searchinput}/>

     
    </div>
  )
}

export default Tablecontext
