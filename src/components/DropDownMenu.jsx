import { useSelect } from "@mui/base";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
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
              <a href="#">Избранное</a>
            </li>
            <li>
              <a href="#">Мои отзывы</a>
            </li>
            <li>
              <a href="#">Управление аккаунтом</a>
            </li>
            <li>
              <a href="#">Корзина</a>
            </li>
            <li className={userIsReg ? "hide" : ""}>
              <a onClick={() => dispatch(openRegModal(true))} href="#">Зарегистрироваться</a>
            </li>
            <li>
              <a onClick={() => dispatch(openLogModal(true))} href="#">Войти в аккаунт</a>
            </li>
            <li>
              <a href="#">Админка</a>
            </li>
          </ul>
        </nav>
      </div>
  );
}
