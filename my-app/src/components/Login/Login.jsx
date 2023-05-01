import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from "./Login.module.css";
import { loginAPI } from "../../api/loginAPI";


const Login = (props) => {
  console.log("Данные из пропсов: ", props);
  let login = React.createRef();
  let password = React.createRef();

  let onAddLogin = () => {
    let userLogin = login.current.value;
    let userPassword = password.current.value;

    loginAPI.loginUser(userLogin, userPassword)
      .then((response) => {
        if(response.status === 200) {
          props.setUserData(response.data.email, userLogin, userPassword)
          alert("Вы успешно авторизовались!")
        }
        console.log("Response: ", response)
        localStorage.setItem("token", response.data.token)
      })
      .catch((error) => console.log(error));
    console.log("Ваш логин: ", userLogin);
    console.log("Ваш пароль: ", userPassword);
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
          <input type="text" ref={password}/>
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
