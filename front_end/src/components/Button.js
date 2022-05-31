import React from 'react'
import './Button.css'
import {Link} from 'react-router-dom'

export function Button(){
    return (
        <Link to='LogIn'>
            <button className='btn'>Log In</button>
        </Link>
    )
}