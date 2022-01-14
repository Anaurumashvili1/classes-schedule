import Topbar from "./components/Topbar";
import RegisterNavbar from "./components/RegisterNavbar";
import { useForm } from "react-hook-form";
import "./register.css";
import { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();
const timesUrl = "http://206.189.198.66/times";
const getSubjectsUrl = "http://206.189.198.66/get_subjects";
const headers = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${cookies.get("token")}`,
  },
};

function Register() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [date, setDate] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [times, setTimes] = useState([]);
  useForm();

  useEffect(() => {
    axios.get(getSubjectsUrl, headers).then(function (response) {
      setSubjects(response.data.userData.map((e) => e));
    });
  }, []);

  useEffect(() => {
    axios.get(timesUrl, headers).then(function (response) {
      setTimes(response.data.userData.map((e) => e));
    });
  }, []);
  console.log(times);
  const onSubmit = async (data) => {
    const subjIds = () => {
      let filteredIds = [];
      for (let i = 0; i < subjects.length; i++) {
        for (let j = 0; j < data.subjects.length; j++) {
          if (subjects[i].Name == data.subjects[j]) {
            filteredIds.push(subjects[i].ID);
          }
        }
      }
      return filteredIds;
    };

    const timeIds = () => {
      let filteredTimes = [];
      for (let i = 0; i < times.length; i++) {
        for (let j = 0; j < data.times.length; j++) {
          if (times[i].times == data.times[j]) {
            filteredTimes.push(times[i].id);
          }
        }
      }
      return filteredTimes;
    };
    axios
      .post(
        "http://206.189.198.66/add_student",
        {
          password: data.password,
          first_name: data.name,
          last_name: data.lastName,
          id_number: data.idNumber,
          phone_number: data.phone,
          email: data.email,
          birth_date: data.birthData,
          pfirst_name: data.parentName,
          plast_name: data.parentLastName,
          pphone_number: data.parentNumber,
          subjects: subjIds(),
          times: timeIds(),
        },
        { "Content-Type": "application/json" }
      )
      .then((response) => {
        response && window.location.replace("/login");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(subjIds());
    console.log(timeIds());
  };

  return (
    <>
      <Topbar />
      <RegisterNavbar />
      <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="label">სახელი</label>
        <input
          className="fields"
          type="text"
          placeholder=" ჩაწერეთ სახელი"
          {...register("name", { required: true })}
        />
        <label className="label">გვარი</label>
        <input
          className="fields"
          type="text"
          placeholder="ჩაწერეთ გვარი"
          {...register("lastName", { required: true })}
        />
        <label className="label">ელ-ფოსტა </label>
        <input
          className="fields"
          type="text"
          placeholder="ჩაწერეთ იმეილი"
          {...register("email", {
            required: true,
            pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
          })}
        />
        {errors.email && (
          <span style={{ color: "#dfa388" }}>
            იმეილი უნდა შეიცავდეს @ სიმბოლოს
          </span>
        )}
        <br />
        <label className="label">პაროლი </label>
        <input
          className="fields"
          type="password"
          placeholder="ჩაწერეთ პაროლი"
          {...register("password", {
            required: "please write minimum",
            minLength: 6,
          })}
        />
        {errors.password && (
          <span style={{ color: "#dfa388" }}>
            პაროლი უნდა შეიცავდეს მინიმუმ ექვს სიმბოლოს
          </span>
        )}
        <br />
        <br />
        <label className="label" htmlFor="start">
          დაბადების თარიღი
        </label>
        <input
          className="fields"
          type="date"
          id="start"
          value={date}
          min="1900-01-01"
          max="2018-12-31"
          {...register("birthData", { required: true })}
          onChange={(e) => setDate(e.target.value)}
        />
        <label className="label">პირადი ნომერი</label>
        <input
          type="text"
          className="fields"
          placeholder="ჩაწერეთ პირადი ნომერი"
          {...register("idNumber", { required: true })}
        />
        <label className="label">მობილურის ნომერი</label>
        <input
          type="text"
          className="fields"
          placeholder="შეიყვანეთ მობილურის ნომერი"
          {...register("phone", { required: true })}
        />
        <label className="label">მშობლის სახელი</label>
        <input
          type="text"
          className="fields"
          placeholder="შეიყვანეთ მშობლის სახელი"
          {...register("parentName", { required: true })}
        />
        <label className="label">მშობლის გვარი</label>
        <input
          type="text"
          className="fields"
          placeholder="შეიყვანეთ მშობლის გვარი"
          {...register("parentLastName", { required: true })}
        />
        <label className="label">მშობლის ნომერი</label>
        <input
          type="text"
          className="fields"
          placeholder="შეიყვანეთ მშობლის ნომერი"
          {...register("parentNumber", { required: true })}
        />
        <label id="subjects" className="chkboxLabel">
          აირჩიეთ საგანი
        </label>
        <div className="checkboxSubject">
          {subjects.map((subject) => {
            return (
              <div className="checkbox" key={subject.ID}>
                <input
                  className="checkbox"
                  type="checkbox"
                  name={subject.Name}
                  value={subject.Name}
                  id={subject.ID}
                  {...register("subjects")}
                />
                <label htmlFor={subject.Name}>{subject.Name}</label>
                <br />
              </div>
            );
          })}
        </div>
        <div className="checkboxSchedul">
          <label id="times" className="chkboxLabel">
            აირჩიეთ სასურველი დრო და საათი
          </label>

          {times.map((time) => {
            return (
              <div className="times" key={time.id}>
                <br />
                <input
                  className="checkbox"
                  type="checkbox"
                  name={time.times}
                  value={time.times}
                  {...register("times")}
                />
                <label htmlFor={time.times}>{time.times}</label>
                <br />
              </div>
            );
          })}
        </div>
        <input className="loginBtn" type="submit" />
      </form>
    </>
  );
}

export default withRouter(Register);
