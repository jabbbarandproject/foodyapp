import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='navbar-main'>
      <div className='navbar-links'>
      <ul>
          <li>Community</li>
          <li>Books</li>
          <li>Recipe Index</li>
          <li>Popular</li>
        </ul>
      </div>
      <div className="auth-links">
           <div className='auth-links-img-part'>
            <img style={{
                width:'13px',
                height:'10px'
            }} src="/Images/reg.svg" />
            <p>Register</p>
            </div>
            <div className='auth-links-img-part'>
            <p>Login</p>
            <img style={{
                width:'10px',
                height:'10px'
            }} src="/Images/login.svg" />
            </div>
        </div>
    </div>
    <div className='all-catagories-main'>
    <img className='Cookpallogo'
          src="/Images/Cookpallogo.svg" 
          alt="Logo"
        />
        <div className='all-catagories'>
            <div className='searc-all'>
            <button>All Categories</button>
            <p>Search</p>
            </div>
            <div className='search-icon-for'>
                <img src='/Images/searchicon.svg'/>
            </div>
        </div>
    </div>
    <div className="hero-image">
        <img src="/Images/HeroBackground.svg" alt="Food Diary" />
        <div className="hero-text">
          <h1>Food Diary</h1>
        </div>
      </div>
       <div className='border-part-line'>
        <div className='k-line'>

        <img src='/Images/lin.svg'/>
        </div>
      <div className='border-part'>
       <ul>
       <li>Home </li>
       <li>Explore</li>
       <li>Help</li>
       <li>Profile</li>
       </ul> 
      </div>
      <div className='k-line'>

      <img  src='/Images/lin.svg'/>
      </div>
      </div>
    </>
  )
}

export default Navbar
