import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
// import { seedDatabase } from "../seed"; //donote uncomment it at any conditions
//we need to somehow seed the database

//we need a config here

const config = {
  apiKey: "AIzaSyBT8LiEfoC1gVtV_Z4mQnrkbrje1bZZt0A",
  authDomain: "netflix-679ea.firebaseapp.com",
  projectId: "netflix-679ea",
  storageBucket: "netflix-679ea.appspot.com",
  messagingSenderId: "383475790094",
  appId: "1:383475790094:web:d1ca136266684c1c80a75f",
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };
