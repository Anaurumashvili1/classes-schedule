import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./main.css";
import ManagerHome from "./Main/mainManagerPage";
import Teachers from "./Teachers/Teachers.js";
import Students from "./Students/Students.js";
import { withRouter } from "react-router-dom";
import Cookies from "universal-cookie";
import { useHistory } from "react-router";

const cookies = new Cookies();
function Nav() {
  const path = useHistory();

  const logout = () => {
    cookies.remove("token");
    cookies.remove("role");
    path.push("/");

    console.log("logout");
  };
  return (
    <Router>
      <div>
        <nav className="nav">
          <Link className="link" to="/">
            მენეჯმენტი
          </Link>
          <Link className="link" to="/Students">
            მოსწავლეები
          </Link>{" "}
          <Link className="link" to="/Teachers">
            მასწავლებლები
          </Link>
          <button className="logout link" onClick={logout}>
            {" "}
            გამოსვლა
          </button>
        </nav>
        <Switch>
          <Route path="/Students">
            <Students />
          </Route>
          <Route path="/Teachers">
            <Teachers />
          </Route>
          <Route path="/">
            <ManagerHome />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withRouter(Nav);
