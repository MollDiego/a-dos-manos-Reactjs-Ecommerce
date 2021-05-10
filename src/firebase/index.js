import firebase from "firebase/app";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAmPITUM4FfvTxqTRhqDDq9lTiDeJLfi0o",
  authDomain: "a-dos-manos-ecommerce.firebaseapp.com",
  projectId: "a-dos-manos-ecommerce",
  storageBucket: "a-dos-manos-ecommerce.appspot.com",
  messagingSenderId: "337729784456",
  appId: "1:337729784456:web:035cef6c91cb380401ad3d",
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
