import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import classes from "./StudentsList.module.css";
import Info from "./info";
import DeletePopup from "./DeletePopup";

const cookies = new Cookies();
// {a.subject.map((s) => s[1] + " // ")}
function StudentsList() {
  const [trigger, setTrigger] = useState(false);
  const [studentsList, setStudentsList] = useState([]);
  const Geturl = "http://206.189.198.66/api/get_students";
  const [refreshPage, setRefreshPage] = useState();

  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${cookies.get("token")}`,
    },
  };

  function deleteHandler(id) {
    // console.log(id);
    setTrigger(true);
    setRefreshPage(id);
  }
  const onClickHandler = () => {
    axios.get(Geturl, headers).then(function (response) {
      setStudentsList(response.data.userData);
      console.log(response.data.userData);
    });
  };
  useEffect(() => {
    onClickHandler();
    console.log("use effect ran");
  }, [trigger]);
  useEffect(() => {
    onClickHandler();
    console.log("use effect ran");
  }, [trigger]);

  const [rowInfo, setRowInfo] = useState();
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <ul className={classes.StudentsList}>
        {studentsList.map((a, index) => {
          return (
            <>
              <li key={a.ID} className={classes.StudentsListLi}>
                <div className={classes.index}>{index + 1}</div>

                <label className={classes.studentsList_FirstName}>
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
        <Info
          trigger={buttonPopup}
          setTrigger={setButtonPopup}
          info={rowInfo}
        ></Info>
        <DeletePopup
          setTrigger={setTrigger}
          trigger={trigger}
          ID={refreshPage}
        ></DeletePopup>
      </ul>
    </div>
  );
}
export default StudentsList;
