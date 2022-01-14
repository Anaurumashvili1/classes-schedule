import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const RegisterNavbar = () => {
  return (
    <div className="navbar">
      <li>
        <Link className="link" to="/">
          მთავარი
        </Link>
      </li>
      <li>
        <Link className="link" to="/login">
          შესვლა
        </Link>
      </li>
    </div>
  );
};
export default RegisterNavbar;
