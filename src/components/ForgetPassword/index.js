import React, {useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FirebaseContext } from '../Firebase'
import { sendPasswordResetEmail} from "firebase/auth";
import auth from '../Firebase/firebase';

const ForgetPassword = props => {

    const firebase = useContext(FirebaseContext)

    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(null)
    const [error, setError] = useState(null)


    const handleSbumit = e => {
        e.preventDefault()
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setError(null)
            setSuccess(`Consultez votre email ${email} pour changer le mot de passe.`)
            setEmail('')

            setTimeout(() => {
                props.history.push('/login')
            }, 5000);
        })
        .catch(error => {
            setError(error)
            setEmail('')
        })
    }

    const disabled = email === ''
  return (
    <div className='signUpLoginBox'>
            <div className='slContainer'>
                <div className='formBoxLeftForget'>
                        
                </div>
                <div className='formBoxRight'>
                    <div className='formContent'>

                        {success && <span style={{border:'1px solid green', background: 'green', color:'#fff'}}>{success}</span>}
                        {error && <span>{error.message}</span>}

                        <h2>Récupération du mot de passe</h2>
                        <form onSubmit={handleSbumit}>
                            <div className='inputBox'>
                                <input onChange={e => setEmail(e.target.value)} value={email} type='email' required autoComplete='off' />
                                <label htmlFor='email'>Email</label>
                            </div>
                            <button disabled={disabled}>Récupérer</button>
                        </form>
    
                        <div className='linkContainer'>
                            <Link className='simpleLink' to='/signup'>Déjà inscrit ? Connectez-vous.</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ForgetPassword
