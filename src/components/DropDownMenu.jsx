import { useSelect } from "@mui/base";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openLogModal } from "../store/actions/LogAction";
import { openRegModal } from "../store/actions/RegAction";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function DropDownMenu({src, alt}) {

    const dispatch = useDispatch();

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const isUserLogin = useSelector(state => state.isUserLogIn.isUserLogInInfo) 
    const [userIsLogin, setUserIsLogin] = useState(isUserLogin);

    useEffect (() => {
        setUserIsLogin(isUserLogin.id)
    }, [isUserLogin.id, isUserLogin])
    


    const onClick = () => setIsActive(!isActive);

    //let userIsLogin = false;


  
return (
    <div className="menu-container">
        <button onClick={onClick} className="menu-button">
            <img src={src} alt={alt} />
        </button>
        <nav ref={dropdownRef} className={`menu ${isActive ? "active" : "inactive"}`}>
            <ul>
                <li className={userIsLogin ? "" : "hide"}>
                    Избранное
                </li>
                <NavLink className="navlink" to='reviews'>
                    <li className={userIsLogin ? "" : "hide"}>
                        Мои отзывы
                    </li>
                </NavLink>
                <li className={userIsLogin ? "" : "hide"}>
                    Управление аккаунтом
                </li>
                <NavLink  className="navlink" to='cart'>
                    <li className={userIsLogin ? "" : "hide"}>
                        Корзина
                    </li>
                </NavLink>
                <li className={userIsLogin ? "hide" : ""} onClick={() => dispatch(openRegModal(true))}>
                    Зарегистрироваться
                </li>
                <li className={userIsLogin ? "hide" : ""} onClick={() => dispatch(openLogModal(true))}>
                    Войти в аккаунт
                </li>
                <NavLink  className="navlink" to='administration'>
                    <li className={userIsLogin ? "" : "hide"}>
                        Админка
                    </li>
                </NavLink>
            </ul>
        </nav>
    </div>
  );
}
