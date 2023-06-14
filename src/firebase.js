import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCzxcYZrdgUe-53nXuLBfo0Xmygwbojw54",
    authDomain: "disneyplus-clone-dd6a6.firebaseapp.com",
    projectId: "disneyplus-clone-dd6a6",
    storageBucket: "disneyplus-clone-dd6a6.appspot.com",
    messagingSenderId: "57568826876",
    appId: "1:57568826876:web:81d0b0618fb85ef9048e79",
    measurementId: "G-9W09C0EV0E"
  };
  

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
