import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBSMAvVzwUqsQ7Qg-DAhNepTZdg28JfOYU",
        authDomain: "clone-b681e.firebaseapp.com",
        databaseURL: "https://clone-b681e.firebaseio.com",
        projectId: "clone-b681e",
        storageBucket: "clone-b681e.appspot.com",
        messagingSenderId: "540527838191",
        appId: "1:540527838191:web:e2458b73506c6550876c1a",
        measurementId: "G-6549EZNPHD"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
export{db,auth}