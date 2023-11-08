import React from 'react';
import './AboutImage.css';
import code from '../../assets/images/code.png'

function AboutImage () {
  return (
    <div className="container-images">
      <img className="img1" src={code} alt="" />
    </div>
  )
}

export default AboutImage