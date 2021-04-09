import react from "react";
import classes from "../Header/Header.module.css";
import Logo from "../../../Assets/Logo1.svg";
import User from "../../../Assets/User-info.svg";
import Search from "../../../Assets/search.svg";
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <div className={classes.majorContainer}>
            <div className={classes.LogoContainer}>
                <img src={Logo} />
            </div>
            <div className={classes.UtilityContainer}>
                <div className={classes.user}>
                    <img src={User} />
                </div>
                <div className={classes.loginbtn}>
                    <Link to="/Login" className={classes.lnk}>Login</Link>
                </div>
                <div className={classes.searchBar}>
                    <input type="text" className={classes.inputText}/>
                    <div className={classes.button}>
                        <img src={Search} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header;



