/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import "./Login.css"

function Login() {
    const history = useHistory(); //allows us to programitically change url

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();  //it prevents the page from refreshing

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push("/")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //it successfully created a new user with email and password
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login_logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" />
            </Link>

            <div className="login_container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" value={email}
                        onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password}
                        onChange={e => setPassword(e.target.value)} />

                    <button type="submit" onClick={signIn}
                        className="login_signInButton">Sign-in       </button>
                </form>

                <p>
                    By signing-in you agree to <strong>AMAZON CLONE
                    </strong> Conditions of Use & Sale. Please see our Privacy Notice, out Cookies Notice
                </p>

                <button onClick={register}
                    className="login_registerButton">Create account
                </button>
            </div>
        </div>
    )
}

export default Login
