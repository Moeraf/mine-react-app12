import React from 'react';
import './Graduate.css';
import { useNavigate } from 'react-router-dom';


function Graduate () {
    const navigate = useNavigate();
    const CloseButton = ()=>{
        navigate('/')
    }
  return (
    <>
        <button onClick={()=>{CloseButton()}} className="btn" id="dwn" style={{"marginLeft": "10px", "transition": "0.3s"}}>Close</button>
    </>
  )
}

export default Graduate