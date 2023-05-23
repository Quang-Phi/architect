import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA6pMl9IuBC5Bx6b87tUoz2UsOSfr1rLbw",
  authDomain: "architect-54f32.firebaseapp.com",
  projectId: "architect-54f32",
  storageBucket: "architect-54f32.appspot.com",
  messagingSenderId: "98445072797",
  appId: "1:98445072797:web:82d9183633efabdaecf774",
  measurementId: "G-ZVHJJ1B9TY"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);