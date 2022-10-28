import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { searchCategoryResult } from "store/actions/searchCategoryResultAction";
import CatElement from "pages/catalog/CatElement";

const Theme = () => {
	const dispatch = useDispatch();
	const { theme } = useParams();
	//const navigate = useNavigate();

	useEffect(() => {
		dispatch(searchCategoryResult(theme));
	}, [dispatch, theme]);

	const catalog = useSelector(
		(state) => state.searchCategoryResult.searchCategoryResult
	);

	return (
		catalog &&
		<div className="catalog_main narrow_container">
			{catalog.map((catalog) => (
				<CatElement
					key={catalog.id}
					catalog={catalog}
				/>
			))}
		</div>
	);
};

export default Theme;
