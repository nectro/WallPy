import react from "react";
import classes from "../Login Page/LoginPage.module.css";
import Logo from "../../Assets/Logo1.svg";
import {Link} from "react-router-dom";

const LoginPage = ()=>{
    return(
        <div className={classes.majorContainer}>

            <div className={classes.main}>
                <div className={classes.formContainer}>

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

export default LoginPage;