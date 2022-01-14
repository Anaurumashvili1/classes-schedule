import Topbar from "./components/Topbar";
import LoginNavbar from "./components/LoginNavbar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./login.css";
import { useHistory } from "react-router";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";

const cookies = new Cookies();

const Login = (props) => {
  cookies.remove("role");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = "http://206.189.198.66/api/login_check";

  const headers = {
    "Content-Type": "application/json",
  };
  const parameters = {
    username: email,
    password: password,
  };
  // cookies.remove("token");
  // cookies.remove("role");

  const path = useHistory();
  const submit = (e) => {
    e.preventDefault();

    axios
      .post(url, parameters, headers)

      .then(function (response) {
        cookies.set("token", response.data.token);
        cookies.set("role", response.data.roles[0]);
      })
      .then(() => {
        if (cookies.get("role") == "ROLE_USER") {
          path.push("/main");
        } else if (cookies.get("role") == "ROLE_STUDENT") {
          path.push("/Studentprofile");
        } else if (cookies.get("role") == "ROLE_TEACHER") {
          path.push("/Teacherprofile");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // useEffect(() => {
  //   if (cookies.get("token")) {
  //     props.setIsLoggedin(true);
  //   }
  // }, [cookies]);

  return (
    <>
      <Topbar />
      <LoginNavbar />
      <form className="logForm" onSubmit={submit}>
        <label className="label">ელ-ფოსტა </label>
        <input
          className="fields"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="იმეილი"
        />{" "}
        <br />
        <label className="label">პაროლი </label>
        <input
          className="fields"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="პაროლი"
        />
        <br />
        <br />
        <input className="loginBtn" type="submit" />
      </form>
    </>
  );
};

export default withRouter(Login);
