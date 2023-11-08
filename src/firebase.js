import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmwUl-_YmifDmMnjsFIuTp3_N9pR2MUKs",
    authDomain: "mine-react-database-2fc07.firebaseapp.com",
    projectId: "mine-react-database-2fc07",
    storageBucket: "mine-react-database-2fc07.appspot.com",
    messagingSenderId: "815000734776",
    appId: "1:815000734776:web:292afdb8a574452c5feacd",
    measurementId: "G-BZQNV0RKGT"
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;