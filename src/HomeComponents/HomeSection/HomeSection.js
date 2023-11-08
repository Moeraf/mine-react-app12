import React from 'react';
import "./HomeSection.css";
import { Element } from 'react-scroll';

function HomeSection ({children}) {
  return (
    <Element id='home-destination' name='home-destination'>
    <section className="home">
        {children}
    </section>
    </Element>
  )
}

export default HomeSection