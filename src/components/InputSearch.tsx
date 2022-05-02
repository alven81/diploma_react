import axios from "axios";
import { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Catalog from "../pages/Catalog";
import CatElement from "./catalog/CatElement";

interface InputSearchProps {
    className: string,
    placeholder: string

}
const InputSearch: FC<InputSearchProps> = ({ className, placeholder }) => {
    
    const [searchText, setSearchText] = useState("");

const handleInputChange = (e: any) => {
    setSearchText(e.target.value);
}

const handlerSearchItem = () => {
        axios.get(`http://localhost:3004/products?q=${searchText}`)
            //.then((res) => console.log(res.data))
            .then((res) => {
                console.log(res.data);
                // {
                //     <Link to={`/catalog`}> 
                //     {
                //     res.data.map((item: any) => <CatElement key={item.id} catalog={item} />)
                //     }
                //     </Link>
                // }
            })
            .catch(function (error) {
                console.log(error);
        });

    }


// const handleFilter = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setFilterString(input.current.value)
//     }


    
    return (
        <>
            <input
                className={className} 
                placeholder={placeholder}
                // type='text'
                // name={name}
                //value={value}
                onChange={(e) => handleInputChange(e)}
                />
            <span className="nav_middle-loupe" onClick={handlerSearchItem}/>
        </>
    )
}

export default InputSearch
