import react from 'react';
import {Link} from 'react-router-dom';
import classes from './style.module.css';
import {motion} from 'framer-motion';


const Login = ()=>{
    return(
        <div className={classes.majorContainer}>
            <motion.div className={classes.form}
                initial={{x:400}}
                animate={{x:"0%"}}
                exit={{x:400}}
            >
                <ul>
                    <li><h3>Login</h3></li>
                    <li><input type="email" placeholder="Email"/></li>
                    <li><input type="password" placeholder="Password"/></li>
                    <li><button className={classes.button}>Login</button></li>
                    <li><p>Don't have an account?</p><Link to="/User/signup" className={classes.link}><i>Signup</i></Link></li>
                </ul>
            </motion.div>                        
        </div>
    )
}

export default Login;