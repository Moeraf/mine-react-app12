import React from 'react';
import './FooterContainer.css';

function FooterContainer (WrappedContainer) {
  return (()=>(
    <div className="container-footer"><WrappedContainer /></div>
  )
  )
}

export default FooterContainer