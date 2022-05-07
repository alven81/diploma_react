import { FC } from "react"
import { RootStateOrAny, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import DropDownMenu from "../../components/DropDownMenu"
import InputSearch from "../../components/InputSearch"

const NavBar: FC = () => {

    const userName = useSelector((state: RootStateOrAny) => state.isUserLogIn.isUserLogInInfo)
    const whatInTheCart = useSelector((state: RootStateOrAny) => state.loadCart.inCart)

    return (
        <>
            <nav className="nav_main container">
                <div className="nav_top">
                    <div>
                        <ul className="nav_top-list">
                            <li><NavLink className="nav_top-list-navlink" to="/">Главная</NavLink></li>
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
                        <InputSearch className="nav_middle-input" placeholder="Поиск товара"/>
                    </div>
                    <div className="nav_middle-cart">
                        <div className="nav_middle-cart-user">
                            <p>Добрый день, {userName.firstName}</p>
                        </div>
                        <div className="nav_middle-cart-block">
                            <div>
                                <img className="nav_middle-cart-block-img" src={userName.avatar} alt="Регистрация" />
                            </div>
                            <div>
                                <DropDownMenu src={`/assets/img/cart_man.svg`} alt={"Регистрация"}/>
                            </div >
                            <div>
                                <img src="/assets/img/cart_heart.svg" alt="Избранное" />
                                <span className="nav_middle-cart-block-span-heart">0</span>
                            </div>
                            <div >
                            <NavLink className="nav-icons" to='cart'><img  src="/assets/img/cart.svg" alt="Корзина" /></NavLink>
                                <span className="nav_middle-cart-block-span-cart">{whatInTheCart.length}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav_bottom">
                    <ul className="nav_bottom-list">
                        <li><NavLink className="nav_bottom-list" to='catalog'>Каталог</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='craft'>Рукоделие</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='paint'>Рисование</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='model'>Моделирование</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='decor'>Украшение</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='flora'>Флористика</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='workshop'>Мастерская</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='new'>Новинки</NavLink></li>
                        <li><NavLink className="nav_bottom-list" to='discount'>Скидки</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default NavBar