import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from "../src/Component/Landing Page/LandingPage";
import LoginPage from "../src/Component/Login Page/LoginPage";
import Upload from './Component/Upload/Upload';
import AboutUs from './Component/AboutUs/AboutUs';
//https://colorhunt.co/palette/253094 ------>the color theme used


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" >
            <LandingPage />
          </Route>
          <Route path="/Login" >
            <LoginPage />
          </Route>
          <Route path="/upload">
            <Upload/>
          </Route>
          <Route path="/aboutus">
            <AboutUs/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
