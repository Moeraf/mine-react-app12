import React from 'react';
import './AboutSection.css';
import { Element } from 'react-scroll';

function AboutSection ({children}) {
  return (
    <Element id='about-destination' name='about-destination'>
    <section className="about-me">{children}</section>
    </Element>
  )
}

export default AboutSection