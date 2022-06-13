import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { searchResult } from "../store/actions/searchResultAction";

interface InputSearchProps {
	className: string;
	placeholder: string;
}
const InputSearch: FC<InputSearchProps> = ({ className, placeholder }) => {
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();

	const handleInputChange = (e: any) => {
		setSearchText(e.target.value);
	};

	const handlerSearchItem = () => {
		dispatch(searchResult(searchText));
	};

	const handlerSearchItemKey = (
		e: React.KeyboardEvent<HTMLDivElement>
	): void => {
		if (e.key === "Enter") {
			dispatch(searchResult(searchText));
		}
	};

	return (
		<>
			<input
				className={className}
				placeholder={placeholder}
				onKeyDown={handlerSearchItemKey}
				onChange={handleInputChange}
			/>
			<NavLink to="search">
				<span
					className="nav_middle-loupe"
					onClick={handlerSearchItem}
				/>
			</NavLink>
		</>
	);
};

export default InputSearch;
