import React from "react";
import classes from "./TeacherCard.module.css";

const TeacherCard = (props) => {
  return (
    <>
      <div className={classes.container}>
        <ul>
          <li>
            <span>სახელი:</span> {`${props.name}`}
          </li>

          <li>
            <span>საგანი/საგნები:</span>
            {` ${props.subjects}`}
          </li>
          <li>
            <span>E-mail:</span>
            {` ${props.mail}`}
          </li>
          <li>
            <span>მობილურის ნომერი:</span> {`${props.mobile}`}
          </li>
          <li>
            <span>პირადი ნომერი: </span>
            {`${props.idNumber}`}
          </li>
        </ul>
      </div>
    </>
  );
};

export default TeacherCard;
