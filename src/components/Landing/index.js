import React, {Fragment, useEffect, useRef, useState} from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    const refWolverine = useRef(null)

    const [btn, setBtn] = useState(false)

    useEffect(() => {
        refWolverine.current.classList.add("startingImg")

        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg")
            setBtn(true)
        }, 1000)
    }, [])

    const setLeftImg = () => {
        refWolverine.current.classList.add("leftImg")
    }
    const setRightImg= () => {
        refWolverine.current.classList.add("rightImg")
    }

    const clearLeftImg = () => {
        refWolverine.current.classList.remove("leftImg")
    }

    const clearRightImg = () => {
        refWolverine.current.classList.remove("rightImg")
    }

    const displayBtn = btn  && (
        <Fragment>
            <div onMouseOver={setLeftImg} onMouseOut={clearLeftImg} className='leftBox'>
                <Link className='btn-welcome' to='/signup'>Inscription</Link>
            </div>
            <div onMouseOver={setRightImg} onMouseOut={clearRightImg} className='rightBox'>
                <Link className='btn-welcome' to='/login'>connexion</Link>
            </div>
        </Fragment>
    )
    return (
        <main ref={refWolverine} className='welcomePage'>
            { displayBtn }
        </main>
    )
}

export default Landing
