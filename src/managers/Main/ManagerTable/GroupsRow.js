import classes from "./GroupsRow.module.css";
import TableSubject from "./TableSubject";
import TableTeacher from "./TableTeacher";
const GroupsRow = (props) => {
  const rooms = [1, 2, 3, 4, 5, 6];

  return (
    <>
      <div className={classes.roomrow}>
        <div className={classes.timerow}>{props.time}</div>
        {rooms.map((room, index) => {
          // console.log(room, index);
          return (
            <div
              className={classes.row}
              id={props.id[index]}
              name={props.name}
              key={index}>
              <div className={classes.classInfo}>
                <TableSubject
                  subjectTrigger={props.subjectTrigger}
                  subjectValue={props.subjectValue}
                  id={props.id}></TableSubject>
                <TableTeacher
                  teacherTrigger={props.teacherTrigger}
                  className={classes.teacher}
                  teacherValue={props.teacherValue}></TableTeacher>
                <div className={classes.student}>მოსწავლე 1</div>
                <div className={classes.student}>მოსწავლე 2</div>
                <div className={classes.student}>მოსწავლე 3</div>
                <div className={classes.student}>მოსწავლე 4</div>
                <div className={classes.student}>მოსწავლე 5</div>
                <div className={classes.student}>მოსწავლე 6</div>
                <div className={classes.student}>მოსწავლე 7</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GroupsRow;
