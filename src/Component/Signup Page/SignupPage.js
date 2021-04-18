import react from "react";
import classes from "../Signup Page/SignupPage.module.css";
import Logo from "../../Assets/Logo1.svg";
import Google from "../../Assets/GoogleIcon.svg";
import {Link} from "react-router-dom";
import { auth, firebaseApp } from "../firebase/Config"
import { useState, useEffect } from "react"
import { Redirect } from 'react-router-dom';



const SignupPage = () => {
    
    const[username,setName]=useState("")
    const[email,setEmail]=useState("")
    const [password, setPassword] = useState("")
    const [authyep, setAuth] = useState(false);
    
    

    const signupclicked = (e) =>
    {
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
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    /*auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser)
        {
            console.log(firebaseUser.uid)
        }
        else
        {
            console.log("not logged in")
        }
})*/

    
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
                                <li><h2>Signup</h2></li>
                                <li><input
                                    name="setName"
                                    type="text"
                                    placeholder="name"
                                    onChange={(event) => { setName(event.target.value) }}
                                    value={username} /></li>
                                <li><input
                                    name="setEmail"
                                    type="text"
                                    placeholder="email"
                                    onChange={(event) => { setEmail(event.target.value) }}
                                    value={email} /></li>
                                <li><input
                                    name="setPassword"
                                    type="text"
                                    placeholder="password"
                                    onChange={(event) => { setPassword(event.target.value) }}
                                    value={password} /></li>
                                <li><button className={classes.button} onClick={signupclicked}>Signup</button></li>
                                <li><div className={classes.divider}><hr /><p>or</p><hr /></div></li>
                                <li><button className={classes.GoogleBtn}><img src={Google} /> <p>Signup with Google</p></button></li>
                                <li><div className={classes.msg}><p>Already have an account?</p><Link to="/Login" className={classes.inmsg}><i>Login</i></Link></div></li>
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

export default SignupPage;