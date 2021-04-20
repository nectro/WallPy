import react from 'react'
import classes from './user.module.css'
import Logo from '../../Assets/Logo.svg'
import Login from './form/login'
import Signup from './form/signup'
import {BrowserRouter as Router, Route, Switch,Link} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';

const User = ()=>{
 return(
     <motion.div className={classes.majorContainer} 
     initial={{opacity:0.9,}}
     animate={{opacity:1,}}
     exit={{opacity:0.9,}}
     >
         <div className={classes.logoDisplay}>
             <motion.div className={classes.border}
                initial={{opacity:0,}}
                animate={{opacity:1,}}
                exit={{opacity:0,}}
             ></motion.div>
             <motion.div
                initial={{opacity:0,}}
                animate={{opacity:1,}}
                exit={{opacity:0,}}
             >                
                <Link to="/AboutUs" style={{textDecoration:"none"}}>
                    <div className={classes.logoContainer}>
                        <img src={Logo} />
                        <div className={classes.content}>Your Wallpaper Your Attitude</div>          
                    </div>
                </Link>
             </motion.div>
         </div>
         <div className={classes.forms}>
            <Switch>
                <Route exact path="/User/login">
                    <AnimatePresence>
                        <Login />
                    </AnimatePresence>
                </Route>
                <Route exact path="/User/signup">
                    <AnimatePresence>
                        <Signup />
                    </AnimatePresence>
                </Route>
            </Switch>
         </div>
     </motion.div>
 )   
}

export default User;