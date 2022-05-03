import { useSelect } from "@mui/base";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { openLogModal } from "../store/actions/LogAction";
import { openRegModal } from "../store/actions/RegAction";
import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function DropDownMenu({src, alt}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  //const [openReg, setOpenReg] = useState(Boolean)
  const onClick = () => setIsActive(!isActive);
  let userIsReg = false;
  const dispatch = useDispatch();
  
// useEffect(() => {
//   console.log("click");
//   dispatch(openRegModal(openReg));
// }, [dispatch, openReg])


  
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
            <li>
                Избранное
            </li>
            <li>
                <NavLink to='reviews'>Мои отзывы</NavLink>
                
            </li>
            <li>
                Управление аккаунтом
            </li>
            <li>
                <NavLink to='cart'>Корзина</NavLink>
            </li>
            <li className={userIsReg ? "hide" : ""} onClick={() => dispatch(openRegModal(true))}>
                Зарегистрироваться
            </li>
            <li onClick={() => dispatch(openLogModal(true))}>
                Войти в аккаунт
            </li>
            <li>
              Админка
            </li>
          </ul>
        </nav>
      </div>
  );
}
