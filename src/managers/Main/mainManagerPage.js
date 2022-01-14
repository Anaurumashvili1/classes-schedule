import React, { useState, useEffect } from "react";
import Popup from "./popUp";
import ManagerTable from "./ManagerTable/ManagerTable";
import Cookies from "universal-cookie";
import axios from "axios";
import "./popUp.css";

const cookies = new Cookies();
const getSubjectsUrl = "http://206.189.198.66/get_subjects";
const getTeachersUrl = "http://206.189.198.66/api/get_teachers";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};

function ManagerHome() {
  const [isSubject, setIsSubject] = useState(false);

  const [isTeacher, setTeacher] = useState(false);

  const [isStudent, setStudent] = useState(false);

  const studentPopup = () => {
    setStudent(!isStudent);
  };

  const [subjects, setSubjects] = useState([]);
  const [teachers, setTeachers] = useState({});

  useEffect(() => {
    axios.get(getSubjectsUrl).then(function (response) {
      setSubjects(response.data.userData);
    });
  }, []);

  useEffect(() => {
    axios.get(getTeachersUrl, headers).then(function (response) {
      setTeachers(response.data.userData);
    });
  }, []);

  return (
    <div>
      <ManagerTable
        subjectTrigger={() => setIsSubject(!isSubject)}
        teacherTrigger={() => setTeacher(!isTeacher)}
      />
      {isSubject && (
        <Popup
          subjectTriggrer={isSubject}
          setSubjectTrigger={setIsSubject}
          content={
            <>
              <ul>
                {subjects
                  .map((e) => e.Name)
                  .map((subject) => (
                    <li className="addSubjectList">
                      <button className="addSubjectBtn" key={subject.id}>
                        {subject}
                      </button>
                    </li>
                  ))}
              </ul>
            </>
          }
        />
      )}
      {isTeacher && (
        <Popup
          teacherTrigger={isTeacher}
          setTeacherTrigger={setTeacher}
          content={
            <>
              <ul>
                {teachers
                  .map((e) => e.First_Name + " " + e.Last_Name)
                  .map((teacher) => (
                    <li className="addSubjectList">
                      <button className="addSubjectBtn" key={teacher.Id}>
                        {teacher}
                      </button>
                    </li>
                  ))}
              </ul>
            </>
          }
        />
      )}
      {isStudent && (
        <Popup
          content={
            <>
              <ul>
                <li className="addSubjectList">
                  <button className="addSubjectBtn" key={1}>
                    ჰარი პოტერი
                  </button>
                </li>
                <li className="addSubjectList">
                  <button className="addSubjectBtn" key={2}>
                    ჯორდანო ბრუნო
                  </button>
                </li>
              </ul>
            </>
          }
          handleClose={studentPopup}
        />
      )}
    </div>
  );
}
export default ManagerHome;
