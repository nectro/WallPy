import react from "react";
import classes from "../Login Page/LoginPage.module.css";
import Logo from "../../Assets/Logo1.svg";
import Google from "../../Assets/GoogleIcon.svg";
import {Link} from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from "react"
import { auth, firebaseApp } from "../firebase/Config"
/* auth/user-not-found=when the mail id is wrong but in a correct format*/
/*auth/wrong-password=when the mailid is correct but pass is wrong */
/*auth/invalid-email=when the emailid is in a wrong format */
const LoginPage = () => {
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);
    const [error, setError] = useState("");
    

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
                        setError("Wrong Password")
                    }
                    if (errorCode=="auth/user-not-found") {
                        setError("please signup")
                    }
                    if (errorCode=="auth/invalid-email") {
    
                        setError("wrong format of email-id")
                    }
                }
                else
                {
                    setError("enter all credentials")
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
        return (
            <div className={classes.majorContainer}>

                <div className={classes.main}>
                    <div className={classes.formContainer}>
                        <div className={classes.form}>
                            <ul>
                                <li><h2>Login</h2></li>
                                <li><input type="email"
                                    placeholder="email"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                    value={email}
                                /></li>
                                <li><input type="password"
                                    placeholder="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                    value={password} /></li>
                                <li><button className={classes.button} onClick={loginclicked}>Login</button></li>
                                <li><div ><hr /><p>{error}</p><hr /></div></li>
                                <li><div className={classes.divider}><hr /><p>or</p><hr /></div></li>
                                <li><button className={classes.GoogleBtn}><img src={Google} /> <p>Signin with Google</p></button></li>
                                <li><div className={classes.msg}><p>Don't have an account?</p><Link to="/Signup" className={classes.inmsg}><i>Signup</i></Link></div></li>
                            </ul>
                        </div>
                    </div>
                    <div className={classes.logoContainer}>
                        <div className={classes.logoQuote}>
                            <img src={Logo} />
                            <p>your wallpaper, your attitude</p>
                        </div>
                        <div className={classes.miniFooter}>
                            <ul>
                                <li style={{ borderRight: "1px solid rgba(255, 255, 255, 0.445)" }}><Link to="/ContactUs" className={classes.options}>Contact Us</Link></li>
                                <li><Link to="/AboutUs" className={classes.options}>About Us</Link></li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default LoginPage;