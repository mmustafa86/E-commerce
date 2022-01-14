import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//api
const config = {
    apiKey: "AIzaSyDdk1XjYjUecHPhCUKK_k9ZM4SfA-HiE1U",
    authDomain: "crwn-db-cbf02.firebaseapp.com",
    projectId: "crwn-db-cbf02",
    storageBucket: "crwn-db-cbf02.appspot.com",
    messagingSenderId: "206703235662",
    appId: "1:206703235662:web:3103b35261fdbc4161291f"
  };

  firebase.initializeApp(config);


  export const auth=firebase.auth();

  export const firestore=firebase.firestore();

  const provider =new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account' });

  export const signInWithGoole =()=>auth.signInWithPopup(provider);

  export default firebase;