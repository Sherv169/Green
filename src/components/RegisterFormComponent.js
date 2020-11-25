import React, { useState } from 'react';
import logo from './logo-r.svg';
import './RegisterFormComponent.scss'


function RegisterFormComponent() {
    const [email, setEmail] = useState ('');

    
    return(
        <div className='RegisterFormComponent'>
            <div>
                <img src={logo} className='RegisterFormComponent-logo' alt='green logo'></img>
            </div>
            <h1>
                Example login screen
            </h1>
            <h2>Getting started with Green.</h2>
            <div className='RegisterFormComponent-input'>
                <p className='ui-label margin-bottom-10 margin-top-30'>
                    Email address
                </p>
                <input type='email' value={email} onChange={(e, value) => setEmail(value)}></input>
            </div>
            <div className='RegisterFormComponent-checkbox'>
                <input id='rememberDevice' type='checkbox'></input>
                <label htmlFor='rememberDevice'>Remember this Device</label>
            </div>
            <div className='RegisterFormComponent-submit'>
                <button>
                    <i className='far fa-lock colour-grey margin-right-16' aria-hidden='true'/>
                    Sign In
                </button>
            </div>
        </div>
    );
}

export default RegisterFormComponent;
