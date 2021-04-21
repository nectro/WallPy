import react from "react";
import classes from "../Landing Page/LandingPage.module.css";
import Header from "../Landing Page/Header/Header";
import PopularBar from "./popularBar/PopularBar"
import BackgroundImage from "./BackgroundImage/BackgroundImage"
import Catalog from "./Catalog/Catalog"
import Footer from "./Footer/Footer";
import {motion} from "framer-motion";
const LandingPage = ()=>{
    return(
        <motion.div className={classes.majorContainer}
            initial={{opacity:0.8}}
            animate={{opacity:1}}
        >
            <BackgroundImage />
            <Catalog />
            <Footer />
        </motion.div>
    )
}

export default LandingPage;