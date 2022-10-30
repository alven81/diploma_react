import { useSelector, RootStateOrAny } from "react-redux";

import CatElement from "pages/catalog/CatElement";
import { New } from "pages/product/New";
import IElement from "types/element";

const Catalog = () => {
	const catalog = useSelector(
		(state: RootStateOrAny) => state.loadData.loadCatalog
	);

	return (
		<>
			{
				catalog &&
				<div className="catalog_main narrow_container">
					{
						catalog.map((catalog: IElement) => (
							<CatElement key={catalog.id} catalog={catalog} />
						))
					}

				</div>
			}
			<div className="container">
				<New />
			</div>
		</>
	);
};

export default Catalog;
