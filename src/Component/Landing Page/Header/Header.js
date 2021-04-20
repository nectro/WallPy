import react, {useState} from "react";
import classes from "../Header/Header.module.css";
import Logo from "../../../Assets/Logo1.svg";
import User from "../../../Assets/User-info.svg";
import Search from "../../../Assets/search.svg";
import {Link} from "react-router-dom";
import Upload from "../../Upload/Upload";
import {auth, firebaseApp} from "../../firebase/Config";

const Header = ()=>{

    const [authStatus, setAuthStatus] = useState(false);

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
            <div className={classes.modalMajorContainerC} id="modCtn" >
                <div className={classes.modalContainerC} id="mod">
                    <p className={classes.closebtn} onClick={(e)=>{
                        document.getElementById('modCtn').classList.remove(classes.modalMajorContainerO);
                        document.getElementById('mod').classList.remove(classes.modalContainerO);
                        document.getElementById('modCtn').classList.add(classes.modalMajorContainerC);
                        document.getElementById('mod').classList.add(classes.modalContainerC);
                    }}>X</p>
                    <div className={classes.modalUploadC}>
                        <Upload />
                    </div>
                </div>
            </div>
            <div className={classes.LogoContainer}>
                <img src={Logo} />
            </div>
            <div className={classes.UtilityContainer}>
                <div className={classes.user}>
                    <img src={User} />
                </div>
                <div className={classes.loginbtn}>
                    {
                        (authStatus)? 
                        <button onClick={signOut} className={classes.lnk} >Logout</button> : 
                        <Link to="/User/login" className={classes.lnk}>Login</Link>
                    }                    
                </div>
                <div className={classes.searchBar}>
                    <input type="text" className={classes.inputText}/>
                    <button className={classes.button}>
                        <img src={Search} />
                    </button>
                </div>
                <div className={classes.Submit}>
                    <button onClick={(e)=>{
                        document.getElementById('modCtn').classList.remove(classes.modalMajorContainerC);
                        document.getElementById('mod').classList.remove(classes.modalContainerC);
                        document.getElementById('modCtn').classList.add(classes.modalMajorContainerO);
                        document.getElementById('mod').classList.add(classes.modalContainerO);
                    }}
                    >
                        Upload
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Header;



