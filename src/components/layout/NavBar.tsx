import { FC } from "react"
import { NavLink } from "react-router-dom"
import InputSearch from "../InputSearch"

const NavBar: FC = () => {
    return (
        <>
            <nav className="nav_main container">
                <div className="nav_top">
                    <div>
                        <ul className="nav_top-list">
                            <li><NavLink to="/">Главная</NavLink></li>
                            <li>О нас</li>
                            <li>Блог</li>
                            <li>Оплата и доставка</li>
                            <li>Отзывы</li>
                            <li>Контакты</li>
                        </ul>
                    </div>
                    <div className="nav_top-contact">
                        <img src="/assets/img/phone-call.svg" alt=""/>
                        <p>8(029)5779286</p>
                    </div>
                </div>
                <div className="nav_middle">
                    <div className="nav_middle-logo">
                        <img src="/assets/img/logo.png" alt="логотип Креатив"/>
                    </div>
                    <div>
                        <InputSearch className="nav_middle-input" placeholder="Поиск товара"/><span className="nav_middle-loupe"/>
                    </div>
                    <div className="nav_middle-cart">
                        <img src="/assets/img/cart_man.svg" alt="Регистрация" />
                        <img src="/assets/img/cart_heart.svg" alt="Избранное" />
                        <span className="nav_middle-cart-span-heart">0</span>
                        <img src="/assets/img/cart.svg" alt="Корзина" />
                        <span className="nav_middle-cart-span-cart">0</span>
                    </div>
                </div>
                <div className="nav_bottom">
                    <ul className="nav_bottom-list">
                        <li><NavLink to='catalog'>Каталог</NavLink></li>
                        <li><NavLink to='craft'>Рукоделие</NavLink></li>
                        <li><NavLink to='paint'>Рисование</NavLink></li>
                        <li><NavLink to='model'>Моделирование</NavLink></li>
                        <li><NavLink to='decor'>Украшение</NavLink></li>
                        <li><NavLink to='flora'>Флористика</NavLink></li>
                        <li><NavLink to='workshop'>Мастерская</NavLink></li>
                        <li><NavLink to='new'>Новинки</NavLink></li>
                        <li><NavLink to='discount'>Скидки</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavBar