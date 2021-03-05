import firebase from 'firebase';
require("firebase/firestore");

var firebaseConfig = {
    apiKey: "AIzaSyA7OIOZJsg_-sqzbKDeIXwA4HKzFAJ63p8",
    authDomain: "vue-shop-893d6.firebaseapp.com",
    projectId: "vue-shop-893d6",
    storageBucket: "vue-shop-893d6.appspot.com",
    messagingSenderId: "476578607572",
    appId: "1:476578607572:web:5489b290e5bcb62124a641",
    measurementId: "G-4QZD5DMCR5"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { fb, db }
firebase.analytics();