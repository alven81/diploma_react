import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import DropDownMenu from "components/DropDownMenu";
import InputSearch from "components/InputSearch";
import { leftSideMenuStatus } from "store/actions/leftSideMenuStatusAction";
import { uiLanguage } from "store/actions/uiLanguage";
import {
    main_ui,
    about_ui,
    blog_ui,
    payment_ui,
    reviews_ui,
    contacts_ui,
    contacts_designer_message,
    logo_message,
    search_message,
    hello_message,
    reg_ui,
    favorites_ui,
    cart_ui,
    catalog_ui,
    needlework_ui,
    draw_ui,
    model_ui,
    decor_ui,
    flora_ui,
    workshop_ui,
    new_ui,
    discounts_ui,
} from "lng";
import IIsUserLogin from "types/IIsUserLogin";
import IInCart from "types/inCart";
import IInLikes from "types/IInLikes";
import ICategoryLanguage from "types/ICategoryLanguage";

const NavBar = () => {
    const userName: IIsUserLogin = useSelector((state: IIsUserLogin) => state.isUserLogIn.isUserLogInInfo);
    const whatInTheCart: IInCart = useSelector((state: IInCart) => state.loadCart.inCart);
    const checkExistingLikes: IInLikes = useSelector((state: IInLikes) => state.loadLikes.inLikes);
    const setLang: string = useSelector((state: ICategoryLanguage) => state.loadLanguage.languageIs);
    const dispatch = useDispatch();

    const burgerPress = () => {
        dispatch(leftSideMenuStatus(true));
    };

    function setLanguage(lang: string) {
        dispatch(uiLanguage(lang));
    }

    function createLink(link: ICategoryLanguage, setLang: string): string {
        return link[setLang]
    }

    return (
        <nav className="nav_main container">
            <div className="nav_top">
                <div>
                    <ul className="nav_top-list">
                        <li>
                            <NavLink
                                className="nav_top-list-navlink"
                                to="/"
                            >
                                {createLink(main_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_top-list-navlink"
                                to="about"
                            >
                                {createLink(about_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_top-list-navlink"
                                to="blog"
                            >
                                {createLink(blog_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_top-list-navlink"
                                to="delivery"
                            >
                                {createLink(payment_ui, setLang)}{" "}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_top-list-navlink"
                                to="review"
                            >
                                {createLink(reviews_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_top-list-navlink"
                                to="contacts"
                            >
                                {createLink(contacts_ui, setLang)}
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className="nav_top-contact">
                    <div className="nav_top-lang">
                        <button
                            onClick={() => setLanguage("eng")}
                            className="nav_top-lang-en"
                        />
                        <button
                            onClick={() => setLanguage("pol")}
                            className="nav_top-lang-pl"
                        />
                        <button
                            onClick={() => setLanguage("rus")}
                            className="nav_top-lang-ru"
                        />
                    </div>
                    <img src="/assets/img/phone-call.svg" alt="" />
                    <p>
                        <a
                            href="tel:+12 345 678 900"
                            title={createLink(contacts_designer_message, setLang)}
                        >
                            +12 345 678 900
                        </a>
                    </p>
                </div>
            </div>
            <div className="nav_middle">
                <div className="nav_middle-logo">
                    <NavLink to="/">
                        <img
                            src="/assets/img/logo.png"
                            alt={createLink(logo_message, setLang)}
                        />
                    </NavLink>
                </div>
                <div className="nav_middle-right">
                    <div className="nav_middle-right-input">
                        <InputSearch
                            className="nav_middle-input"
                            placeholder={createLink(search_message, setLang)}
                        />
                    </div>
                    <div className="nav_middle-cart">
                        <div className="nav_middle-cart-user">
                            <p>
                                {`${createLink(hello_message, setLang)}, ${userName.firstName}`}
                            </p>
                        </div>
                        <div className="nav_middle-cart-block">
                            <div>
                                <img
                                    className="nav_middle-cart-block-img"
                                    src={userName.avatar}
                                    alt={createLink(reg_ui, setLang)}
                                />
                            </div>
                            <div>
                                {<DropDownMenu
                                    src={`/assets/img/cart_man.svg`}
                                    alt={createLink(reg_ui, setLang)}
                                />}
                            </div>
                            <div>
                                <NavLink className="nav-icons" to="likes">
                                    <img
                                        src="/assets/img/cart_heart.svg"
                                        alt={createLink(favorites_ui, setLang)}
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
                                        alt={createLink(cart_ui, setLang)}
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
                                {createLink(catalog_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_bottom-list"
                                to="/catalog/craft"
                            >
                                {createLink(needlework_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_bottom-list"
                                to="/catalog/paint"
                            >
                                {createLink(draw_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_bottom-list"
                                to="/catalog/model"
                            >
                                {createLink(model_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_bottom-list"
                                to="/catalog/decor"
                            >
                                {createLink(decor_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_bottom-list"
                                to="/catalog/flora"
                            >
                                {createLink(flora_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_bottom-list"
                                to="workshop"
                            >
                                {createLink(workshop_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink className="nav_bottom-list" to="new">
                                {createLink(new_ui, setLang)}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className="nav_bottom-list"
                                to="discount"
                            >
                                {createLink(discounts_ui, setLang)}
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default NavBar;
