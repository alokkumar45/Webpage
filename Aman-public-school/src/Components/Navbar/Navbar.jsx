import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div>
      <nav className='container'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li>Home Page</li>
            <li>Gallery</li>
            <li>Adimissions</li>
            <li>Academics</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
