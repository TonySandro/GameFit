const firebase = require('firebase').default;

var firebaseConfig = {
  apiKey: "AIzaSyAsg1NaEYzq_noxEyQAdWcxxJT2DOr5ef0",
  authDomain: "hmranking.firebaseapp.com",
  projectId: "hmranking",
  storageBucket: "hmranking.appspot.com",
  messagingSenderId: "998775467215",
  appId: "1:998775467215:web:9e8658ca89ce91fa7f1bba",
  measurementId: "G-VV88FMMBLR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports = firebase