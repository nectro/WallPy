import React from "react"
import classes from "../popularBar/PopularBar.module.css"
const PopularBar = ()=> {
     return (
          <div className={classes.majorContainer}>
               
               <ul className={classes.optionslist}>
                         <li className={classes.options} style={{borderRight: "1px solid rgba(255, 255, 255, 0.34)", paddingLeft: "0px",}}>Trending</li>
                         <li className={classes.options}>Tech</li>
                         <li className={classes.options}>Dark</li>
                         <li className={classes.options}>Game</li>
                         <li className={classes.options}>Car</li>
                         <li className={classes.options}>Architecture</li>
                         <li className={classes.options}>Light</li>
                         <li className={classes.options}>Religion</li>
                         <li className={classes.options}>Stairs</li>
                         <li className={classes.options}>Animal</li>
                         <li className={classes.options}>Food</li>
                    </ul>
               
          </div>
               
     )
}
export default PopularBar