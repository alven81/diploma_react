import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import DropDownMenu from "../../components/DropDownMenu";
import InputSearch from "../../components/InputSearch";
import { leftSideMenuStatus } from "../../store/actions/leftSideMenuStatusAction";
import { uiLanguage } from "../../store/actions/uiLanguage";
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
} from "../../lng";

const NavBar = () => {
    const userName = useSelector((state) => state.isUserLogIn.isUserLogInInfo);
    const whatInTheCart = useSelector((state) => state.loadCart.inCart);
    const checkExistingLikes = useSelector((state) => state.loadLikes.inLikes);
    const setLang = useSelector((state) => state.loadLanguage.languageIs);
    const dispatch = useDispatch();

    const burgerPress = () => {
        dispatch(leftSideMenuStatus(true));
    };

    function setLanguage(lang) {
        dispatch(uiLanguage(lang));
    }

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
                                    {main_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="about"
                                >
                                    {about_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="blog"
                                >
                                    {blog_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="delivery"
                                >
                                    {payment_ui[setLang]}{" "}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="review"
                                >
                                    {reviews_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_top-list-navlink"
                                    to="contacts"
                                >
                                    {contacts_ui[setLang]}
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="nav_top-contact">
                        <div className="nav_top-lang">
                            <button
                                onClick={() => setLanguage("eng")}
                                className="nav_top-lang-en"
                            ></button>
                            <button
                                onClick={() => setLanguage("pol")}
                                className="nav_top-lang-pl"
                            ></button>
                            <button
                                onClick={() => setLanguage("rus")}
                                className="nav_top-lang-ru"
                            ></button>
                        </div>
                        <img src="/assets/img/phone-call.svg" alt="" />
                        <p>
                            <a
                                href="tel:+48514556773"
                                title={contacts_designer_message[setLang]}
                            >
                                +48 514 556 773
                            </a>
                        </p>
                    </div>
                </div>
                <div className="nav_middle">
                    <div className="nav_middle-logo">
                        <NavLink to="/">
                            <img
                                src="/assets/img/logo.png"
                                alt={logo_message[setLang]}
                            />
                        </NavLink>
                    </div>
                    <div className="nav_middle-right">
                        <div className="nav_middle-right-input">
                            <InputSearch
                                className="nav_middle-input"
                                placeholder={search_message[setLang]}
                            />
                        </div>
                        <div className="nav_middle-cart">
                            <div className="nav_middle-cart-user">
                                <p>
                                    {hello_message[setLang]},{" "}
                                    {userName.firstName}
                                </p>{" "}
                            </div>
                            <div className="nav_middle-cart-block">
                                <div>
                                    <img
                                        className="nav_middle-cart-block-img"
                                        src={userName.avatar}
                                        alt={reg_ui[setLang]}
                                    />
                                </div>
                                <div>
                                    <DropDownMenu
                                        src={`/assets/img/cart_man.svg`}
                                        alt={reg_ui[setLang]}
                                    />
                                </div>
                                <div>
                                    <NavLink className="nav-icons" to="likes">
                                        <img
                                            src="/assets/img/cart_heart.svg"
                                            alt={favorites_ui[setLang]}
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
                                            alt={cart_ui[setLang]}
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
                                    {catalog_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="/catalog/craft"
                                >
                                    {needlework_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="/catalog/paint"
                                >
                                    {draw_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="/catalog/model"
                                >
                                    {model_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="/catalog/decor"
                                >
                                    {decor_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="/catalog/flora"
                                >
                                    {flora_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="workshop"
                                >
                                    {workshop_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="nav_bottom-list" to="new">
                                    {new_ui[setLang]}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className="nav_bottom-list"
                                    to="discount"
                                >
                                    {discounts_ui[setLang]}
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
