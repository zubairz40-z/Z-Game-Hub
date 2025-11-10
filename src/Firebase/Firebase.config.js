// src/firebaseconfig.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDOC6w-91PALySJmAdfBKng-AFQqBPJu0",
  authDomain: "z-dragon-news.firebaseapp.com",
  projectId: "z-dragon-news",
  // TIP: if Storage errors later, change to "z-dragon-news.appspot.com"
  storageBucket: "z-dragon-news.firebasestorage.app",
  messagingSenderId: "964952475277",
  appId: "1:964952475277:web:67866f61ba77b39a5ec4c4"
};

const app = initializeApp(firebaseConfig);

// ✅ named exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// optional default
export default app;
