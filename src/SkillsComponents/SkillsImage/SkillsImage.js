import React from 'react';
import './SkillsImage.css';
import Skills from '../../assets/images/skills.png';


function SkillsImage () {
  return (
    <div className="container-images">
      <img className="img1" src={Skills} alt="" />
    </div>
  )
}

export default SkillsImage;