import {initializeApp} from 'firebase/app'
import { getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCpOdWRudahXXGCS3HsZGazb3Pk9_kWFeQ",
    authDomain: "marvel-quiz-85811.firebaseapp.com",
    projectId: "marvel-quiz-85811",
    storageBucket: "marvel-quiz-85811.appspot.com",
    messagingSenderId: "59881884907",
    appId: "1:59881884907:web:c70ad5c15f2cc43bf502ae"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

const db = getFirestore(app)

/*class Firebase {

    
    constructor() {
        ;
    }

    //inscription
    SignupUser = (email, password) => {
       createUserWithEmailAndPassword(email, password)
    }

    //connexion
    LoginUser = (email, password) => {
        signInWithEmailAndPassword(email, password)
    }

    //deconnexion
    SignOutUser = () => this.auth.signOut()

    //Récupération du mot de passe 
    PasswordReset = email => sendPasswordResetEmail(email)
}*/

export default auth
export {db}
