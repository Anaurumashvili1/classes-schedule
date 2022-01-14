import React from "react";
import classes from "./TableHeader.module.css";

const TableHeader = (props) => {
  return (
    <>
      <div className={classes.header}>
        {props.text}
        <button onClick={props.onClick} className={classes.button}>
          შეცვლა
        </button>
      </div>
    </>
  );
};

export default TableHeader;
