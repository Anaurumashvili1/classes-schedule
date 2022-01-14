import Topbar from "./components/Topbar";
import Main from "./components/Main";
import HomeNavbar from "./components/HomeNavbar";
import "./app.css";
import { withRouter } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Topbar />
      <HomeNavbar />
      <Main />
    </>
  );
};
export default withRouter(Home);
