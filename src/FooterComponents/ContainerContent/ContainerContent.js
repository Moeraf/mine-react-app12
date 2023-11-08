import React from 'react';
import './ContainerContent.css';
import FooterContainer from '../FooterContainer/FooterContainer';
import whatsapp from '../../assets/images/whatsapp.png'


function ContainerContent () {
  return (
    <>
    <h2>Thank you for read</h2>
    <p>for more info please contact me via whatsapp  for a fast connection</p>
    <img className="fa-brands" src={whatsapp} alt="" />
    <p className="final" >creating by MOUEMEN RAFEI</p>
    </>
  )
}

export default FooterContainer(ContainerContent);