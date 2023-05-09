import React from "react";
import classes from "./userPage.module.css";

const UserPage = () => {
  return (
    <div className={classes.theMainestDiv}>
      <h1>Account</h1>
      <div className={classes.mainDiv}>
        <img
          width="200"
          height="200"
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt=""
        />
        <div className={classes.infoDiv}>
          <div className={classes.firstInfo}>
            <p>Name: </p>
            <p>Surname: </p>
            <p>Date of birth: </p>
            <p>Mail: </p>
            <p>Number: </p>
          </div>
          <div className={classes.secondInfo}>
            <p>Aliia</p>
            <p>Malaeva</p>
            <p>2004.22.01</p>
            <p>malaevaid@gmail.com</p>
            <p>+996 554 065 075</p>
          </div>
        </div>
      </div>
      <div className={classes.aboutDiv}>
        <p className={classes.aboutP}>About:</p>
        <p>
          Shopping is my passion, and I'm always excited to explore new
          boutiques and online stores to find the perfect addition to my
          collection. I have an eye for detail and know how to put together
          outfits that make me feel confident and stylish.
        </p>
      </div>
    </div>
  );
};

export default UserPage;
