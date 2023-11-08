import React from 'react';
import './ServicesSection.css';
import { Element } from 'react-scroll';

function ServicesSection ({children}) {
  return (
    <Element id='services-destination' name='services-destination'>
    <section className="services">
      {children}
    </section>
    </Element>
  )
}

export default ServicesSection