import axios from "axios";
import React from "react";
import { useState, useEffect, useCallback } from "react";
import classes from "./TeachersList.module.css";
import Cookies from "universal-cookie/es6";
import InfoTeachers from "./InfoTeachers";
import DeletePopup from "./DeletePopup";

const cookies = new Cookies();
function TeacherList(props) {
  const [trigger, setTrigger] = useState(false);
  const [refreshPage, setRefreshPage] = useState();
  const [teachersList, setTeachersList] = useState([]);

  const Geturl = "http://206.189.198.66/api/get_teachers";

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  };

  function deleteHandler(id) {
    setTrigger(true);
    setRefreshPage(id);
  }

  const onClickHandler = useCallback(() => {
    axios.get(Geturl, headers).then(function (response) {
      setTeachersList(response.data.userData);
      console.log(response.data.userData);
    });
  }, []);
  useEffect(() => {
    onClickHandler();
    console.log("useeffect ran");
  }, [props.buttonPopup, trigger]);
  useEffect(() => {
    onClickHandler();
    console.log("useeffect ran");
  }, [props.buttonPopup, trigger]);

  const [rowInfo, setRowInfo] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);

  return (
    <ul className={classes.teachersList}>
      {Object.values(teachersList).map((a, index) => {
        return (
          <>
            <li key={a.ID} className={classes.teachersListLi}>
              <div className={classes.index}>{index + 1}</div>

              <label className={classes.teachersList_FirstName}>
                {a.First_Name + " " + a.Last_Name}
              </label>
              <div className={classes.subjects}></div>

              <button
                className={classes.infoButton}
                onClick={() => {
                  setRowInfo(a);
                  setButtonPopup(true);
                }}
              >
                დეტალურად
              </button>

              <button
                className={classes.deleteButton}
                onClick={() => deleteHandler(a.ID)}
              >
                წაშლა
              </button>
            </li>
          </>
        );
      })}
      <InfoTeachers
        trigger={buttonPopup}
        setTrigger={setButtonPopup}
        info={rowInfo}
      ></InfoTeachers>
      <DeletePopup
        setTrigger={setTrigger}
        trigger={trigger}
        ID={refreshPage}
      ></DeletePopup>
    </ul>
  );
}

export default TeacherList;
