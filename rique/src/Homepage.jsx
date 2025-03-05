import React from 'react'
import homepng from './assets/home.png'
import Navbar from './Navbar'
import './App.css'


function Homepage() {
  return (
    <section className='page-container'>
        <p className='logo'>rique.</p>

        <div className='homebgd'> 
            <img src={homepng} className='homeimg'></img>
        </div>

        <div className='homecontent'>
            <p className='header'>The pure taste of</p>
            <h1>Thailand</h1>
            <p className='tagline'> A Royal Thai Affair to discover the authentic flavors of Tradition</p>
        </div>

        <Navbar/>


    </section>
  )
}

export default Homepage