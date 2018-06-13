import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyClqubbqyvGw2kqICE3ajwu-vGaagxt2rs',
  authDomain: 'lunch-rush-bac24.firebaseapp.com',
  databaseURL: 'https://lunch-rush-bac24.firebaseio.com',
  projectId: 'lunch-rush-bac24',
  storageBucket: 'lunch-rush-bac24.appspot.com',
  messagingSenderId: '706133641228'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
