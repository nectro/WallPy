import react, {useState} from "react";
import classes from "../Header/Header.module.css";
import Logo from "../../../Assets/Logo1.svg";
import User from "../../../Assets/User-info.svg";
import Search from "../../../Assets/search.svg";
import {Link} from "react-router-dom";
import Upload from "../../Upload/Upload";
import {auth, firebaseApp} from "../../firebase/Config";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Header = ()=>{

    const [authStatus, setAuthStatus] = useState(false);
    const [modal,setModal] = useState(false);
    const [nav,setNav] = useState(false);

    auth.onAuthStateChanged(firebaseUser => {
        if (firebaseUser)
        {
            setAuthStatus(true);
        }
        else
        {
            setAuthStatus(false);
        }
    })

    const signOut = ()=>{
        auth.signOut().then(()=>{
            alert("you have signed out");
        })
    }


    return(
        <div className={classes.majorContainer}>
            <div className={nav?classes.navMajorContainerO:classes.navMajorContainerC}>
                <div className={nav?classes.navbgO:classes.navbgC} onClick={()=>{setNav(false)}}>
                </div>
                <div className={nav?classes.navbarO:classes.navbarC}>

                </div>              
            </div>
            <div className={modal?classes.modalMajorContainerO:classes.modalMajorContainerC} id="modCtn" >
                <div className={modal?classes.modalContainerO:classes.modalContainerC} id="mod">
                    <div className={classes.modalUploadC}>
                        <Upload setModal={setModal}/>
                    </div>
                </div>
            </div>
            <div className={classes.LogoContainer}>
                <img src={Logo} />
            </div>
            <div className={classes.UtilityContainer}>
                <div className={classes.user}>
                    <FontAwesomeIcon icon={faBars} className={classes.icon} onClick={()=>{setNav(true)}}/>
                </div>
                <div className={classes.loginbtn}>
                    {
                        (authStatus)? 
                        <button onClick={signOut} className={classes.lnk} >Logout</button> : 
                        <Link to="/User/login" className={classes.lnk}>Login</Link>
                    }                    
                </div>{/*
                <div className={classes.searchBar}>
                    <input type="text" className={classes.inputText}/>
                    <button className={classes.button}>
                        <img src={Search} />
                    </button>
                </div>*/}
                <div className={classes.Submit}>
                    <button onClick={()=>{setModal(true)}}
                    >
                        Submit your wallpaper
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header;



