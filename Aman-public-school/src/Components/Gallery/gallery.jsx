import React from 'react'
import './Gallary.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
const Gallery = () => {
  return (
    <div className='gallarys'>
      <div className="grallery">
        <img src={program_1} alt="" />
      </div>
       <div className="grallery">
        <img src={program_2} alt="" />
      </div>
       <div className="grallery">
        <img src={program_3} alt="" />
      </div>
    </div>
  )
}

export default Gallery