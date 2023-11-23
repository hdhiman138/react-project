import React from 'react'

const Crousel = () => {
  return (
    <div>
      
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg" class="d-block w-100" style={{height:"700px", opacity:"0.5"}} alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h1 className='text-danger'>Enjoy big movies, hit series and more from ₹ 149.</h1>
       <h2 className='text-danger'>Join today. Cancel anytime.</h2>
       <h4 className='text-danger'>Ready to watch? Enter your email to create or restart your membership.</h4>
       <input style={{width:"40%", height:"60px", background:"black", color:"white" }} type="text" placeholder='Email address' />
       <button style={{background:"red", height:"60px"}}>Get Started </button>
      </div>
    </div>
  </div>
 
</div>
    </div>
  )
}

export default Crousel
