
import React,{useContext} from 'react'
import Context from './Context'


 const IncrementButton = () => {
    const { myarr,handleDelete,handleEdit } = useContext(Context);
    return <div>
     {/* <button onClick={increment}>Increment</button>; */}
          <table style={{ width: '50%', margin: '20px auto' }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Email</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {myarr.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.address}</td>
              <td>{item.email}</td>
              <td>
                <button onClick={() => handleEdit(index)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
          </table>
    </div>
  };

  export default IncrementButton;


 
