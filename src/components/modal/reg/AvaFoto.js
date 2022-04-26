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
                        <option defaultValue value="/assets/avatars/1.jpg">Ава 1</option>
                        <option value="/assets/avatars/2.jpg">Ава 2</option>
                        <option value="/assets/avatars/3.jpg">Ава 3</option>
                        <option value="/assets/avatars/4.jpg">Ава 4</option>
                        <option value="/assets/avatars/5.jpg">Ава 5</option>
                        <option value="/assets/avatars/6.jpg">Ава 6</option>
                        <option value="/assets/avatars/7.jpg">Ава 7</option>
                        <option value="/assets/avatars/7.jpg">Ава 8</option>
                        <option value="/assets/avatars/9.jpg">Ава 9</option>
                        <option value="/assets/avatars/10.jpg">Ава 10</option>
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