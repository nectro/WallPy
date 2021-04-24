import React from "react"
import Search from "../../../Assets/search.svg";
import Logo from "../../../Assets/Logo1.svg";
import Header from "../Header/Header";
import PopularBar from "../popularBar/PopularBar"
import classes from "../BackgroundImage/BackgroundImage.module.css"
const BackgroundImage = () => {
  return (
       <div className={classes.majorContainer}>
          <Header/>
          <div className={classes.imgContainer}>
               <div className={classes.searchBar}>          
                    <input type="text" className={classes.inputText}/>
                    <button className={classes.button}>
                         <img src={Search} />
                    </button>
               </div>
          </div>
       </div>
     )
}
export default BackgroundImage