import React from "react"
import city from "../../../Assets/city.png"
import Search from "../../../Assets/search.svg";
import Logo from "../../../Assets/Logo1.svg";
import classes from "../BackgroundImage/BackgroundImage.module.css"
const BackgroundImage = () => {
  return (
       <div className={classes.majorContainer} style={{ backgroundImage: `url(${city})`}}>
            <div className={classes.searchBar}>
                    <img className={classes.Logo} src={Logo} />
                    <input type="text" className={classes.inputText}/>
                    <button className={classes.button}>
                        <img src={Search} />
                    </button>
                </div>
     </div>
     )
}
export default BackgroundImage