import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";





const firebaseConfig = {
  apiKey: "AIzaSyCuvjW56rEx1R4vgkuNxOtzly97v1p2c-A",
  authDomain: "shoppy-f567b.firebaseapp.com",
  projectId: "shoppy-f567b",
  storageBucket: "shoppy-f567b.appspot.com",
  messagingSenderId: "981605055375",
  appId: "1:981605055375:web:1a9372ffc46d3fd196a9fa",
};

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)

// Create a root reference
export const storage = getStorage(app);

