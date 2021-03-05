import  firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDdzVpuJCUd9n2r-EcySaL81Ah3dGFte1A",
  authDomain: "crud-de975.firebaseapp.com",
  projectId: "crud-de975",
  storageBucket: "crud-de975.appspot.com",
  messagingSenderId: "133424043483",
  appId: "1:133424043483:web:a21346f349a82df88d43fe"
  };

 var fireDb = firebase.initializeApp(firebaseConfig);


export default fireDb.database().ref();