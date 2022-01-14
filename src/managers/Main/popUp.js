import React from "react";
import { useState, useEffect, useRef } from "react";
import "./popUp.css";

const Popup = (props) => {
  const popupRef = useRef();

  useEffect(() => {
    const clickEvent = (e) => {
      if (
        !e.target.classList.contains("link") &&
        !e.target.classList.contains("button") &&
        !popupRef.current.contains(e.target) &&
        props.teacherTrigger
      ) {
        props.setTeacherTrigger(false);
      } else if (
        !e.target.classList.contains("link") &&
        !e.target.classList.contains("button") &&
        !popupRef.current.contains(e.target) &&
        props.subjectTriggrer
      ) {
        props.setSubjectTrigger(false);
      }
    };

    document.addEventListener("click", clickEvent);
    return () => {
      document.removeEventListener("click", clickEvent);
    };
  }, [props.subjectTrigger, props.teacherTrigger]);
  return (
    <div className="box" ref={popupRef}>
      {props.content}
    </div>
  );
};

export default Popup;
