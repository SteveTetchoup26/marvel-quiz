import React, { Fragment, useState, useContext, useEffect } from 'react'
import Logout from '../Logout'
import Quiz from '../Quiz'
import { FirebaseContext } from '../Firebase'
//import { Firebase } from '../Firebase'
import {onAuthStateChanged} from "firebase/auth";
import auth from '../Firebase/firebase';
import { doc, getDoc, addDoc, collection } from 'firebase/firestore';
import { db } from '../Firebase/firebase';



const Welcome = (props) => {

    //const fire = new Firebase()

    const [userSession, setUserSession] = useState(null)
    const [userData, setUserData] = useState(null)
    //const firebase = useContext(FirebaseContext)

    useEffect(() => {
        let listener = onAuthStateChanged(auth, user => {
            user ? setUserSession(user) : props.history.push('/')
        })

        if(!!userSession) { //equivaut a userSession !== null
            const docRef = addDoc(collection(db, `${userSession.uid}`))
            const docSnap = getDoc(docRef)
            .get()
            .then(() => {
                if(docSnap.exists()) {
                    const myData = docSnap.data()
                    setUserData(myData)
                }
            })
            .catch()
        }

        return () => {
            listener()
        }
    }, [userSession])

    return userSession === null ? (
        <Fragment>
            <div className='loader'></div>
            <p className='loaderText'>Loading...</p>
        </Fragment>
    ) : (
        <div className='quiz-bg'>
            <div className='container'>
                <Logout /> 
                <Quiz userData={userData} />
            </div> 
        </div>
    )

}

export default Welcome
