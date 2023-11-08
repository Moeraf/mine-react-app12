import React from 'react';
import './ContentHead.css';
import ContentSkills from '../ContentSkills/ContentSkills';

const ContentHead = ({children})=> {
  return (
    <div className="content-skills">
        <ContentSkills />
    </div>
  )
}

export default ContentHead;