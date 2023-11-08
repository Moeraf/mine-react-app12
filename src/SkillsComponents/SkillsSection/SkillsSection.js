import React from 'react';
import './SkillsSection.css';
import { Element } from 'react-scroll';


function SkillsSection ({children}) {
  return (
    <Element id='skills-destination' name='skills-destination'>
    <section className="skills">
        {children}
    </section>
    </Element>
  )
}

export default SkillsSection