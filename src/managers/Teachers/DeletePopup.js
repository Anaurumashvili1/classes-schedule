import React from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import classes from "./DeletePopup.module.css";

const cookies = new Cookies();
function DeletePopup(props) {
  const onClickHandler = () => {
    props.setTrigger(false);
    axios.post(
      "http://206.189.198.66/api/delete_teacher",
      {
        id: props.ID,
      },
      { headers: { Authorization: `Bearer ${cookies.get("token")}` } }
    );
  };
  console.log(props.ID);
  return props.trigger ? (
    <div>
      <div className={classes.deletePopup}>
        <h1 className={classes.info}>გსურთ წაშლა?</h1>
        <button
          className={classes.submitButton}
          type="submit"
          onClick={() => onClickHandler()}
        >
          დიახ
        </button>
        <button
          className={classes.closeButton}
          onClick={() => props.setTrigger(false)}
        >
          არა
        </button>
      </div>
    </div>
  ) : (
    ""
  );
}

export default DeletePopup;
