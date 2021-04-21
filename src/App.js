import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from "../src/Component/Landing Page/LandingPage";
import LoginPage from "../src/Component/Login Page/LoginPage";
import SignupPage from "../src/Component/Signup Page/SignupPage";
import Upload from './Component/Upload/Upload';
import AboutUs from './Component/AboutUs/AboutUs';
import User from './Component/alter login/user'
import {AnimatePresence, motion} from 'framer-motion';
//https://colorhunt.co/palette/253094 ------>the color theme used


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <AnimatePresence>
              <LandingPage />
            </AnimatePresence>
          </Route>
          <Route path="/Login" >
            <LoginPage />
          </Route>
          <Route path="/Signup" >
            <SignupPage />
          </Route>
          <Route path="/User" >
            <AnimatePresence>
              <User />
            </AnimatePresence>
          </Route>
          <Route path="/AboutUs">
            <AnimatePresence>
              <AboutUs/>
            </AnimatePresence>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
