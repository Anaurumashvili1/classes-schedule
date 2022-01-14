import React from "react";
import "./info.css";
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
          დაბადების თარიღი: <div>{props.info.Date_of_birth}</div>
        </li>
        <li>
          მობილურის ნომერი: <div>{props.info.Phone_Number}</div>
        </li>
        <li>
          ელ-ფოსტა: <div>{props.info.Email}</div>
        </li>

        <li>
          მშობელი:{" "}
          <div>
            {props.info.Parent_first_name + " " + props.info.Parent_last_name}
          </div>
        </li>
        <li>
          მშობლის ნომერი: <div>{props.info.Parent_phone_number}</div>
        </li>
      </ul>
    </div>
  ) : (
    ""
  );
};

export default Info;
