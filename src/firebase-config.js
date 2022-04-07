/* eslint-disable linebreak-style */
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyA9stu1aAj-Whfin-FyNhWzSyYxL3-EKis',
  authDomain: 'blog-website-react-11f72.firebaseapp.com',
  projectId: 'blog-website-react-11f72',
  storageBucket: 'blog-website-react-11f72.appspot.com',
  messagingSenderId: '1043926426735',
  appId: '1:1043926426735:web:ef7120c3b1122bb61e999a',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
