import react from "react";
import classes from "../Landing Page/LandingPage.module.css";
import Header from "../Landing Page/Header/Header";
import PopularBar from "./popularBar/PopularBar"
import BackgroundImage from "./BackgroundImage/BackgroundImage"
import Catalog from "./Catalog/Catalog"
const LandingPage = ()=>{
    return(
        <div className={classes.majorContainer}>
            <Header />
            <PopularBar />
            <BackgroundImage />
            <Catalog />
        </div>
    )
}

export default LandingPage;