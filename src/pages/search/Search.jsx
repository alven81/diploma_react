import { useSelector } from "react-redux";
import CatElement from "../catalog/CatElement";
import { New } from "../product/New";

const Search = () => {
	const searchCatalog = useSelector((state) => state.loadSearch.searchResult);
	console.log("searchCatalog", searchCatalog);
	return (
		<>
			<div className="catalog_main container">
				{searchCatalog && (
					<>
						{searchCatalog.map((catalog) => (
							<CatElement key={catalog.id} catalog={catalog} />
						))}
					</>
				)}
			</div>
			<div className="container">
				<New />
			</div>
		</>
	);
};
export default Search;
