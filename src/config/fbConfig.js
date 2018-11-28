import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
var config = {
  apiKey: "AIzaSyC1HO7-IrlugCBJJ-SMtC-nom6CMYEvNJ0",
  authDomain: "fastn-form.firebaseapp.com",
  databaseURL: "https://fastn-form.firebaseio.com",
  projectId: "fastn-form",
  storageBucket: "fastn-form.appspot.com",
  messagingSenderId: "246326543148"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 