import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showAlertMessage } from "../../../store/actions/AlertAction";
import { isUserLogIn } from "../../../store/actions/isUserLogInAction";
import loadCart from "../../../store/actions/loadCartAction";
import loadLikes from "../../../store/actions/loadLikesAction";
import { openLogModal } from "../../../store/actions/LogAction";
import { doesCredentialsOk } from "../../../utils/doesCredentialsOk";
import { doesUserExist } from "../../../utils/doesUserExist";
import { getUserInfoById } from "../../../utils/getUserInfoById";
import {
    email_ui,
    login_succesfull_message,
    login_unsuccesfull_message,
    login_user_not_found_message,
    password_ui,
    enter_ui,
    enter_user_data_message,
} from "../../../lng";

const LogModal = () => {
    const dispatch = useDispatch();

    const [eMail, setEMail] = useState(null);
    const [passMain, setPassMain] = useState(null);
    const setLang = useSelector((state) => state.loadLanguage.languageIs);

    const handleLogUser = async (e) => {
        e.preventDefault();
        const userExist = await doesUserExist(eMail);
        const passCorrect = await doesCredentialsOk(userExist, eMail, passMain);
        if (userExist || passCorrect) {
            if (passCorrect.access) {
                const userInfo = await getUserInfoById(passCorrect.id);
                dispatch(isUserLogIn(userInfo));
                dispatch(
                    showAlertMessage({
                        status: true,
                        message: login_succesfull_message[setLang], //Вы успешно вошли в ресурс!
                    })
                );
                dispatch(openLogModal(false));
                dispatch(loadCart(userInfo.id));
                dispatch(loadLikes(userInfo.id));
            } else {
                dispatch(
                    showAlertMessage({
                        status: true,
                        message: login_unsuccesfull_message[setLang], //Вы указали неверный логин или пароль
                    })
                );
            }
        } else
            return dispatch(
                showAlertMessage({
                    status: true,
                    message: login_user_not_found_message[setLang], //Пользователь с таким логином не найден!
                })
            );
    };

    return (
        <>
            <section className="fullscreen-box">
                <div className="regform">
                    <div className="regform-close">
                        <button
                            className="cross-button"
                            onClick={() => dispatch(openLogModal(false))}
                        />
                    </div>
                    <div className="regform-name">{enter_user_data_message[setLang]}</div>{" "}   {/* Введите данные для входа */}
                    <form className="regform-form" onSubmit={handleLogUser}>
                        <label htmlFor="eMail">
                            {" "}
                            {email_ui[setLang]} {/* Электроная почта  */}
                            <input
                                onChange={(e) => setEMail(e.target.value)}
                                type="email"
                                name="eMail"
                            />
                        </label>
                        <label htmlFor="passMain">
                            {" "}
                            {password_ui[setLang]} {/* Пароль  */}
                            <input
                                onChange={(e) => setPassMain(e.target.value)}
                                type="password"
                                name="passMain"
                            />
                        </label>
                        <div className="regform-button button_container">
                            <button className="regform-button" type="submit">
                                {" "}
                                {enter_ui[setLang]} {/* Войти  */}
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default LogModal;
