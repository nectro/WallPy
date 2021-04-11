import React from "react"
import Search from "../../../Assets/search.svg";
import Logo from "../../../Assets/Logo1.svg";
import classes from "../BackgroundImage/BackgroundImage.module.css"
const BackgroundImage = () => {
  return (
       <div className={classes.majorContainer}>
          <div className={classes.imgContainer}>
               <div className={classes.searchBar}>          
                    <input type="text" className={classes.inputText}/>
                    <button className={classes.button}>
                         <img src={Search} />
                    </button>
               </div>
          </div>
          <div className={classes.bottomBar}></div>
       </div>
     )
}
export default BackgroundImage