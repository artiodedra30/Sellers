
// Import the functions you need from the SDKs you need

const {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} = require('firebase/auth')

const { initializeApp } = require("firebase/app");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyD2x_UMTT9zAFgY-Ja9TMc1wxLTDDpwq7c",
 authDomain: "sellers-626f3.firebaseapp.com",
 projectId: "sellers-626f3",
 storageBucket: "sellers-626f3.appspot.com",
 messagingSenderId: "338613851535",
 appId: "1:338613851535:web:58a1358aee1e109a37a7fa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

let signin = async(email, password) => {
 let reply = null
 await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
 const user = userCredential.user
 console.log(user.email, "signed in");
 reply = {code: "Success", message: user.email}
 }).catch(error => {
  console.log(Object.getOwnPropertyNames(error) + " : " + error.message + " From Firebase");
  reply = {code: "error", message: error.code}
 });
 return reply
}

let signup = async(email, password) => {
 let reply = null
 await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
  user = userCredential.user
  reply = {code:"Success", message: user.email}
  console.log("Registered Successfully");
   }).catch(error => {
    console.log("Registration Error");
      console.log(Object.getOwnPropertyNames(error) + " : " + error.message + " From Firebase");
  reply = {code: "error", message: error.code}

   });
   return reply
}

module.exports = {signin, signup}

