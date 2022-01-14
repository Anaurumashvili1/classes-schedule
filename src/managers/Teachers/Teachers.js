// import "./main.css";
import classes from "./Teachers.module.css";
import Popup from "./Popup";
import { useState } from "react";
import Header from "../Students/Header";
import TeacherList from "./TeacherList";

const Teachers = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div>
      <div className="teachers">
        <button className={classes.btn} onClick={() => setButtonPopup(true)}>
          მასწავლებლის დამატება
        </button>
        <Header subjects="სპეციალიზაცია"></Header>

        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
        <TeacherList buttonPopup={buttonPopup}></TeacherList>
      </div>
    </div>
  );
};
export default Teachers;
