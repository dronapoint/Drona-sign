import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA5nEURi_rJd_w-IGf6_tucjAhWkXxJzxM",
    authDomain: "drona-sign.firebaseapp.com",
    databaseURL: "https://drona-sign.firebaseio.com",
    projectId: "drona-sign",
    storageBucket: "drona-sign.appspot.com",
    messagingSenderId: "214647349680",
    appId: "1:214647349680:web:62fdb561a550b0f7"
  };

  class Firebase {
      constructor() {
          app.initializeApp(config);

          this.auth = app.auth();
          this.db = app.database(); 
      }
  
        // *** Auth API ***

        doCreateUserWithEmailAndPassword = (email, password) => this.auth.createUserWithEmailAndPassword(email, password);

        doSignInWithEmailAndPassword = (email, password) => this.auth.signInWithEmailAndPassword(email, password); 

        doSignOut = () => this.auth.signOut(); 

        doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

        doPasswordUpdate = password => this.auth.currentUser.updatePassword(password); 
  
        user = uid => this.db.ref(`users/${uid}`);

        users = () => this.db.ref('users');
  
    }
  
export default Firebase; 

