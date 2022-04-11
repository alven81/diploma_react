import { FC, useRef } from "react"
import InputSearch from "./InputSearch"
import "./NavBar.scss"

const NavBar: FC = () => {
    //const InputSearch = useRef<HTMLInputElement>(null);
    return (
        <>
            <nav className="nav_main container">
                <div className="nav_top">
                    <div>
                        <ul className="nav_top-list">
                            <li>Главная</li>
                            <li>О нас</li>
                            <li>Блог</li>
                            <li>Оплата и доставка</li>
                            <li>Отзывы</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className="nav_top-contact">
                        <img src="./assets/img/phone-call.svg" alt=""/>
                        <p>8(029)5779286</p>
                    </div>
                </div>
                <div className="nav_middle">
                    <div className="nav_middle-logo">
                        <img src="./assets/img/logo.png" alt="логотип Креатив"/>
                    </div>
                    <div>
                        <InputSearch className="nav_middle-input"/><span className="nav_middle-loupe"/>
                    </div>
                    <div className="nav_middle-cart">
                        <img src="./assets/img/cart_man.svg" alt="Регистрация" />
                        <img src="./assets/img/cart_heart.svg" alt="Избранное" />
                        <img src="./assets/img/cart.svg" alt="Корзина" />
                    </div>
                </div>
                <div className="nav_bottom">
                    <ul className="nav_bottom-list">
                        <li>Каталог</li>
                        <li>Рукоделие</li>
                        <li>Рисование</li>
                        <li>Моделирование</li>
                        <li>Украшение</li>
                        <li>Флогистика</li>
                        <li>Мастерская</li>
                        <li>Новинки</li>
                        <li>Скидки</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavBar