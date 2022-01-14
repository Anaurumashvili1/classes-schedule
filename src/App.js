import "./App.css";
import Nav from "./managers/Nav";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import Cookies from "universal-cookie";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./main/Login";
import Home from "./main/Home";
import Register from "./main/Register";
import Students from "./managers/Students/Students";
import Teachers from "./managers/Teachers/Teachers";
import Student from "./students/Student";
import TeachersMain from "./teachers/TeachersMain";
const cookies = new Cookies();

function App() {
  const [auth, setAuth] = useState();
  const [isAdmin, setIsAdmin] = useState();
  const [isStudent, setIsStudent] = useState();
  const [isTeacher, setIsTeacher] = useState();

  useEffect(() => {
    if (cookies.get("token")) {
      setAuth(true);
    }
    if (cookies.get("role") == "ROLE_USER") {
      setIsAdmin(true);
    }
    if (cookies.get("role") == "ROLE_STUDENT") {
      setIsStudent(true);
    }
    if (cookies.get("role") == "ROLE_TEACHER") {
      setIsTeacher(true);
    }
  }, []);

  useEffect(() => {
    if (cookies.get("token")) {
      setAuth(true);
    }
  }, [cookies]);

  console.log(isAdmin);
  console.log(isStudent);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            exact
            path="/login"
            render={() => <Login setIsLoggedin={setAuth} isLoggedin={auth} />}
          />
          <Route exact path="/signup" component={Register} />
        </Switch>

        <ProtectedRoute
          path="/main"
          component={Nav}
          isAuth={auth}
          isRole={isAdmin}
        />
        <ProtectedRoute path="/Students" component={Students} isAuth={auth} />
        <ProtectedRoute path="/Teachers" component={Teachers} isAuth={auth} />
        <ProtectedRoute
          path="/Studentprofile"
          component={Student}
          isAuth={auth}
          isRole={isStudent}
        />
        <ProtectedRoute
          component={TeachersMain}
          path="/Teacherprofile"
          isAuth={auth}
          isRole={isTeacher}
        />
      </Router>
    </div>
  );
}
export default App;
