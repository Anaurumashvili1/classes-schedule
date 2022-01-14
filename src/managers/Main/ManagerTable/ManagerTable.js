import React, { useState, useEffect } from "react";
import classes from "./ManagerTable.module.css";
import TableHeader from "./TableHeader";
import TableRooms from "./TableRooms";
import GroupsRow from "./GroupsRow";
import Cookies from "universal-cookie";
import axios from "axios";

const cookies = new Cookies();

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};

const ManagerTable = (props) => {
  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  const mwf = [
    [1, 7, 13, 19, 25, 31],
    [2, 8, 14, 20, 26, 32],
    [3, 9, 15, 21, 27, 33],
    [4, 10, 16, 22, 28, 34],
    [5, 11, 17, 23, 29, 35],
    [6, 12, 18, 24, 30, 36],
  ];
  const tts = [
    [37, 43, 49, 55, 61, 67],
    [38, 44, 50, 56, 62, 68],
    [39, 45, 51, 57, 63, 69],
    [40, 46, 52, 58, 64, 70],
    [41, 47, 53, 59, 65, 71],
    [42, 48, 54, 60, 66, 72],
  ];

  const getTimesUrl = "http://206.189.198.66/times";

  const [timesMonday, setTimesMonday] = useState([]);
  const [timesTuesday, setTimesTuesday] = useState([]);
  const [subjectValue, setSubjectValue] = useState();
  const [teacherValue, setTeacherValue] = useState();

  useEffect(() => {
    axios
      .get(getTimesUrl, headers)
      .then(function (response) {
        const m = response.data.userData
          .filter((e) => e.id > 0 && e.id < 7)
          .map((obj) => obj.times.slice(32));
        setTimesMonday(m);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(getTimesUrl, headers).then(function (response) {
      const m = response.data.userData
        .filter((e) => e.id > 6)
        .map((obj) => obj.times.slice(30));
      setTimesTuesday(m);
    });
  }, []);
  const getClassGroupsUrl = "http://206.189.198.66/api/get_class_group";

  useEffect(() => {
    axios
      .get(getClassGroupsUrl, headers)
      .then(function (response) {
        console.log(response.data.userData);
        console.log(
          response.data.userData.map((g) => g.Time_ID == 1 && g.Room == 2)
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                  teacherTrigger={props.teacherTrigger}
                  subjectTrigger={props.subjectTrigger}
                  subject={props.subject}
                  id={mwf[index]}
                  btnId={mwf[index]}
                  time={timesMonday[index]}
                  key={mwf[index][index]}
                  subjectValue={subjectValue}
                  teacherValue={teacherValue}
                />
              );
            })
          : tts.map((id, index) => {
              return (
                <GroupsRow
                  id={tts[index][index]}
                  time={timesTuesday[index]}
                  key={tts[index][index]}
                  teacherTrigger={props.teacherTrigger}
                  subjectTrigger={props.subjectTrigger}
                  subjectValue={subjectValue}
                  teacherValue={teacherValue}
                />
              );
            })}
      </div>
    </>
  );
};

export default ManagerTable;
