import React from "react";
import "./infoTeachers.css";
import { useRef, useEffect } from "react";

const Info = (props) => {
  const popupRef = useRef();

  useEffect(() => {
    const clickEvent = (e) => {
      if (
        !e.target.classList.contains("link") &&
        props.trigger &&
        !popupRef.current.contains(e.target)
      ) {
        props.setTrigger(false);
      }
    };

    document.addEventListener("click", clickEvent);
    return () => {
      document.removeEventListener("click", clickEvent);
    };
  }, [props.trigger]);
  return props.trigger ? (
    <div className="info" ref={popupRef}>
      <ul>
        <li>
          <h3>მომხმარებლის ინფორმაცია</h3>
        </li>
        <li>
          სახელი:{" "}
          <div>{props.info.First_Name + " " + props.info.Last_Name}</div>
        </li>
        <li>
          პირადი ნომერი: <div>{props.info.ID_Number}</div>
        </li>

        <li>
          მობილურის ნომერი: <div>{props.info.Phone_Number}</div>
        </li>
        <li>
          ელ-ფოსტა: <div>{props.info.Email}</div>
        </li>
      </ul>
    </div>
  ) : (
    ""
  );
};

export default Info;
