import React from 'react'


function Form2(props) {
  return (
    <div>
      <form>
    <label for="name">Full Name:</label>
    <input type="text" id="name" name="name" value={props.details.fullname} required/>

    <br/><br />

  
    <label for="email">Email:</label>
    <input type="email" id="email" name="email" value={props.details.email} required/>

    <br/><br />

    
    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob" value={props.details.dob} name="dob" required/>

    <br/><br />

   
    <label>Gender:</label>
    <input type="radio" id="male" name="gender" value="male"/>
    <label for="male">Male</label>
    <input type="radio" id="female" name="gender" value="female"/>
    <label for="female">Female</label>
    <input type="radio" id="other" name="gender" value="other"/>
    <label for="other">Other</label>

    <br/>
<br />
    
    <label for="address">Address:</label>
    <textarea id="address" name="address" value={props.details.address} rows="4" required></textarea>

    <br/><br />

    <label>messege</label>
    <textarea name="" id="" value={props.details.messege} cols="30" rows="10"></textarea>

    
    <input type="submit" value="Submit"/>
  </form>
    </div>
  )
}

export default Form2
