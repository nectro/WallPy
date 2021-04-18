import React, {useState, useEffect} from "react"
import classes from '../AboutUs/AboutUs.module.css'
import Logo from '../../Assets/Logo.svg'
import shubham from '../../Assets/shubham.svg'
import shounak from '../../Assets/shounak 1.svg'
import samy from '../../Assets/SAM 1.svg'
import shadow from '../../Assets/shadow.svg'
import aboutUsVector from "../../Assets/abtVec.png"
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
                    {/*<a href='https://www.freepik.com/vectors/business'>Business vector created by freepik - www.freepik.com</a> */}
                    <div className={classes.aboutcontent}>
                         <div className={classes.image}>
                              <a href='https://www.freepik.com/vectors/business'>
                                   <img src={aboutUsVector} />
                              </a>

                         </div>
                         <div className={classes.texts}>
                              <div className={classes.textContent}>
                                   <div className={classes.title} >About Us</div>
                                   <div className={classes.abtContent} >
                                   Welcome to Wallpy, your number one source for  of wallpapers. We're dedicated to providing you the best wallpapers for your device, with a focus on your likings, dependability and compatibility.
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>


               <div className={classes.ourteam}>
                    <div className={classes.ourTeamContent}>
                         <div className={classes.title}>
                              Our Team
                         </div>
                         <div className={classes.memberContent}>
                              <div className={classes.memberinfo}>
                                   <img className={classes.memberpic} src={samy} />
                                   <p>
                                        <b>Samaresh Samanta (CEO)</b><br/>
                                        A student of SRM University, has a thirst of digging out new idea and implement them in real.
                                   </p>
                              </div>
                              <div className={classes.memberinfo1} >
                                   <img className={classes.memberpic} src={shubham} />
                                   <p>
                                        <b>Shubham Samanta (COO)</b><br/>
                                        A student of NIT Durgapur, has a thirst of digging out new idea and implement them in real.
                                   </p>
                              </div>
                              <div className={classes.memberinfo}> 
                                   <img className={classes.memberpic} src={shounak} />
                                   <p>
                                        <b>Shounak Chatterjee (CFO)</b><br/>
                                        A student of SRM University, has a thirst of digging out new idea and implement them in real.
                                   </p>
                              </div>
                         </div>
                    </div>
                    
               </div>
               <Footer />
          </div>
     )
}
export default AboutUs