import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCmkzgR0n5aJ3mkqH9oGDBBYpWXaui1bt0',
  authDomain: 'react-app-cursos-c717d.firebaseapp.com',
  databaseURL: 'https://react-app-cursos-c717d.firebaseio.com',
  projectId: 'react-app-cursos-c717d',
  storageBucket: 'react-app-cursos-c717d.appspot.com',
  messagingSenderId: '321837841344',
  appId: '1:321837841344:web:ad943d35ab163c42ee6625',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auhtGoogleProvider = new firebase.auth.GoogleAuthProvider();

export { db, auhtGoogleProvider, firebase };
