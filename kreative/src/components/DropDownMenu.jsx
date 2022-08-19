import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { openLogModal } from "../store/actions/LogAction";
import { openRegModal } from "../store/actions/RegAction";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";

export default function DropDownMenu({ src, alt }) {
    const dispatch = useDispatch();

    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

    const isUserLogin = useSelector(
        (state) => state.isUserLogIn.isUserLogInInfo
    );
    const [userIsLogin, setUserIsLogin] = useState(isUserLogin);

    useEffect(() => {
        setUserIsLogin(isUserLogin.id);
    }, [isUserLogin.id, isUserLogin]);

    const onClick = () => setIsActive(!isActive);

    return (
        <div className="menu-container">
            <button onClick={onClick} className="menu-button">
                <img src={src} alt={alt} />
            </button>
            <nav
                ref={dropdownRef}
                className={`menu ${isActive ? "active" : "inactive"}`}
            >
                <ul>
                    <NavLink className="navlink" to="likes">
                        <li
                            onClick={onClick}
                            className={userIsLogin ? "" : "hide"}
                        >
                            Favorites      {/* Избранное */}
                        </li>
                    </NavLink>
                    <NavLink className="navlink" to="reviews">
                        <li
                            onClick={onClick}
                            className={userIsLogin ? "" : "hide"}
                        >
                            My reviews  {/* Мои отзывы */}
                        </li>
                    </NavLink>
                    <NavLink className="navlink" to="settings">
                        <li
                            onClick={onClick}
                            className={userIsLogin ? "" : "hide"}
                        >
                            Account Settings    {/* Управление аккаунтом */}
                        </li>
                    </NavLink>
                    <NavLink className="navlink" to="cart">
                        <li
                            onClick={onClick}
                            className={userIsLogin ? "" : "hide"}
                        >
                            Cart {/* Корзина */}
                        </li>
                    </NavLink>
                    <li
                        className={userIsLogin ? "hide" : ""}
                        onClick={() => {
                            dispatch(openRegModal(true));
                            onClick();
                        }}
                    >
                        Register  {/* Зарегистрироваться */}
                    </li>
                    <li
                        className={userIsLogin ? "hide" : ""}
                        onClick={() => {
                            dispatch(openLogModal(true));
                            onClick();
                        }}
                    >
                        Sign in {/* Войти в аккаунт */}
                    </li>
                    <NavLink className="navlink" to="admin">
                        <li
                            onClick={onClick}
                            className={userIsLogin ? "" : "hide"}
                        >
                            For Admins {/* Админка */}
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>
    );
}
