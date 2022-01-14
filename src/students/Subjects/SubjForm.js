import { React, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import styles from "./SubjForm.module.css";
import { useForm } from "react-hook-form";

const cookies = new Cookies();
const getSubjectsUrl = "http://206.189.198.66/get_subjects";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};

const SubjForm = (props) => {
  const [subjects, setSubjects] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    axios.get(getSubjectsUrl, headers).then(function (response) {
      setSubjects(response.data.userData.map((e) => e));
    });
  }, []);

  /*   console.log(props.chosenSubjects);*/

  const checkboxList = subjects.filter(
    (subject) => !props.chosenSubjects.includes(subject.Name)
  );

  const onSubmit = async (data) => {
    console.log(data);
    for (let item of data.subject) {
      props.chosenSubjects.push(item);
    }
    props.setTrigger(false);
  };

  return (
    <form className={styles.loginForm}>
      <label className={styles.label}>აირჩიეთ საგანი</label>
      <div className={styles.checkboxSubject}>
        <div>
          {checkboxList.map((subject) => {
            return (
              <>
                <input
                  key={subject.ID}
                  className={styles.checkbox}
                  type="checkbox"
                  name={subject.Name}
                  value={subject.Name}
                  id={subject.ID}
                  {...register("subject")}
                />
                <label htmlFor={subject.Name}>{subject.Name}</label>
                <br />
              </>
            );
          })}
        </div>
      </div>
      <input
        className={styles.loginBtn}
        type="submit"
        value="შენახვა"
        onClick={handleSubmit(onSubmit)}
      />
    </form>
  );
};

export default SubjForm;
