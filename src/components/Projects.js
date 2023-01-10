import React from 'react';
import { useState } from 'react';
import Modal from './Modal';

//brands Images
import Sunah from '../images/Logo-SUNNAH-Hs.jpg';
import cart from '../images/sunnahCards.jpg';
import etiquette from '../images/etiqutteSunnah.jpg'
import etiquetteRondSunah from '../images/Etiquettes-rond-SUNNAH.jpg';
import mariposa from '../images/brand/mariposa.png';
import mariposaEtiquette from '../images/brand/mariposa-ettiquette.png';
import guapita from '../images/brand/Guapita.jpg';
import guapitaBusinessCard from '../images/brand/guapita-business-card.png';
import guapitaPackaging from '../images/brand/Guapita-Plastic-Pouch-Packaging.jpg';
import invitation from '../images/brand/invitation.jpg';
import flyer from '../images/brand/flyer.jpg';
import etiquetteCaree from '../images/brand/etiquette-caree.jpg';
import mockups from '../images/brand/mockups.jpg';
import brand from '../images/brand/brand.jpg';

// logo images
import art from '../images/logo/art.png';
import delices from '../images/logo/delices.png';
import delysDeRym from '../images/logo/delysDeRym.jpg';
import flatDesign from '../images/logo/flat-design.png';
import salvaDelivery from '../images/logo/Flyer_Mockup_salva delivery.png';
import gourmandise from '../images/logo/Gourmandise.jpg';
import logo from '../images/logo/logo.jpg';
import nassaem from '../images/logo/Nassaem.jpg';
import speedy from '../images/logo/speedyFlyer.jpg';
import sushiMe from '../images/logo/sushiMe.png';
import womanFace from '../images/logo/womanFace.png';


const Projects = () => {
  
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const isOpen = (event) =>{
          setModal(!modal);
          setIndex(event.currentTarget.dataset.index);
          
        };
      
  const projects = [
      {
        id : 0,   
        name: 'BRANDS',
        title: 'logo Design',
        image : [brand, Sunah, cart, etiquette, etiquetteRondSunah],
        desc: 'this is a logo design for x coompany'
      },
      {
        id : 1, 
        name: 'LOGO DESIGN',
        title: 'logo Design',
        image : [logo, nassaem,sushiMe,gourmandise],
        desc: 'this is a logo design for x coompany'
        },
        {
          id : 2, 
          name: 'ART DESIGN',
          title: 'logo Design',
          image : [Sunah, Sunah, etiquette],
          desc: 'this is a logo design for x coompany'
        },
        {
          id: 3,
          name: 'SOCIAL MEDIA',
          title: 'Brand creation',
          image : [Sunah, Sunah, Sunah],
          desc : 'this is a way of leading in the market'
        }

    ]
    const { image, id, name, desc } = projects;
  return (
    <div className='pCt'  style={{marginBottom:"10rem"}} onClick= {(e) => console.log('clicked')}>
      <h1 className='title'>My work</h1>
      <div className='project-container' id='projects'>
        
          {projects.map((project, index) => (
            <div className="project-card" key={index} onClick={isOpen} data-index={index}>
              <div className='project-card-content'>
              <img src={project.image[0]} alt="this is a logo" className='project-image' />
              <h3 className='project-name'>{project.name}</h3>
              </div>
            </div>

          ))}

        
      </div>
      
        <Modal onModal={modal} projects={projects} isOpen={isOpen} index={index}></Modal>
      
    </div>
  )
}

export default Projects