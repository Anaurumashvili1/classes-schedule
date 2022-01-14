import React from "react";
import "./TeachersCheckbox";
import TeachersCheckbox from "./TeachersCheckbox";
import Cookies from "universal-cookie/es6";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import classes from "./popup.module.css";

const cookies = new Cookies();

function Popup(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idnumber, setIdumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleData = (data) => {
    data.preventDefault();
    const postUrl = "http://206.189.198.66/api/add_teacher";

    // console.log(name);

    axios
      .post(
        postUrl,
        {
          first_name: name,
          last_name: surname,
          id_number: idnumber,
          phone_number: phone,
          email: email,

          password: password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${cookies.get("token")}`,
          },
        }
      )
      .then((response) => {
        // console.log(response);
        if (
          response.request.readyState === 4 &&
          response.request.status === 200
        ) {
          props.setTrigger(false);
        }
      })
      .catch((error) => {});
    setName("");
    setSurname("");
    setIdumber("");
    setEmail("");
    setPhone("");
    setPassword("");
  };

  const modalRef = useRef();

  useEffect(() => {
    const clickEvent = (e) => {
      if (
        !e.target.classList.contains("link") &&
        props.trigger &&
        !modalRef.current.contains(e.target)
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
    <div>
      <div className={classes.popup1} ref={modalRef}>
        <div className={classes.modalcontent}>
          <p className={classes.modalHeading}>მასწავლებლის დამატება</p>
          <form onSubmit={handleData}>
            <div className={classes.inputs}>
              <div>
                <label htmlFor="firstname">სახელი:</label>
                <input
                  className={classes.input}
                  type="text"
                  name="firstname"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="lastname">გვარი:</label>
                <input
                  className={classes.input}
                  type="text"
                  name="lastname"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email">ელ.ფოსტა:</label>
                <input
                  className={classes.input}
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password"> პაროლი</label>
                <input
                  className={classes.input}
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />{" "}
              </div>
              <div>
                <label htmlFor="id_number">პირადი ნომერი:</label>
                <input
                  className={classes.input}
                  type="text"
                  name="id_number"
                  value={idnumber}
                  onChange={(e) => setIdumber(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="phone">ტელეფონი:</label>
                <input
                  className={classes.input}
                  type="text"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />{" "}
              </div>

              <TeachersCheckbox></TeachersCheckbox>
            </div>
            <div>
              <button type="submit" className={classes.button}>
                დამატება
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
