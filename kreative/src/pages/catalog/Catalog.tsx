import { useSelector, RootStateOrAny } from "react-redux";

import CatElement from "pages/catalog/CatElement";
import { New } from "pages/product/New";
import IProducts from "types/products";

const Catalog = () => {
	const catalog: Array<IProducts> = useSelector(
		(state: RootStateOrAny) => state.loadData.loadCatalog
	);

	return (
		<>
			{
				catalog &&
				<div className="catalog_main narrow_container">
					{
						catalog.map((value: IProducts) => (
							<CatElement key={value.id} catalog={value} />
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
