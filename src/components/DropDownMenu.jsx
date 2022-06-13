import { useSelect } from "@mui/base";
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

	//let userIsLogin = false;

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
					<li onClick={onClick} className={userIsLogin ? "" : "hide"}>
						Избранное
					</li>
					<NavLink className="navlink" to="reviews">
						<li
							onClick={onClick}
							className={userIsLogin ? "" : "hide"}
						>
							Мои отзывы
						</li>
					</NavLink>
					<li onClick={onClick} className={userIsLogin ? "" : "hide"}>
						Управление аккаунтом
					</li>
					<NavLink className="navlink" to="cart">
						<li
							onClick={onClick}
							className={userIsLogin ? "" : "hide"}
						>
							Корзина
						</li>
					</NavLink>
					<li
						className={userIsLogin ? "hide" : ""}
						onClick={() => {
							dispatch(openRegModal(true));
							onClick();
						}}
					>
						Зарегистрироваться
					</li>
					<li
						className={userIsLogin ? "hide" : ""}
						onClick={() => {
							dispatch(openLogModal(true));
							onClick();
						}}
					>
						Войти в аккаунт
					</li>
					<NavLink className="navlink" to="administration">
						<li
							onClick={onClick}
							className={userIsLogin ? "" : "hide"}
						>
							Админка
						</li>
					</NavLink>
				</ul>
			</nav>
		</div>
	);
}
