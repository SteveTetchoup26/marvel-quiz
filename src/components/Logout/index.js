import React, { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../Firebase'
import { signOut } from 'firebase/auth'
import auth from '../Firebase/firebase'

const Logout = () => {

    const [checked, setChecked] = useState(false)
    const firebase = useContext(FirebaseContext)

    useEffect(() => {
        if(checked){
            signOut()
        }
    }, [checked, firebase])

    const handleChange = e => {
        setChecked(e.target.checked)
    }
    return (
        <div className='logoutContainer'>
            <label className='switch'>
                <input type='checkBox' checked={checked} onChange={handleChange}/>
                <span className='slider round'></span>
            </label> 
        </div>
    )
}

export default Logout
