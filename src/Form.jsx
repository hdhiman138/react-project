import React from 'react'



const Form = (abcd) => {
  return (
    <div>
       <form action="/submit_form" method="post">
        <fieldset>
        <legend>Personal Details</legend>
        
        <label for="name" className='c1'>Name:</label>
        <input type="text" id="name"  value={abcd.data2.name} name="name" className='i1' required/><br /><br />

        <label for="email" className='c2'>Email:</label>
        <input type="email" id="email" className='i2'value={abcd.data2.email } name="email" required  /><br /><br />
        
        <label for="password" className='c3'>Password:</label>
        <input type="password"  id="password" className='i3' name="password" required/><br /><br />
       
        <label className='c4'>Gender:</label>
        <input type="radio" id="male" name="gender" value="male" checked/>
        <label for="male">Male</label> 
        <input type="radio" id="female" name="gender" value="female"/>
        <label for="female">Female</label><br /> <br />

        
        <label for="message" className='c5'>Message:</label>
        <textarea id="message" name="message" value={abcd.j} className='i4' rows="4" required></textarea><br /><br />

        <input type="checkbox" id="subscribe" name="subscribe" checked/>
        <label for="subscribe">Subscribe to newsletter</label><br /><br />

        <input type="submit" className='c6' value="Submit"/>
        </fieldset>
    </form>

 <br /><br /><br />
   </div>
  )
}

export default Form
