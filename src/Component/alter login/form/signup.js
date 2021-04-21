import react,{useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './style.module.css';
import {AnimatePresence, motion} from 'framer-motion';

const Signup = ()=>{
    return(
        <div className={classes.majorContainer}>
                <motion.div className={classes.form}
                    initial={{x:400}}
                    animate={{x:0,}}           
                >
                    <ul>
                        <li><h3>Signup</h3></li>
                        <li><input type="name" placeholder="Name"/></li>
                        <li><input type="email" placeholder="Email"/></li>
                        <li><input type="password" placeholder="password"/></li>
                        <li><button className={classes.button}>Signup</button></li>
                        <li><p className={classes.msg}>Already have an account?</p><Link to="/User/login" className={classes.link}><i>Login</i></Link></li>
                    </ul>
                </motion.div>
        </div>
    )
}

export default Signup;