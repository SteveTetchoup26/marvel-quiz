import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext} from '../Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import auth from '../Firebase/firebase'
import {db} from '../Firebase/firebase'
import { collection, getDocs, addDoc, doc } from 'firebase/firestore'





const SignUp = (props) => {


    const firebase = useContext(FirebaseContext)

    const data = {
        pseudo: '',
        email: '',
        password: '',
        confirmPassword: ''
    }

    const [loginData, setLoginData] = useState(data)
    const [error, setError] = useState('')

    const handleChange = e => {
        setLoginData({...loginData, [e.target.id]: e.target.value})
    }

    const handleSbumit = e => {
        e.preventDefault()
        const {email, password, pseudo} = loginData

        createUserWithEmailAndPassword(auth, email, password)
        /*.then(authUser => {
            return db.doc(`users/${authUser.user.uid}`).set({
                pseudo,
                email
            })
        })*/
        .then (authUser => {
            const docRef = addDoc(collection(db, `${authUser.user.iud}`), {
                pseudo,
                email
            })
            return docRef
        })
        .then(() => {
            setLoginData({...data})
            //history.push('/welcome')
        })
        .catch(error => {
            setError(error)
            setLoginData({...data})
        })
    }

    const {pseudo, email, password, confirmPassword} = loginData

    const btn = pseudo === '' || email === '' || password === '' || password !== confirmPassword ? <button disabled>Inscription</button> : <button>Inscription</button>
    
    //gestion des erreurs

    const errorMsg = error !== '' && <span>{error.message}</span>
    
    return (
        <div className='signUpLoginBox'>
            <div className='slContainer'>
                    <div className='formBoxLeftSignup'>
                        
                    </div>
                    <div className='formBoxRight'>
                        <div className='formContent'>

                            {errorMsg}

                            <h2>Inscription</h2>
                            <form onSubmit={handleSbumit}>
                                <div className='inputBox'>
                                    <input onChange={handleChange} value={pseudo} type='text' id='pseudo' required autoComplete='off' />
                                    <label htmlFor='pseudo'>Pseudo</label>
                                </div>
                                <div className='inputBox'>
                                    <input onChange={handleChange} value={email} type='email' id='email' required autoComplete='off' />
                                    <label htmlFor='email'>Email</label>
                                </div>
                                <div className='inputBox'>
                                    <input onChange={handleChange} value={password} type='password' id='password' required autoComplete='off' />
                                    <label htmlFor='password'>Mot de passe</label>
                                </div>
                                <div className='inputBox'>
                                    <input onChange={handleChange} value={confirmPassword} type='password' id='confirmPassword' required autoComplete='off' />
                                    <label htmlFor='confirmPassword'>Confimer le mot de passe</label>
                                </div>
                                {btn}
                            </form>

                            <div className='linkContainer'>
                                <Link className='simpleLink' to='/login'>Déjà inscrit ? Connectez-vous.</Link>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SignUp
