import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import axios from "axios";
import "./Button.css";

const TableSubject = (props) => {
  return (
    <>
      {props.subjectValue ? (
        <div className="row">
          {props.subjectValue}
          <button className="deletebutton">x</button>
        </div>
      ) : (
        <button className="button" onClick={props.subjectTrigger}>
          + საგანი
        </button>
      )}

      <div></div>
    </>
  );
};

export default TableSubject;
