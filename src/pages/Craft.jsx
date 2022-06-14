import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchCategoryResult } from "../store/actions/searchCategoryResultAction";
import CatElement from "./catalog/CatElement";

const Craft = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(searchCategoryResult(1));
	}, [dispatch]);

	const catalog = useSelector(
		(state) => state.searchCategoryResult.searchCategoryResult
	);

	return (
		<>
			<div className="catalog_main narrow_container">
				{catalog && (
					<>
						{catalog.map((catalog) => (
							<CatElement key={catalog.id} catalog={catalog} />
						))}
					</>
				)}
			</div>
		</>
	);
};
export default Craft;
