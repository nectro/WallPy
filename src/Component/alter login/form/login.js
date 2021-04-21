import react from 'react';
import {Link} from 'react-router-dom';
import classes from './style.module.css';
import {motion} from 'framer-motion';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from "react"
import { auth, firebaseApp } from "../../firebase/Config"


const Login = ()=>{
     
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);
    const [err, setError] = useState("");
    

    const loginclicked = (e) => {
        e.preventDefault();
        /*const promise = auth.createUserWithEmailAndPassword(email, password)
        promise.catch(e=>{console.log(e.message)})
        console.log("clicked on signup button")*/
        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.uid);
                setAuth(true);
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                if (password!=""&&email!="") {
                    if (errorCode=="auth/wrong-password") {
                        alert("Wrong Password")
                    }
                    if (errorCode=="auth/user-not-found") {
                        alert("please signup")
                    }
                    if (errorCode=="auth/invalid-email") {    
                        alert("wrong format of email-id")
                    }
                }
                else {
                    alert("enter all credentials")
                }
                
            });
    }
    auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            setAuth(true);
        }
        else {
            setAuth(false);
        }
    })

    
    if (authyep) {
        return (
            <Redirect to="/" />
        )
    }
    else {
        return(
            <div className={classes.majorContainer}>
                <motion.div className={classes.form}
                    initial={{x:400}}
                    animate={{x:"0%"}}
                >
                    <ul>
                        <li><h3>Login</h3></li>
                        <li>
                            <input type="email" 
                                placeholder="Email"
                                onChange={(event) => { setEmail(event.target.value) }}
                            />
                        </li>
                        <li>
                            <input 
                                type="password" 
                                placeholder="Password"
                                onChange={(event) => { setPassword(event.target.value) }}
                            />
                        </li>
                        <li><button className={classes.button} onClick={loginclicked}>Login</button></li>
                        <li><p>Don't have an account?</p><Link to="/User/signup" className={classes.link}><i>Signup</i></Link></li>
                    </ul>
                </motion.div>                        
            </div>
        )
    }
}

export default Login;