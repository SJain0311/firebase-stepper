import {initializeApp} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAOI9gJsW8WGtzP6U92ZGa9TNXvJiOS63k",
  authDomain: "addtocart-65b41.firebaseapp.com",
  projectId: "addtocart-65b41",
  storageBucket: "addtocart-65b41.appspot.com",
  messagingSenderId: "437604571002",
  appId: "1:437604571002:web:2cb3c28aaa0aba2e33a8c3"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth(app);