import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { showAlertMessage } from "../../../store/actions/AlertAction";
import { isUserLogIn } from "../../../store/actions/isUserLogInAction";
import loadCart from "../../../store/actions/loadCartAction";
import { openLogModal } from "../../../store/actions/LogAction";
import { doesCredentialsOk } from "../../../utils/doesCredentialsOk";
import { doesUserExist } from "../../../utils/doesUserExist";
import { getUserInfoById } from "../../../utils/getUserInfoById";

const LogModal = () => {

    const user = useSelector((state) => state.isUserLogInInfo);
    console.log("at start", user);
    const dispatch = useDispatch();

         
    const [eMail, setEMail] = useState(null);
    const [passMain, setPassMain] = useState(null);

    const handleLogUser = async (e) => {
        e.preventDefault();
        const userExist = await doesUserExist(eMail);
        const passCorrect = await doesCredentialsOk(userExist, eMail, passMain);
        if (userExist || passCorrect) {
            if (passCorrect.access) {
                const userInfo = await getUserInfoById(passCorrect.id)
                dispatch(isUserLogIn(userInfo));
                dispatch(showAlertMessage({
                        status: true,
                        message : "Вы успешно вошли в ресурс!"
                    }
                ));
                dispatch(openLogModal(false));
                dispatch(loadCart(userInfo.id))
                //localStorage.setItem('userId', true)
            } else {
                    dispatch(showAlertMessage({
                                status: true,
                                message : "Вы указали неверный логин или пароль"
                            }
                    ))
                }
        } else
            return dispatch(showAlertMessage({
                            status: true,
                            message : "Пользователь с таким логином не найден!"
                        }
                    ))
            
    }

    return (
        <>
            <section className="fullscreen-box">
                <div className="regform">
                    <div className="regform-close">
                        <button className="cross-button" onClick={() => dispatch(openLogModal(false))}/>
                    </div>
                    <div className="regform-name">
                        Введите данные для входа
                    </div>
                    <form className="regform-form" onSubmit={handleLogUser} >
                        <label htmlFor="eMail"> Электроная почта
                            <input onChange={(e) => setEMail(e.target.value)} type="email" name="eMail"/>
                        </label>
                        <label htmlFor="passMain"> Пароль
                            <input onChange={(e) => setPassMain(e.target.value)} type="password" name="passMain"/>
                        </label>
                        <div className="regform-button button_container">
                            <button className="regform-button" type="submit"> Войти </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default LogModal






