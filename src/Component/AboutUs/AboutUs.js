import React from "react"
import classes from '../AboutUs/AboutUs.module.css'
import Logo from '../../Assets/Logo.svg'

const AboutUs = () => {
     return (
          <div className={classes.majorContainer}>
               <div className={classes.companyLogo}>
                    <img src={Logo} />
                    <div className={classes.content}>Your Wallpaper Your Attitude</div>
               </div>


               <div className={classes.aboutus}>
                    <div className={classes.aboutcontent}>
                         <div className={classes.title} >About Us</div>
                         <div className={classes.content} >
                              Lorem ipsum demo quetes Lorem ipsum
                              demo quetes Lorem ipsum demo asd 
                         quetes Lorem ipsum demo  quetes a </div>
                    </div>
               </div>


               <div className={classes.ourteam}>
                    <div className={classes.title}>Our Team</div>
                    <div ></div>
               </div>
          </div>
     )
}
export default AboutUs