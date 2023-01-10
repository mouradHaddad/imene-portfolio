import React, { useState } from 'react'
import ReactDOM  from 'react-dom';


const Modal = ({ isOpen, projects, onModal, index, project }) => {

  const [secondIndex, setSecondIndex] = useState(0);
  if(!onModal) return null
  return ReactDOM.createPortal (
    <div className='modal' width={100} height={100}>
        <div className='overlay'onClick={isOpen}>
          <div className='modal-content'>
            <div className='image-container' key={index}>
              {console.log(projects[index].image[secondIndex])}
              <img src={projects[index].image[secondIndex]} alt="this is an image" className='project-image'  height={'100vh'} />
            </div>
            <div className="small-images-container">
                {projects[index].image?.map((item, i) => (
              <img 
                key={i}
                src={item}
                className={i === secondIndex ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setSecondIndex(i)}
              />
                ))}
            </div>
              <h3 className='project-name'>{projects[index].name}</h3>
              <div className='project-desc' onClick={isOpen}>{projects[index].desc}</div>
          </div>
        </div>
      </div>,
      document.getElementById('portal')
  )
}
export default Modal;