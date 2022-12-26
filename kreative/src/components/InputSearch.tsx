import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { searchResult } from "store/actions/searchResultAction";

interface IInputSearchProps {
	className: string;
	placeholder: string;
}

const InputSearch = ({ className, placeholder }: IInputSearchProps) => {
	const [searchText, setSearchText] = useState<string>("");

	const dispatch = useDispatch();
    const navigate = useNavigate();

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setSearchText(e.target.value);

	const handleSearchItem = () => dispatch(searchResult(searchText));

	const handleSearchItemKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			e.preventDefault();
			dispatch(searchResult(e.currentTarget.value));
            navigate("/search");
		}
	};

	return (
		<>
			<input
				className={className}
				placeholder={placeholder}
				onKeyDown={(e) => handleSearchItemKey(e)}
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
