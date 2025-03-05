import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
 

        <div className='navbar'>
           <Link to='/menu'> <p className='menu'>Menu</p></Link>
            <Link to='/classes'> <p className='classes'>Classes</p></Link>
           <Link to='/contact'><p className='contact'>Contact</p></Link>
           <p className='booktable'> <Link to='/bookatable'>BOOK A TABLE</Link></p>
        </div>

  
    
  )
}

export default Navbar