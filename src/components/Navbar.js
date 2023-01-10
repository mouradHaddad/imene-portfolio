import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';
 
const Navbar = () => {
  return (
    <div className='navBar'>
        <ul>
            <li>
           <Link to='#home'>Home</Link>
            </li>
            <li>
            <Link to='#about'>About</Link>
            </li>
            <li>
            <Link to='#projects'>Projects</Link>
            </li>
            <li>
            <Link to='#contact'>Contact</Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar