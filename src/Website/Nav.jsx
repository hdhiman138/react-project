import React from 'react'

const Nav = () => {
    return (
        <div>
            

            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand text-danger" href="#"><h1>NETFLIX</h1></a>


                    <ul class="navbar-nav a">

                       <li className='aa'>
                        <select area-label="small select example ">
                            <option selected>English</option>
                            <option value="1">English</option>
                            <option value="2">Hindi</option>
                            

                        </select>
                       </li>

                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-danger" type="submit">Sign In</button>
                    </form>

                </div>
            </nav>
        </div>
    )
}

export default Nav
