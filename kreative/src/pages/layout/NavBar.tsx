import { FC } from "react";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DropDownMenu from "../../components/DropDownMenu";
import InputSearch from "../../components/InputSearch";
import { leftSideMenuStatus } from "../../store/actions/leftSideMenuStatusAction";

const NavBar: FC = () => {
    const userName = useSelector(
        (state: RootStateOrAny) => state.isUserLogIn.isUserLogInInfo
    );
    const whatInTheCart = useSelector(
        (state: RootStateOrAny) => state.loadCart.inCart
    );
    const checkExistingLikes = useSelector(
        (state: RootStateOrAny) => state.loadLikes.inLikes
    );
    const dispatch = useDispatch();

    const burgerPress = () => {
        dispatch(leftSideMenuStatus(true));
    };

    return (
        <>
            <nav className="nav_main container">
                <div className="nav_top">
                    <div>
                        <ul className="nav_top-list">
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="/"
                                >
                                    Главная
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="about"
                                >
                                    О нас
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="blog"
                                >
                                    Блог
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="delivery"
                                >
                                    Оплата и доставка
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="review"
                                >
                                    Отзывы
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="contacts"
                                >
                                    Контакты
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="nav_top-contact">
                        <img src="/assets/img/phone-call.svg" alt="" />
                        <p>
                            <a
                                href="tel:+375295779286"
                                title="Связаться с дизайнером"
                            >
                                8(029)5779286
                            </a>
                        </p>
                    </div>
                </div>
                <div className="nav_middle">
                    <div className="nav_middle-logo">
                        <NavLink to="/">
                            <img
                                src="/assets/img/logo.png"
                                alt="логотип Креатив"
                            />
                        </NavLink>
                    </div>
                    <div className="nav_middle-right">
                        <div className="nav_middle-right-input">
                            <InputSearch
                                className="nav_middle-input"
                                placeholder="Поиск товара"
                            />
                        </div>
                        <div className="nav_middle-cart">
                            <div className="nav_middle-cart-user">
                                <p>Добрый день, {userName.firstName}</p>
                            </div>
                            <div className="nav_middle-cart-block">
                                <div>
                                    <img
                                        className="nav_middle-cart-block-img"
                                        src={userName.avatar}
                                        alt="Регистрация"
                                    />
                                </div>
                                <div>
                                    <DropDownMenu
                                        src={`/assets/img/cart_man.svg`}
                                        alt={"Регистрация"}
                                    />
                                </div>
                                <div>
                                    <NavLink className="nav-icons" to="likes">
                                        <img
                                            src="/assets/img/cart_heart.svg"
                                            alt="Избранное"
                                        />
                                    </NavLink>
                                    <span className="nav_middle-cart-block-span-heart">
                                        {checkExistingLikes.length}
                                    </span>
                                </div>
                                <div>
                                    <NavLink className="nav-icons" to="cart">
                                        <img
                                            src="/assets/img/cart.svg"
                                            alt="Корзина"
                                        />
                                    </NavLink>
                                    <span className="nav_middle-cart-block-span-cart">
                                        {whatInTheCart.length}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav_bottom">
                    <button onClick={burgerPress} className="nav_bottom-burger">
                        <span />
                    </button>
                    <div>
                        <ul className="nav_bottom-list">
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="catalog"
                                >
                                    Каталог
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_bottom-list" to="/catalog/craft">
                                    Рукоделие
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_bottom-list" to="/catalog/paint">
                                    Рисование
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_bottom-list" to="/catalog/model">
                                    Моделирование
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_bottom-list" to="/catalog/decor">
                                    Украшение
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_bottom-list" to="/catalog/flora">
                                    Флористика
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="workshop"
                                >
                                    Мастерская
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_bottom-list" to="new">
                                    Новинки
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="discount"
                                >
                                    Скидки
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default NavBar;
