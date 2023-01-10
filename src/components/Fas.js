import React from 'react';
import Marquee from 'react-fast-marquee';

//client Images
import client1 from '../images/client/1.png';
import client2 from '../images/client/2.png';
import client3 from '../images/client/3.png';
import client4 from '../images/client/4.png';
import client5 from '../images/client/5.png';
import client6 from '../images/client/6.png';
import client7 from '../images/client/7.png';
import client8 from '../images/client/8.png';
import client9 from '../images/client/9.png';



const Fas = ({ title }) => {
  const projects = [
    {
      id : 0,   
      name: 'Business Card',
      title: 'logo Design',
      image : client1,
      desc: 'this is a logo design for x coompany'
    },
    {
      id : 1, 
      name: 'Etiquette',
      title: 'logo Design',
      image : client2,
      desc: 'this is a logo design for x coompany'
      },
      {
        id : 2, 
        name: 'logo design',
        title: 'logo Design',
        image : client3,
        desc: 'this is a logo design for x coompany'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client4,
        desc : 'this is a way of leading in the market'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client5,
        desc : 'this is a way of leading in the market'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client6,
        desc : 'this is a way of leading in the market'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client7,
        desc : 'this is a way of leading in the market'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client8,
        desc : 'this is a way of leading in the market'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client9,
        desc : 'this is a way of leading in the market'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client7,
        desc : 'this is a way of leading in the market'
      },
      {
        id: 3,
        name: 'Branding',
        title: 'Brand creation',
        image : client5,
        desc : 'this is a way of leading in the market'
      },
      
    ]

  return (
    <>
    <h1 className='title'>{title}</h1>
    <Marquee style={{background: '#fff !important'}}>
      
    <div className='image-container' style={{background: '#fff'}}>
      {projects.map((project, index) => ( 
      <div  key={index} style={{background: '#fff'}}>
      <img src={project.image} alt="" width={100} height={100} />
      </div>
        ))}
    </div>
    </Marquee>
    </>
  
  )
}

Fas.defaultProps = {
  title: 'Our Clients',
}

export default Fas