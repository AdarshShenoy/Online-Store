import {initializeApp} from 'firebase/app';
import {getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDv02enhmmpyhUlnA7zFdt3kaSBWsBtR_c",
    authDomain: "online-store-113fb.firebaseapp.com",
    projectId: "online-store-113fb",
    storageBucket: "online-store-113fb.appspot.com",
    messagingSenderId: "322766826350",
    appId: "1:322766826350:web:00518ea97284cce59aef7f"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if(!userSnapshot.exists()){
      const {displayName, email} = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(userDocRef, {
          displayName, email, createdAt
        });
      }catch(error){
        console.log('Error creating the user', error.message);
      } 
    }

    return userDocRef;
}