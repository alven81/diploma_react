import { FC } from "react";

interface InputSearchProps {
    className: string
    
    // value: string,
    // name: string,
    //onChange: (e: string) => void
}
const InputSearch: FC<InputSearchProps> = ({ className }) => {
    
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
                // type='text'
                // name={name}
                // value={value}
                onChange={(e) => e.target.value}
                />
        </>
    )
}

export default InputSearch
