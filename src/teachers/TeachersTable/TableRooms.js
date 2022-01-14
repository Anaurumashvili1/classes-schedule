import React from "react";
import classes from "./TableRooms.module.css";

const TableRooms = (props) => {
  return (
    <>
      <div className={classes.roomsrow}>
        <div className={classes.emptyroom}></div>
        <div className={classes.rooms}>
          <div className={classes.text}>ოთახი 1</div>
        </div>
        <div className={classes.rooms}>
          <div className={classes.text}>ოთახი 2</div>
        </div>
        <div className={classes.rooms}>
          <div className={classes.text}>ოთახი 3</div>
        </div>
        <div className={classes.rooms}>
          <div className={classes.text}>ოთახი 4</div>
        </div>
        <div className={classes.rooms}>
          <div className={classes.text}>ოთახი 5</div>
        </div>
        <div className={classes.rooms}>
          <div className={classes.text}>ოთახი 6</div>
        </div>
      </div>
    </>
  );
};

export default TableRooms;
