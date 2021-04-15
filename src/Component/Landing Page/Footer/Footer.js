import React from "react"
import classes from "../Footer/Footer.module.css"
const Footer = () => {
     return (
          <div className={classes.majorContainer}>
               <div className={classes.copyright}> 2021 copyright </div>
               <div className={classes.social}> Follow us on : socail media </div>
          </div>
     )
}
export default Footer