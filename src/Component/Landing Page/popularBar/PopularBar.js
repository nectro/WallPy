import React from "react"
import classes from "../popularBar/PopularBar.module.css"
const PopularBar = ()=> {
     return (
          <div className={classes.majorContainer}>
               
               <ul className={classes.optionslist}>
                         <li className={classes.options} style={{borderRight: "1px solid #ffff"}}>wallpaper</li>
                         <li className={classes.options}>trending</li>
                         <li className={classes.options} >dark</li>
                         <li className={classes.options}>game</li>
                         <li className={classes.options}>car</li>
                         <li className={classes.options}>architecture</li>
                         <li className={classes.options}>light painting</li>
                         <li className={classes.options} >religion</li>
                         <li className={classes.options}>stairs</li>
                         <li className={classes.options}>animal</li>
                         <li className={classes.options}>food</li>
                    </ul>
               
          </div>
               
     )
}
export default PopularBar