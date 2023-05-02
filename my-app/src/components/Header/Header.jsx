import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import RegisterImage from "../../assets/images/icons/bx-log-in 1.png";
import Nav from "./Nav/Nav";
import s from "./Header.module.css";
import { logoutAPI } from "../../api/logoutAPI";

const Header = (props) => {
  
  const logoutUser = () => {
    logoutAPI.logoutUser();
    localStorage.removeItem("token");
    localStorage.removeItem("login");
    localStorage.removeItem("isAuth");
    window.location.reload();
  }


  return (
    <header className={s.header}>

      <div className={s.logo}>
        <p>Olympia Gym</p>
      </div>

      <Nav userRole={props.userRole} />

      {props.isFetching ? (
        <div className={s.preloader__wrapper}>
          <Preloader />
        </div>
      ) : (
        <div className={s.register__item}>
          {localStorage.getItem("isAuth") ? (
            <div>
            <NavLink
              to={`/profile`}
              style={{ textDecoration: "none" }}
              className={s.register}
            >
              {/* <p>{props.login}</p> */}
              <p>{localStorage.getItem("login")}</p>
            </NavLink>
            <button onClick={logoutUser} className={s.logout__button}>
              <NavLink to="/Main" className={s.logout__button}>Выйти</NavLink>
            </button>
            </div>
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
