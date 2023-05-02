import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./Profile_Info.module.css";
import ProfileImage from "../../../assets/images/icons/unknown-profile-icon.webp";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  console.log(props.profile);
  return (
    <div className={s.profileInfo}>
        <div className={s.profileImages}>
          <div className={s.imagesWrapper}>
            <img
              className={s.profileImageMain}
              src={ProfileImage}
              alt="Main image"
            />
          </div>

          <div className={s.profileDescription}>
            <div className={s.profileName}>
              <span>{localStorage.getItem("login")}</span>
            </div>
          </div>
        </div>

    </div>
  );
};

export default ProfileInfo;
