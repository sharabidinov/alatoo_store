import React from "react";
import classes from "./registration.module.css";

const RegistrationPage = () => {
  return (
    <div className={classes.mainDiv}>
      <h1>REGISTRATION</h1>
      <div className={classes.inputs}>
        <input type="text" placeholder="E-mail address" />
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Password confirmation" />
        <input type="date" placeholder="Age" />
        <div className={classes.btn}>
          <span style={{ color: "black" }}>SIGN UP</span>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
