import React, { useState } from "react";
import classes from "./TeachersTable.module.css";
import TableHeader from "./TableHeader";
import TableRooms from "./TableRooms";
import GroupsRow from "./GroupsRow";

const TeachersTable = () => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const mwf = [
    [0, 2, 4, 6, 8, 12],
    [13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30],
    [31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42],
  ];
  const tts = [
    [43, 44, 45, 46, 47, 48],
    [49, 50, 51, 52, 53, 54],
    [55, 56, 57, 58, 59, 60],
    [61, 62, 63, 64, 65, 66],
    [67, 68, 69, 70, 71, 72],
    [74, 75, 76, 78, 79, 80],
  ];
  const times = ["11:20", "13:00", "14:40", "16:20", "18:00", "19:40"];

  return (
    <>
      <div className={classes.table}>
        <TableHeader
          onClick={toggleHandler}
          text={
            toggle
              ? "ორშაბათი, ოთხშაბათი, პარასკევი"
              : "სამშაბათი, ხუთშაბათი, შაბათი"
          }
        />
        <TableRooms />

        {toggle
          ? mwf.map((id, index) => {
              return (
                <GroupsRow
                  id={mwf[index]}
                  time={times[index]}
                  key={mwf[index][index]}
                />
              );
            })
          : tts.map((id, index) => {
              return (
                <GroupsRow
                  id={tts[index][index]}
                  time={times[index]}
                  key={tts[index][index]}
                />
              );
            })}
      </div>
    </>
  );
};

export default TeachersTable;
