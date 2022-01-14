import React from "react";
import styles from "./LogOutst.module.css";
import { useHistory } from "react-router";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const LogOut = () => {
  const path = useHistory();

  const handleClick = () => {
    cookies.remove("token");
    cookies.remove("role");
    path.push("/");
  };

  return (
    <div>
      <button className={styles.logout} onClick={handleClick}>
        გამოსვლა
      </button>
    </div>
  );
};

export default LogOut;
