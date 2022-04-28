//import { Avatar } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { openRegModal } from "../../../store/actions/RegAction";
import { doesUserExist } from "../../../utils/doesUserExist";
import { getLastUserId } from "../../../utils/getLastUserId";
import { setCredentials } from "../../../utils/setCredentials";
import { AvaFoto } from "./AvaFoto";

const RegModal = () => {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [eMail, setEMail] = useState(null);
    const [passMain, setPassMain] = useState(null);
    const [avaImage, setAvaImage] = useState("")

    const dispatch = useDispatch();

    useEffect(() => {
        setAvaImage("/assets/avatars/1.jpg")
    }, [])
    
    const handleImage = (handleImage) => {
        console.log("img", handleImage);
        setAvaImage(handleImage)
    }

    const handleRegUser = async (e) => {
        e.preventDefault();

        const userId = await getLastUserId();
        
        if (!firstName || !lastName || !eMail || !passMain) return alert("Необходимо заполнить форму!");

        const userExist = await doesUserExist(eMail);

        if (userExist) return alert("Пользователь с таким адресом загеристрирован!");
        
        const credentials = ({
            "id": userId,
            "avatar": avaImage,
            "firstName": firstName,
            "lastName": lastName,
            "email": eMail,
            "password": passMain
        });

        setCredentials(credentials);
    }

    return (
        <>
            <section className="fullscreen-box">
                <div className="regform">
                    <div className="regform-close">
                        <button className="cross-button" onClick={() => dispatch(openRegModal(false))} />
                    </div>
                    <div className="regform-name">
                        Зарегистрируйтесь для входа
                    </div>
                    <form className="regform-form" onSubmit={handleRegUser} >
                        <div className="regform-ava">
                            <AvaFoto handleImage={handleImage} image={avaImage.toString() }/>
                        </div>
                        <label htmlFor="firstName"> Имя
                            <input onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName"/>
                        </label>
                        <label htmlFor="lastName"> Фамилия
                            <input onChange={(e) => setLastName(e.target.value)} type="text" name="lastName"/>
                        </label>
                        <label htmlFor="eMail"> Электроная почта
                            <input onChange={(e) => setEMail(e.target.value)} type="email" name="eMail"/>
                        </label>
                        <label htmlFor="passMain"> Введите пароль
                            <input onChange={(e) => setPassMain(e.target.value)} type="password" name="passMain"/>
                        </label>
                        <div className="regform-button button_container">
                            <button className="regform-button" type="submit"> Зарегистрироваться </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    )
}

export default RegModal






