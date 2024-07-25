import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDUXhRNs1xCiPH9g1Mn47mz4CapceSpuZo',
  authDomain: 'kpleje-8038d.firebaseapp.com',
  projectId: 'kpleje-8038d',
  storageBucket: 'kpleje-8038d.appspot.com',
  messagingSenderId: '350429304917',
  appId: '1:350429304917:web:50b9cd83f839fcb5179cdc',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
