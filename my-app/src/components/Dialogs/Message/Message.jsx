import React from "react";
import s from "./../Dialogs.module.css";
import ProfileImage from "../../../assets/images/icons/unknown-profile-icon.webp";

const Message = (props) => {
  return <div className={s.message}>
    <div>
      <img src={ProfileImage} alt="" />
    </div>
    {props.message}
    </div>;
};

export default Message;
