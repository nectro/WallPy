import react from "react";
import classes from "../Landing Page/LandingPage.module.css";
import Header from "../Landing Page/Header/Header";
import PopularBar from "./popularBar/PopularBar"
import BackgroundImage from "./BackgroundImage/BackgroundImage"
const LandingPage = ()=>{
    return(
        <div className={classes.majorContainer}>
            <Header />
            <PopularBar />
            <BackgroundImage />
        </div>
    )
}

export default LandingPage;