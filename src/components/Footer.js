import React, { Fragment } from "react";
import "./styles.css";

const Footer = () => {
  return (
    <Fragment>
      <div className="Footer">
        <p>
          If you are enjoying zendialogues.com, you can support the project by
          sharing it and/or donating via my website:{" "}
          <a
            href="https://ewenmunro.com/donate"
            target="_blank"
            rel="noopener noreferrer"
          >
            ewenmunro.com/donate
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
