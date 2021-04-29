import React from "react"
import classes from "../Footer/Footer.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faCopyright } from '@fortawesome/free-regular-svg-icons'
import {faFacebook, faInstagram, faMedium, faTwitter} from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
     return (
          <div className={classes.majorContainer}>
               <div className={classes.copyright}>
                    <FontAwesomeIcon icon={faCopyright} className={classes.icon}/>
                     2021 copyright 
               </div>
               <div className={classes.social}> 
                    <p>Follow us on :</p>
                    <FontAwesomeIcon icon={faFacebook} className={classes.smicon1} />
                    <FontAwesomeIcon icon={faInstagram} className={classes.smicon2} />
                    <FontAwesomeIcon icon={faMedium} className={classes.smicon3} />
                    <FontAwesomeIcon icon={faTwitter} className={classes.smicon4} />
               </div>
          </div>
     )
}
export default Footer