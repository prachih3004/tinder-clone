import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyB-FJMAekDTMXdzGAuPHEaxytl0_ChwF84",
  authDomain: "tinder-clone-eb039.firebaseapp.com",
  databaseURL: "https://tinder-clone-eb039.firebaseio.com",
  projectId: "tinder-clone-eb039",
  storageBucket: "tinder-clone-eb039.appspot.com",
  messagingSenderId: "654963150678",
  appId: "1:654963150678:web:0ec9dbfef84f035b6390f7",
  measurementId: "G-BP7EE6JJSD"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const database=firebaseApp.firestore();

export default database;