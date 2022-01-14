import React from "react";

import TeachersTable from "./TeachersTable/TeachersTable";
import TeacherCard from "./TeacherCard";
import classes from "./TeachersMain.module.css";

const TeachersMain = () => {
  return (
    <>
      <div className={classes.wrapper}>
        <TeacherCard />
        <TeachersTable />
      </div>
    </>
  );
};

export default TeachersMain;
