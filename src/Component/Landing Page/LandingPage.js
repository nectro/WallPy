import react from "react";
import classes from "../Landing Page/LandingPage.module.css";
import {Link} from "react-router-dom";

const LandingPage = ()=>{
    return(
        <div className={classes.majorContainer}>

            <Link to="/Login">Login</Link>

        </div>
    )
}

export default LandingPage;