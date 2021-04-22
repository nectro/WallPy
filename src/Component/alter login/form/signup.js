import react from 'react';
import {Link} from 'react-router-dom';
import classes from './style.module.css';
import {AnimatePresence, motion} from 'framer-motion';
import { auth, firebaseApp,projectfirestore } from "../../firebase/Config"
import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom';

const Signup = ()=>{
    const [username, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);
    
    

    const signupclicked = (e) => {
        e.preventDefault();
        /*const promise = auth.createUserWithEmailAndPassword(email, password)
        promise.catch(e=>{console.log(e.message)})
        console.log("clicked on signup button")*/
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                var user = userCredential.user;
                console.log(user.uid);
                setAuth(true);
                return projectfirestore.collection('users').doc(user.uid).set({
                    name: username,
                    email:email,
                    interests: [],
                    totalupload: 0
                });
                // ...
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    
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
                        animate={{x:0,}}           
                    >
                        <ul>
                            <li><h3>Signup</h3></li>
                            <li>
                                <input 
                                    type="name" 
                                    placeholder="Name"
                                    onChange={(event) => { setName(event.target.value) }}
                                />
                            </li>
                            <li>
                                <input 
                                    type="email" 
                                    placeholder="Email"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                />
                            </li>
                            <li>
                                <input 
                                    type="password" 
                                    placeholder="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                />
                            </li>
                            <li><button className={classes.button} onClick={signupclicked}>Signup</button></li>
                            <li><p className={classes.msg}>Already have an account?</p><Link to="/User/login" className={classes.link}><i>Login</i></Link></li>
                        </ul>
                    </motion.div>
            </div>
        )
    }    
}

export default Signup;