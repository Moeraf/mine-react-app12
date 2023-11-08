import React from 'react';
import './ContentSkills.css';
import react from '../../../../assets/images/react.png';
import api from '../../../../assets/images/api.png';
import js from '../../../../assets/images/js.png'
import nodejs from '../../../../assets/images/nodejs.png'
import docker from '../../../../assets/images/docker.png';
import socketio from '../../../../assets/images/socketio.png';
import git from '../../../../assets/images/git.png'
import github from '../../../../assets/images/github.png'
import database from '../../../../assets/images/database.png'
import firebase from '../../../../assets/images/firebase.png'
// import ContentHead from '../ContentHead/ContentHead'

const ContentSkills = () => {
  return (
    <>
    <div className="skill">
      <img src={react}alt="" />
    </div>

    <div className="skill">
      <img src={api}alt="" />
    </div>

    <div className="skill">
      <img src={js}alt="" />
    </div>

    <div className="skill">
      <img src={nodejs}alt="" />
    </div>

    <div className="skill">
      <img src={docker}alt="" />
    </div>

    <div className="skill">
      <img src={socketio}alt="" />
    </div>

    <div className="skill">
      <img src={git}alt="" />
    </div>

    <div className="skill">
      <img src={github}alt="" />
    </div>

    <div className="skill">
      <img src={database}alt="" />
    </div>

    <div className="skill">
      <img src={firebase}alt="" />
    </div>
    </>
    
  )
}

export default ContentSkills;