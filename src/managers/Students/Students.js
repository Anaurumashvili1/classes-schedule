import "./main.css";
import StudentsList from "./StudentsList";
import Header from "./Header";

const Students = () => {
  return (
    <div className="wrapper">
      <Header subjects="სასურველი საგნები" />
      <br></br>
      <StudentsList></StudentsList>
    </div>
  );
};
export default Students;
