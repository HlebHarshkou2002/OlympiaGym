import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import RegisterImage from "../../assets/images/icons/bx-log-in 1.png";
import Nav from "./Nav/Nav";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>

      <div className={s.logo}>
        <p>Olympia Gym</p>
      </div>

      <Nav />

      {props.isFetching ? (
        <div className={s.preloader__wrapper}>
          <Preloader />
        </div>
      ) : (
        <div className={s.register__item}>
          {props.isAuth ? (
            <NavLink
              to={`/profile/` + props.id}
              style={{ textDecoration: "none" }}
              className={s.register}
            >
              <p>{props.login}</p>
            </NavLink>
          ) : (
            <NavLink className={s.register} to={"/login"}>
              <img src={RegisterImage} alt="Войти" />
              <p>Вход</p>
            </NavLink>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
