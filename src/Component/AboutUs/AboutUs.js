import React, {useState, useEffect} from "react"
import classes from '../AboutUs/AboutUs.module.css'
import Logo from '../../Assets/Logo.svg'
import shubham from '../../Assets/shubham.svg'
import shounak from '../../Assets/shounak 1.svg'
import samy from '../../Assets/SAM 1.svg'
import shadow from '../../Assets/shadow.svg'
import Footer from "../Landing Page/Footer/Footer"
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AboutUs = () => {


     return (
          <div className={classes.majorContainer}>
               <div className={classes.companyLogo}>
                    <div>
                         <center>                              
                              <img src={Logo} />
                              <div className={classes.content}>Your Wallpaper Your Attitude</div>
                              <div className={classes.shadow}></div>
                              <a href="#abt">
                                   <FontAwesomeIcon icon={faAngleDoubleDown} className={classes.ico}/>
                              </a>
                         </center>
                    </div>
               </div>


               <div className={classes.aboutus} id="abt">
                    <div className={classes.aboutcontent}>
                         <div className={classes.title} >About Us</div>
                         <div className={classes.content} >
                              Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a  </div>
                    </div>
               </div>


               <div className={classes.ourteam}>
                    <div className={classes.ourteamcontent}>
                         <div className={classes.title}>Our Team</div>
                         <div className={classes.content}>
                              <div className={classes.memberinfo}>
                                   <img className={classes.memberpic} src={samy} />
                                   <p>Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a Lorem ipsum demo quetes</p>
                              </div>
                              <div className={classes.memberinfo} >
                                   <p>Lorem ipsum demo quetes Lorem ipsum
                                   demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a Lorem ipsum demo quetes</p>
                         <img className={classes.memberpic} src={shubham} />
                              </div>
                              <div className={classes.memberinfo}> 
                                   <img className={classes.memberpic} src={shounak} />
                                   <p>Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a Lorem ipsum demo quetes</p>
                              </div>
                         </div>
                    </div>
                    
               </div>
               <Footer />
          </div>
     )
}
export default AboutUs