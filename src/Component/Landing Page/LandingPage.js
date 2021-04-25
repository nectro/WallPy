import react, { useEffect, useState } from "react";
import classes from "../Landing Page/LandingPage.module.css";
import Header from "../Landing Page/Header/Header";
import PopularBar from "./popularBar/PopularBar"
import BackgroundImage from "./BackgroundImage/BackgroundImage"
import Catalog from "./Catalog/Catalog"
import Footer from "./Footer/Footer";
import {motion} from "framer-motion";
const LandingPage = () => {


    const [search, setsearch] = useState("")
    
   
    return(
        <motion.div className={classes.majorContainer}
            initial={{opacity:0.9}}
            animate={{opacity:1}}
        >
            <BackgroundImage search={search} setsearch={ setsearch}/>
            <Catalog search={search} setsearch={ setsearch}/>
            <Footer />
        </motion.div>
    )
}

export default LandingPage;