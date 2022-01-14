import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.headerName}>სახელი, გვარი</div>
        <div className={classes.headerSubjects}>{props.subjects}</div>
        <div className={classes.headerInfo}>დამატებითი ინფორმაცია</div>
        <div className={classes.headerDelete}>წაშლა</div>
      </div>
    </>
  );
};

export default Header;
