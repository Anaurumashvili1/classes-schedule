import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const HomeNavbar = () => {
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
      <li>
        <Link className="link" to="/signup">
          რეგისტრაცია
        </Link>
      </li>
    </div>
  );
};
export default HomeNavbar;
