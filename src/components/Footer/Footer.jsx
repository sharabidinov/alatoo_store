import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <div>
      <div>
        <p className={classes.companyName}>
          © 2023 ALA-TOO INTERNATIONAL UNIVERSITY
        </p>
        <div className={classes.footerFirst}>
          <a href="/">
            <div className={`${classes.icon} ${classes.iconFill}`}>
              <i
                style={{ marginLeft: "11px" }}
                className="fa-brands fa-instagram"></i>
            </div>
          </a>

          <a href="/">
            <div className={`${classes.icon} ${classes.iconCollapse}`}>
              <i
                style={{ marginLeft: "10px" }}
                className="fa-brands fa-facebook"></i>
            </div>
          </a>

          <a href="/">
            <div className={`${classes.icon} ${classes.iconRotate}`}>
              <i
                style={{ marginLeft: "10px" }}
                className="fa-brands fa-twitter"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
