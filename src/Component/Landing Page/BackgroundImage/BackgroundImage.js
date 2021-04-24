import React from "react"
import Search from "../../../Assets/search.svg";
import Logo from "../../../Assets/Logo1.svg";
import Header from "../Header/Header";
import PopularBar from "../popularBar/PopularBar"
import classes from "../BackgroundImage/BackgroundImage.module.css"
import SearchBar from '../SearchBar/SearchBar'
const BackgroundImage = () => {
  return (
       <div className={classes.majorContainer}>
          <Header/>
          <div className={classes.imgContainer}>
               <SearchBar/>
          </div>
       </div>
     )
}
export default BackgroundImage