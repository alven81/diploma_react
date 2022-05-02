const AvaFoto = ({handleImage, image}) => {

    return (
        <>
            <div className="regform-ava-set">
                <label htmlFor="avatar" >
                    Выберите себе аватар 
                    <select name="avatar" 
                        onChange={(e) => {
                            e.preventDefault();
                            handleImage(e.target.value)}}
                    >
                        <option defaultValue value="/assets/avatars/1.jpg">Черноволосый Ав</option>
                        <option value="/assets/avatars/2.jpg">Коричневолосая Ава</option>
                        <option value="/assets/avatars/3.jpg">Серая Ава</option>
                        <option value="/assets/avatars/4.jpg">Лысый Ав</option>
                        <option value="/assets/avatars/5.jpg">Светлый Ав</option>
                        <option value="/assets/avatars/6.jpg">Черная Ава</option>
                        <option value="/assets/avatars/7.jpg">Коричневый Ав</option>
                        <option value="/assets/avatars/7.jpg">Темная Ава</option>
                        <option value="/assets/avatars/9.jpg">Рыжая Ава</option>
                        <option value="/assets/avatars/10.jpg">Чернобородый Ав</option>
                    </select>
                </label>
            </div>
            <div className="regform-ava-img">
                <img src={image} alt="Аватар"/>
            </div>
        
        </>
    )
}

export { AvaFoto }