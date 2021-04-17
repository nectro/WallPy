import react from "react";
import classes from "../Signup Page/SignupPage.module.css";
import Logo from "../../Assets/Logo1.svg";
import Google from "../../Assets/GoogleIcon.svg";
import {Link} from "react-router-dom";

const SignupPage = ()=>{
    return(
        <div className={classes.majorContainer}>

            <div className={classes.main}>
                <div className={classes.formContainer}>
                    <div className={classes.form}>
                        <ul>
                            <li><h2>Signup</h2></li>
                            <li><input type="text" placeholder="name" /></li>
                            <li><input type="text" placeholder="email" /></li>
                            <li><input type="text" placeholder="password" /></li>
                            <li><button className={classes.button}>Signup</button></li>
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
                            <li style={{borderRight:"1px solid rgba(255, 255, 255, 0.445)"}}><Link to="/ContactUs" className={classes.options}>Contact Us</Link></li>
                            <li><Link to="/AboutUs" className={classes.options}>About Us</Link></li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SignupPage;