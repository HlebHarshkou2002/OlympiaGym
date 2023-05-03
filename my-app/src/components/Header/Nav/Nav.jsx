import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css';

const Nav = (props) => {

    return (
        <nav className={s.nav}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Profile" className = { navData => navData.isActive ? s.active : s.item }>Мой профиль</NavLink>
            </div>
            <div className={`${s.item} ${s.active}` }>
                {localStorage.getItem("login") === "Admin" ?
                    ""
                    : 
                    <NavLink to="/Dialogs" className = { navData => navData.isActive ? s.active : s.item }>Задать вопрос</NavLink>
                }
            </div>
            <div className={s.item}>
                {localStorage.getItem("login") === "Admin" ?
                    <NavLink to="/AllOrders" className = { navData => navData.isActive ? s.active : s.item }>Все продажи</NavLink>
                    : 
                    <NavLink to="/Main" className = { navData => navData.isActive ? s.active : s.item }>Главная</NavLink>
                }
            </div>
            <div className={s.item}>
            <NavLink to="/Services" className = { navData => navData.isActive ? s.active : s.item }>Наши услуги</NavLink>
            </div>
            <div className={s.item}>
                {localStorage.getItem("login") === "Admin" ?
                    <NavLink to="/EditCategories" className = { navData => navData.isActive ? s.active : s.item }>Управление категориями</NavLink>
                    : 
                    <NavLink to="/Users" className = { navData => navData.isActive ? s.active : s.item }>Найти друзей</NavLink>
                }
            </div>
            <div className={s.item}>
                {localStorage.getItem("login") === "Admin" ?
                    <NavLink to="/EditServices" className = { navData => navData.isActive ? s.active : s.item }>Управление услугами</NavLink>
                    : 
                    <a>Вопросы и ответы</a> 
                 }
                
            </div>
        </nav>
    );
}

export default Nav;