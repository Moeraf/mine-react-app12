import React from 'react';
import './FooterSection.css';
import { Element } from 'react-scroll';

function FooterSection ({children}) {
  return (
    <Element id='contact-destination' name='contact-destination'>
    <section className="footer">{children}</section>
    </Element>
  )
}

export default FooterSection;