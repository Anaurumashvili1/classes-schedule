import React from "react";
import classes from "./TeachersCheckbox.module.css";

let subjects = [
  "ქართული",
  "ინგლისური ",
  "ისტორია",
  "მათემატიკა",
  "ბიოლოგია",
  "გეოგრაფია",
  "ქიმია",
  "ფიზიკა",
  "უნარები",
  "სამაგისტრო ვერბ",
  "სამაგისტრო მათ",
  "ანალიტიკური წერა",
];

function TeachersCheckbox() {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>აირჩიეთ საგანი</h3>
      <ul className={classes.subjectslist}>
        {subjects.map((a, index) => {
          return (
            <li key={index}>
              <div className="subjects-list-item">
                <div className="left-section">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={a}
                    value={a}
                    className={classes.input}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{a}</label>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TeachersCheckbox;
