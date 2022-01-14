import "./Button.css";

const TableTeacher = (props) => {
  return (
    <>
      {props.teacherValue ? (
        <div className="row">
          {props.teacherValue}
          <button className="deletebutton">x</button>
        </div>
      ) : (
        <button className="button" onClick={props.teacherTrigger}>
          + მასწავლებელი
        </button>
      )}

      <div></div>
    </>
  );
};

export default TableTeacher;
