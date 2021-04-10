import react from "react";
import classes from "../Landing Page/LandingPage.module.css";
import Header from "../Landing Page/Header/Header";
import PopularBar from "./popularBar/PopularBar"
const LandingPage = ()=>{
    return(
        <div className={classes.majorContainer}>
            <Header />
            <PopularBar />
        </div>
    )
}

export default LandingPage;