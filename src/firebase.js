import * as firebase from 'firebase';
//insert config from firebase
const config = {
    apiKey: "AIzaSyCT8Pxyz921Texl2iCiLLProMHvWOmi8KI",
    authDomain: "info-8675f.firebaseapp.com",
    databaseURL: "https://info-8675f.firebaseio.com",
    projectId: "info-8675f",
    storageBucket: "info-8675f.appspot.com",
    messagingSenderId: "222039289094",
    appId: "1:222039289094:web:df46f6f24021afcfa28287",
    measurementId: "G-EKZKHX58YS"
   
};
firebase.initializeApp(config);

const storage = firebase.storage();

export {
    storage, firebase as default
}