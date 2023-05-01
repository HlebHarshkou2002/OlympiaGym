import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from "./Registration.module.css";
import { registrationAPI } from "../../api/registrationAPI";

const Registration = (props) => {
  console.log("Данные из пропсов: ", props);
  let login = React.createRef();
  let password = React.createRef();

  let onUserRegistration= () => {
    let userLogin = login.current.value;
    let userPassword = password.current.value;
    props.setRegistrationUserData(userLogin, userPassword);
    registrationAPI.registrateUser(userLogin, userPassword)
      .then((response) => {
        if(response.data.status === "ACTIVE") {
          alert("Вы успешно зарегестрировались!")
        }
      })
      .catch((error) => console.log(error));

    console.log("Ваш логин: ", userLogin);
    console.log("Ваш пароль: ", userPassword);
  };

  return (
    <div className={s.registration__form}>
        <h1>Регистрация</h1>
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
        <button onClick={onUserRegistration}>Зарегестрироваться</button>
        <div>
          <NavLink to={"/login"}>Вернуться</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Registration;
