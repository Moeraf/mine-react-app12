import React from 'react';
import './TheContainer.css';

function TheContainer ({children}) {
  return (
    <div className="container-skills">{children}</div>
  )
}

export default TheContainer