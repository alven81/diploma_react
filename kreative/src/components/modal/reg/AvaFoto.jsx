const AvaFoto = ({handleImage, image}) => {

    return (
        <>
            <div className="regform-ava-set">
                <label htmlFor="avatar" >
                    Choose your avatar              {/*Выберите себе аватар  */}
                    <select name="avatar"
                        onChange={(e) => {
                            e.preventDefault();
                            handleImage(e.target.value)}}
                    >
                        <option defaultValue value="/assets/avatars/1.jpg">Black-haired Av</option> {/* Черноволосый Ав */}
                        <option value="/assets/avatars/2.jpg">Brown haired Av</option>              {/* Коричневолосая Ава */}
                        <option value="/assets/avatars/3.jpg">Gray Av</option>                      {/* Серая Ава */}
                        <option value="/assets/avatars/4.jpg">Bald Av</option>                      {/* Лысый Ав */}
                        <option value="/assets/avatars/5.jpg">Light Av</option>                     {/* Светлый Ав */}
                        <option value="/assets/avatars/6.jpg">Black Av</option>                     {/* Черная Ава */}
                        <option value="/assets/avatars/7.jpg">Brown Av</option>                     {/* Коричневый Ав */}
                        <option value="/assets/avatars/7.jpg">Dark Av</option>                      {/* Темная Ава */}
                        <option value="/assets/avatars/9.jpg">Redhead Av</option>                   {/* Рыжая Ава */}
                        <option value="/assets/avatars/10.jpg">Black-bearded Av</option>            {/* Чернобородый Ав */}
                    </select>
                </label>
            </div>
            <div className="regform-ava-img">
                <img src={image} alt="Аватар"/>
            </div>
        </>
    )
};

export { AvaFoto }
