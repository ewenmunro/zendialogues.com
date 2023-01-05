import React, { Fragment } from "react";
import "./styles.css";

const JoinCommunity = () => {
  return (
    <Fragment>
      <p className="Text">
        Share insights with other like-minded community members and/or make a
        recommendation for a question, or questions, you'd like The Buddha to
        answer
      </p>
      <a
        href="https://discord.com/invite/ARsEvfbXc6"
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="Join-Community-Btn">Join Community</button>
      </a>
    </Fragment>
  );
};

export default JoinCommunity;
