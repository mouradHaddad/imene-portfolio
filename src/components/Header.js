import React from 'react'
import Navbar from './Navbar'
import Imene from '../images/imene.jpg';
import * as AiIcons from 'react-icons/ai';
import { FaBars, FaAddressCard, FaProjectDiagram, FaAddressBook } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import { useState } from 'react';
const Header = () => {
  const [button, setButton] = useState(false);
  const btnOpen = document.querySelector('.menuBtn');
  const btnClose = document.querySelector('.menuBtnX');
  

function handleMenu(e){
  console.log(e)
  const hamMenu = document.querySelector('.n');
  hamMenu.classList.toggle('hamburgerNavBar');
  hamMenu.classList.toggle('dispMenu'); 
  setButton(!button);
  
}

  return (
    <div className='header' id='home'>
        <div className="normalMenu">
        <section className='profile-nav'>
          <div>
            <h2>Graphic Designer</h2>
            <p className='icons'>
              <AiIcons.AiFillInstagram  />
              <AiIcons.AiOutlineTwitter />
              <AiIcons.AiFillBehanceCircle href='https://www.behance.net/eman' />  
            </p>
          </div>
          
        </section>
        <section className='profile-ph'>
        <Navbar></Navbar>
        </section>
        </div>
        <div className="hamNavbar">
          <div className="titleMenu" >
            <div>
              <h3>Graphic Designer</h3>
              <p className='icons'>
                <AiIcons.AiFillInstagram  />
                <AiIcons.AiOutlineTwitter />
                <AiIcons.AiFillBehanceCircle href='https://www.behance.net/eman' />  
              </p>
            </div>
            <div onClick={handleMenu} >
              <div className='open'>
                  {button ? <AiIcons.AiOutlineClose /> : <FaBars />}
              </div>
            </div>
          </div>
          <div className="hamMenu">
          <div className='hamburgerNavBar n'>
            <ul>
                <li>
              <Link to='#home'><AiIcons.AiFillHome /> Home</Link>
                </li>
                <li>
                <Link to='#about'><FaAddressCard /> About</Link>
                </li>
                <li>
                <Link to='#projects'><FaProjectDiagram /> Projects</Link>
                </li>
                <li>
                <Link to='#contact'><FaAddressBook /> Contact</Link>
                </li>
            </ul>
          </div>
          </div>
          
        </div>

    </div>
  )
}

export default Header