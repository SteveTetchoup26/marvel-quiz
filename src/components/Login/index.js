import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import auth from '../Firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = (props) => {

    const firebase = useContext(FirebaseContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [btn, setBtn] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        if(password.length > 5 && email !== ''){
            setBtn(true)
        } else if (btn){
            setBtn(false)
        }
    }, [password, email, btn])

    const handleSbumit = e => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            setEmail('')
            setPassword('')
            props.history.push('/welcome')
        })
        .catch(error => {
            setError(error)
            setEmail('')
            setPassword('')
        })
    }

    return (
        <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className='formBoxLeftLogin'>
                        
                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>

                        {error !== '' && <span>{error.message}</span>}

                        <h2>Inscription</h2>
                        <form onSubmit={handleSbumit}>
                            <div className='inputBox'>
                                <input onChange={e => setEmail(e.target.value)} value={email} type='email' required autoComplete='off' />
                                <label htmlFor='email'>Email</label>
                            </div>
                            <div className='inputBox'>
                                <input onChange={e => setPassword(e.target.value)} value={password} type='password' required autoComplete='off' />
                                <label htmlFor='password'>Mot de passe</label>
                            </div>

                            {btn ? <button>Connexion</button> : <button disabled>Connexion</button>}

                        </form>
    
                        <div className='linkContainer'>
                            <Link className='simpleLink' to='/signup'>Nouveau sur Marvel Quiz ? Inscrivez-vous maintenant.</Link>
                            <br />
                            <Link className='simpleLink' to='/forgetpassword'>Mot de passe oublié ?</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
