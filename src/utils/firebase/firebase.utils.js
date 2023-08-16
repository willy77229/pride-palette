import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA0lFMxtwO98nDGDQcFTu1mwDdIsqD65GE",
    authDomain: "pride-palette-db.firebaseapp.com",
    projectId: "pride-palette-db",
    storageBucket: "pride-palette-db.appspot.com",
    messagingSenderId: "931494335350",
    appId: "1:931494335350:web:19bb0c72ecd12f08bde057"
};
  
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.user.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot)
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth.user;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        } catch (err) {
            console.log('error creating the user', err)
        }
    }

    return userDocRef;
};

  