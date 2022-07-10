import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDqo5YsZQFr5V6gyK5xj2OusukI7te3X2o",
    authDomain: "olxclone-6f0b4.firebaseapp.com",
    projectId: "olxclone-6f0b4",
    storageBucket: "olxclone-6f0b4.appspot.com",
    messagingSenderId: "134963548619",
    appId: "1:134963548619:web:18f045228f17a6a037664e",
    measurementId: "G-MF2SNMJHGM"
  };


export default firebase.initializeApp(firebaseConfig)