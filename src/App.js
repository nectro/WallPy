import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import LandingPage from "../src/Component/Landing Page/LandingPage";
import LoginPage from "../src/Component/Login Page/LoginPage";

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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
