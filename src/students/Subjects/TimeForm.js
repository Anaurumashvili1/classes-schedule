import styles from "./SubjForm.module.css";
import { React, useState, useEffect } from "react";
import axios from "axios";
import Cookies from "universal-cookie";
import { useForm } from "react-hook-form";

const cookies = new Cookies();
const timesUrl = "http://206.189.198.66/times";

const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};

const TimeForm = (props) => {
  const [times, setTimes] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  useEffect(() => {
    axios.get(timesUrl, headers).then(function (response) {
      setTimes(response.data.userData.map((e) => e));
    });
  }, []);

  const checkboxList = times.filter(
    (time) => !props.chosenTimes.includes(time.times)
  );

  /*   */

  console.log(props.chosenTimes);
  console.log(times);
  console.log(checkboxList);
  checkboxList.map((time) => console.log(time.id));

  const onSubmit = async (data) => {
    console.log(data);
    for (let item of data.time) {
      props.chosenTimes.push(item);
    }
    props.setTrigger(false);
  };

  return (
    <form className={styles.loginForm}>
      <label className={styles.dayTime}>აირჩიეთ სასურველი დრო და საათი</label>
      <div className={styles.checkboxSubject}>
        <div>
          {checkboxList.map((time) => {
            return (
              <>
                <input
                  key={time.id}
                  className={styles.checkbox}
                  type="checkbox"
                  name={time.times}
                  value={time.times}
                  id={time.id}
                  {...register("time")}
                />
                <label htmlFor={time.times}>{time.times}</label>
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

export default TimeForm;
