// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDCP6gSfQEbVPzVJDiT4ztUJevpCfHSykQ",
    authDomain: "clone-51973.firebaseapp.com",
    projectId: "clone-51973",
    storageBucket: "clone-51973.appspot.com",
    messagingSenderId: "378510621501",
    appId: "1:378510621501:web:c569e7a5b1b0b9b8f6e354",
    measurementId: "G-XBCEQMBGWN"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebase.auth()

  export { db, auth }