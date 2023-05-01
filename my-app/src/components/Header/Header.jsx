import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import RegisterImage from "../../assets/images/icons/bx-log-in 1.png";
import Nav from "./Nav/Nav";
import s from "./Header.module.css";

const Header = (props) => {
  
  const logoutUser = () => {

  }


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
            <div>
            <NavLink
              to={`/profile`}
              style={{ textDecoration: "none" }}
              className={s.register}
            >
              <p>{props.login}</p>
            </NavLink>
            <button onClick={logoutUser}>Выйти</button>
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
