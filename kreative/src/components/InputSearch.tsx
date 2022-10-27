import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import { searchResult } from "store/actions/searchResultAction";

interface InputSearchProps {
	className: string;
	placeholder: string;
}
const InputSearch: FC<InputSearchProps> = ({ className, placeholder }) => {
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();
    const navigate = useNavigate();

	const handleInputChange = (e: any) => {
		setSearchText(e.target.value);
	};

	const handleSearchItem = () => {
		dispatch(searchResult(searchText));
	};

	const handleSearchItemKey = (e: any) => {
		if (e.key === "Enter") {
			dispatch(searchResult(e.target.value));
            navigate("/search");
		}
	};

	return (
		<>
			<input
				className={className}
				placeholder={placeholder}
				onKeyDown={handleSearchItemKey}
				onChange={handleInputChange}
			/>
			<NavLink to="search">
				<span
					className="nav_middle-loupe"
					onClick={handleSearchItem}
				/>
			</NavLink>
		</>
	);
};

export default InputSearch;
