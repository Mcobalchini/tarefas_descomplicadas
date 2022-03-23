import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDHRGoN0w9TB8AydO14UpFz5b6kFYjFgnY",
    authDomain: "projeto-descomplica-8236d.firebaseapp.com",
    projectId: "projeto-descomplica-8236d",
    storageBucket: "projeto-descomplica-8236d.appspot.com",
    messagingSenderId: "702171853151",
    appId: "1:702171853151:web:6c12ef035b96269a7d86ea",
    measurementId: "G-RSCTGHL0R3"
};


export default class FirebaseIntegration {
    constructor(callback) {
        this.initialize(callback);
    }

    initialize(callback) {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig)
        }

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                callback(null, user);
            } else {
                firebase.auth().signInAnonymously().catch(error => {
                    callback(error);
                });
            }
        });
    }

    get userId() {
        return firebase.auth().currentUser.uid;
    }

    get reference() {
        return firebase.firestore().collection('users').doc(this.userId).collection('toDoList');
    }

}
