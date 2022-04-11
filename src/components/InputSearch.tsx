import { FC } from "react";

interface InputSearchProps {
    className: string,
    placeholder: string
    
    // value: string,
    // name: string,
    //onChange: (e: string) => void
}
const InputSearch: FC<InputSearchProps> = ({ className, placeholder }) => {
    
// const handleInputChange = () => {
//     console.log(e.target.value);
    
// }

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
                // value={value}
                onChange={(e) => e.target.value}
                />
        </>
    )
}

export default InputSearch
