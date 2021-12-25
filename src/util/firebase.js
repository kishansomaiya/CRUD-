import firebase from 'firebase'

/*const firebaseConfig = {
    apiKey: "AIzaSyAXifEZUnHwK5xoCvVoyEuupn2l2Kk3w9w",
    authDomain: "fir-crud-pep.firebaseapp.com",
    databaseURL: "https://fir-crud-pep-default-rtdb.firebaseio.com/",
    projectId: "fir-crud-pep",
    storageBucket: "fir-crud-pep.appspot.com",
    messagingSenderId: "614751176682",
    appId: "1:614751176682:web:a9f5200669ea00e6155493"
  };*/

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApMurweBnL8jjgZAphNNYfurOuhb_6oGg",
  authDomain: "crud-ffcec.firebaseapp.com",
  databaseURL: "https://crud-ffcec-default-rtdb.firebaseio.com",
  projectId: "crud-ffcec",
  storageBucket: "crud-ffcec.appspot.com",
  messagingSenderId: "275697153444",
  appId: "1:275697153444:web:018009f827a7d024007d31",
  measurementId: "G-P1TSMVNP23"
};
  
  firebase.initializeApp(firebaseConfig);
  
  export default firebase;