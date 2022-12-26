import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { showAlertMessage } from "store/actions/AlertAction";
import { isUserLogIn } from "store/actions/isUserLogInAction";
import loadCart from "store/actions/loadCartAction";
import loadLikes from "store/actions/loadLikesAction";
import { openLogModal } from "store/actions/LogAction";
import { doesCredentialsOk } from "utils/doesCredentialsOk";
import { doesUserExist } from "utils/doesUserExist";
import { requestUserInfoById } from "utils/getUserInfoById";
import { logLanguage } from "lng";
import ICategoryLanguage from "types/ICategoryLanguage";
import createLink from "utils/createLink";

interface IPassCorrect {
    access: boolean;
    id: number;
}

const LogModal = () => {
    const dispatch = useDispatch();

    const [eMail, setEMail] = useState<string>("");
    const [passMain, setPassMain] = useState<string>("");
    const setLang: string = useSelector((state: ICategoryLanguage) => state.loadLanguage.languageIs);

    const handleLogUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userExist: string = await doesUserExist(eMail);
        const passCorrect: IPassCorrect | any = await doesCredentialsOk(userExist, eMail, passMain);
        if (userExist || passCorrect) {
            if (passCorrect.access) {
                const userInfo: any = await requestUserInfoById(passCorrect.id);
                dispatch(isUserLogIn(userInfo));
                dispatch(
                    showAlertMessage({
                        status: true,
                        message: createLink(logLanguage.login_succesfull_message, setLang), //Вы успешно вошли в ресурс!
                    })
                );
                dispatch(openLogModal(false));
                dispatch(loadCart(userInfo.id));
                dispatch(loadLikes(userInfo.id));
            } else {
                dispatch(
                    showAlertMessage({
                        status: true,
                        message: createLink(logLanguage.login_unsuccesfull_message, setLang), //Вы указали неверный логин или пароль
                    })
                );
            }
        } else

            return dispatch(
                showAlertMessage({
                    status: true,
                    message: createLink(logLanguage.login_user_not_found_message, setLang), //Пользователь с таким логином не найден!
                })
            );
    };

    return (
        <section className="fullscreen-box">
            <div className="regform">
                <div className="regform-close">
                    <button
                        className="cross-button"
                        onClick={() => dispatch(openLogModal(false))}
                    />
                </div>
                <div className="regform-name">{createLink(logLanguage.enter_user_data_message, setLang)}</div>{" "}   {/* Введите данные для входа */}
                <form className="regform-form" onSubmit={handleLogUser}>
                    <label htmlFor="eMail">
                        {" "}
                        {createLink(logLanguage.email_ui, setLang)} {/* Электроная почта  */}
                        <input
                            onChange={(e) => setEMail(e.target.value)}
                            type="email"
                            name="eMail"
                        />
                    </label>
                    <label htmlFor="passMain">
                        {" "}
                        {createLink(logLanguage.password_ui, setLang)} {/* Пароль  */}
                        <input
                            onChange={(e) => setPassMain(e.target.value)}
                            type="password"
                            name="passMain"
                        />
                    </label>
                    <div className="regform-button button_container">
                        <button className="regform-button" type="submit">
                            {" "}
                            {createLink(logLanguage.enter_ui, setLang)} {/* Войти  */}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default LogModal;
