import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiFillBehanceCircle } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='footer-container'>
      <p>Imene Graphic Design all rights reserved </p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />
        <AiFillBehanceCircle />  
      </p>
    </div>
  )
}

export default Footer