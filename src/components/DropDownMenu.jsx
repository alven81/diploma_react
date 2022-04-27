import React, { useRef } from "react";

import { useDetectOutsideClick } from "../utils/useDetectOutsideClick";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function DropDownMenu({src, alt}) {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
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
            <li>
              <a href="#">Войти в аккаунт</a>
            </li>
            <li>
              <a href="#">Админка</a>
            </li>
          </ul>
        </nav>
      </div>
  );
}
