import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";

import { showAlertMessage } from "store/actions/AlertAction";
import { openRegModal } from "store/actions/RegAction";
import { doesUserExist } from "utils/doesUserExist";
import { getLastUserId } from "utils/getLastUserId";
import { setCredentials } from "utils/setCredentials";
import { AvaFoto } from "components/modal/reg/AvaFoto";

const RegModal = () => {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [eMail, setEMail] = useState<string>("");
    const [passMain, setPassMain] = useState<string>("");
    const [avaImage, setAvaImage] = useState<string>("")

    const dispatch = useDispatch();

    useEffect(() => {
        setAvaImage("/assets/avatars/1.jpg")
    }, [])

    const handleImage = (handleImage: string) => {
        setAvaImage(handleImage)
    }

    const handleRegUser = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        const userId = await getLastUserId();

        if (!firstName || !lastName || !eMail || !passMain) return dispatch(showAlertMessage({
            status: true,
            message: "You didn't complete the form!"    //Вы не полностью заполнили форму!
        }
        ))

        const userExist = await doesUserExist(eMail);

        if (userExist) return dispatch(showAlertMessage({
            status: true,
            message: "The user with this address is already registered!"   //Пользователь с таким адресом уже зарегистрирован!
        }
        ));

        const credentials = ({
            "id": userId,
            "avatar": avaImage,
            "firstName": firstName,
            "lastName": lastName,
            "email": eMail,
            "password": passMain
        });

        setCredentials(credentials);

        dispatch(showAlertMessage({
            status: true,
            message: "You have successfully registered! Go to the login form."    //Вы успешно зарегистрировались! Перейдите на форму для входа.
        }
        ))

        dispatch(openRegModal(false));
    }

    return (
        <section className="fullscreen-box">
            <div className="regform">
                <div className="regform-close">
                    <button className="cross-button" onClick={() => dispatch(openRegModal(false))} />
                </div>
                <div className="regform-name">
                    Register to login    {/* Зарегистрируйтесь для входа */}
                </div>
                <form className="regform-form" onSubmit={handleRegUser} >
                    <div className="regform-ava">
                        <AvaFoto handleImage={handleImage} image={avaImage.toString()} />
                    </div>
                    <label htmlFor="firstName"> First Name {/* Имя */}
                        <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" />
                    </label>
                    <label htmlFor="lastName"> Last Name  {/* Фамилия */}
                        <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName" />
                    </label>
                    <label htmlFor="eMail"> Email    {/* Электроная почта */}
                        <input onChange={(e) => setEMail(e.target.value)} type="email" name="eMail" />
                    </label>
                    <label htmlFor="passMain"> Enter password   {/* Введите пароль */}
                        <input onChange={(e) => setPassMain(e.target.value)} type="password" name="passMain" />
                    </label>
                    <div className="regform-button button_container">
                        <button className="regform-button" type="submit"> Register </button>  {/* Зарегистрироваться */}
                    </div>
                </form>
            </div>
        </section>
    )
};

export default RegModal
