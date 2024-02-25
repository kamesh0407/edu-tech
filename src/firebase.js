import firebase from './firebase';




 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyCs9yNnUE7XBtG74cVavf0vMkBQ_nFxVls",
    authDomain: "edu-tech-ce8d4.firebaseapp.com",
    projectId: "edu-tech-ce8d4",
    storageBucket: "edu-tech-ce8d4.appspot.com",
    messagingSenderId: "33702792838",
    appId: "1:33702792838:web:ff75984b8868d97dc78b07"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;