import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAsoJw5bdZfRlknCT8BdXY0TMRhZ6_2N64",
    authDomain: "dobeeroom.firebaseapp.com",
    projectId: "dobeeroom",
    storageBucket: "dobeeroom.appspot.com",
    messagingSenderId: "380240636279",
    appId: "1:380240636279:web:f997792a1fc7c695ded972",
    measurementId: "G-JNGSS0TKHG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

export { auth };