import React, {useState, useEffect} from "react"
import classes from '../AboutUs/AboutUs.module.css'
import Logo from '../../Assets/Logo.svg'
import shubham from '../../Assets/shubham.svg'
import shounak from '../../Assets/shounak 1.svg'
import samy from '../../Assets/samar.jfif'
import shadow from '../../Assets/shadow.svg'
import aboutUsVector from "../../Assets/abtVec.png"
import Footer from "../Landing Page/Footer/Footer"
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from "react-awesome-reveal";
import {motion} from 'framer-motion';

const AboutUs = () => {


     return (
          <div className={classes.majorContainer} >
               <motion.div
                    initial={{opacity:0, transitionDuration:"0.5s"}}
                    animate={{opacity:1, transitionDuration:"0.5s"}}
                    exit={{opacity:0, transitionDuration:"0.5s"}}
               >
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
                                        <Fade triggerOnce="true">
                                        <div className={classes.title} >About Us</div>
                                             <div className={classes.abtContent} >
                                             Welcome to Wallpy, your number one source for  of wallpapers. We're dedicated to providing you the best wallpapers for your device, with a focus on your likings, dependability and compatibility.
                                             </div>
                                        </Fade>
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
                                        <Fade direction="left" triggerOnce="true">
                                             <img className={classes.memberpic} src={samy}/>
                                        </Fade>
                                        <Fade direction="right" triggerOnce="true">
                                             <p>
                                                  <b>Samaresh Samanta</b><br/>
                                                  A student of SRM University, has a thirst of digging out new idea and implement them in real.
                                             </p>
                                        </Fade>
                                   </div>
                                   <div className={classes.memberinfo1} >
                                        <Fade direction="right" triggerOnce="true">
                                             <img className={classes.memberpic} src={shubham} />
                                        </Fade>
                                        <Fade direction="left" triggerOnce="true">
                                             <p>
                                                  <b>Shubham Samanta</b><br/>
                                                  A student of NIT Durgapur, has a thirst of digging out new idea and implement them in real.
                                             </p>
                                        </Fade>
                                   </div>
                                   <div className={classes.memberinfo}> 
                                        <Fade direction="left" triggerOnce="true">
                                             <img className={classes.memberpic} src={shounak} />
                                        </Fade>          
                                        <Fade direction="right" triggerOnce="true"> 
                                             <p>
                                                  <b>Shounak Chatterjee</b><br/>
                                                  A student of SRM University, has a thirst of digging out new idea and implement them in real.
                                             </p>
                                        </Fade>
                                   </div>
                              </div>
                         </div>
                         
                    </div>
                    <Footer />
               </motion.div>
          </div>
     )
}
export default AboutUs