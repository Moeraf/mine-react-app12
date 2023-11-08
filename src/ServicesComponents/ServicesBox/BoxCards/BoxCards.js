import React, {useContext, useEffect, useState} from 'react';
import './BoxCards.css';
import pro from'../../../assets/images/pro.ico';
import {UserContext} from '../../../ContextAll/UserContext';

import firebase from '../../../firebase';

function BoxCards () {
  const {UserOne} = useContext(UserContext)
  const {UserTwo} = useContext(UserContext)
  const {UserThree} = useContext(UserContext)
  const {UserFour} = useContext(UserContext)

  const[Headers, setHeaders] = useState([]);
  const [Loading, setLoading] = useState(false)


  const ref = firebase.firestore().collection("Headers");

  function getHeaders(){
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setHeaders(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getHeaders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <>

    {Headers.map((header) => (
      <div className="card" key={header.id}>
          <img src={pro}alt="" />
          <h5>{header.title}</h5>
          <p>{header.content}</p>
      </div>
        ))}

    {/* <div className="card">
        <img src={pro}alt="" />
        <h5>Creating some small project</h5>
        <p>{UserTwo}</p>
    </div>

    <div className="card">
        <img src={accountant}alt="" />
        <h5>Work as Accountant </h5>
        <p>{UserThree}</p>
    </div>

    <div className="card">
        <img src={projects}alt="" />
        <h5>React App Project</h5>
        <p>{UserFour}</p>
    </div> */}
  </>
  )
}

export default BoxCards