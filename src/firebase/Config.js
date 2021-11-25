import firebase from 'firebase'
import  'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAbljKaoUoV0MTt0QBW3C3-aCBvN0m2niw",
  authDomain: "test-for-react-ff934.firebaseapp.com",
  projectId: "test-for-react-ff934",
  storageBucket: "test-for-react-ff934.appspot.com",
  messagingSenderId: "545586974828",
  appId: "1:545586974828:web:a1761e3a74aae4d4250849",
  measurementId: "G-RJ9PBX8XBB"
};
  export default firebase.initializeApp(firebaseConfig)