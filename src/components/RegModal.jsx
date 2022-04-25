import { useState } from "react"
import { doesUserExist } from "../functions/doesUserExist";
import { getLastUserId } from "../functions/getLastUserId";
import { setCredentials } from "../functions/setCredentials";

const RegModal = () => {
    
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [eMail, setEMail] = useState(null);
    const [passMain, setPassMain] = useState(null);

    const handleRegUser = (e) => {
        e.preventDefault();
        //if (!doesUserExist(eMail)) console.log(doesUserExist()); //alert("Пользователь с таким адресом загеристрирован!");
        console.log(doesUserExist(eMail));
        if (!firstName || !lastName || !eMail || !passMain) return alert("Необходимо заполнить форму!");
        
        const credentials = ({
            "id": getLastUserId(),
            "firstName": firstName,
            "lastName": lastName,
            "email": eMail,
            "password": passMain
        });

        //setCredentials(credentials);
    }

    return (
        <>
            <section className="fullscreen-box">
                <div className="regform">
                    <div className="regform-close">
                        <button className="cross-button" />
                    </div>
                    <div className="regform-name">
                        Зарегистрируйтесь для входа
                    </div>
                    <form className="regform-form" onSubmit={handleRegUser} >
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






