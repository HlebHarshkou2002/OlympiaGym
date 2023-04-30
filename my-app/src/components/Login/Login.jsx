import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from "./Login.module.css";

const Login = (props) => {
  console.log("Данные из пропсов: ", props);
  let login = React.createRef();

  let onAddLogin = () => {
    let text = login.current.value;
    console.log("Ваш логин: ", text);
  };

  return (
    <div className={s.login__form}>
      <h1>Вход</h1>
      <div className={s.login__fields}>
        <div className={s.login__block}>
          <p>Login: </p>
          <input type="text" ref={login} />
        </div>
        <div className={s.password__block}>
          <p>Password: </p>
          <input type="text" />
        </div>
      </div>

      <div className={s.submit__block}>
        <button onClick={onAddLogin}>Войти</button>
        <div>
          <NavLink to={"/registration"}>Зарегестрироваться</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Login;
