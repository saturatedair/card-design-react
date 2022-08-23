import React from "react";
import avatar from "../images/avatar.png";

function Avatar() {
  return (
    <div className="avatar">
      <img src={avatar} className="card-avatar" alt="card-avatar" />
    </div>
  );
}

export default Avatar;
