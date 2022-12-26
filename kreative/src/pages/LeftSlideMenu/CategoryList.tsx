import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { leftSideMenuStatus } from "store/actions/leftSideMenuStatusAction";
import ICategoryLanguage from "types/ICategoryLanguage";

interface ICategory {
	category: ICategoryLanguage;
	categoryLink: string;
}

interface ICatList {
	catList: ICategory
}

const CategoryList = ({ catList }: ICatList) => {

	const setLang: string = useSelector((state: ICategoryLanguage) => state.loadLanguage.languageIs);
	const dispatch = useDispatch();

	const handleCatalog = () => {
		dispatch(leftSideMenuStatus(false));
	};

	return (
		<li className="category_list-li">
			<Link
				onClick={handleCatalog}
				className="category_list"
				to={`/catalog/${catList.categoryLink}`}
			>
				<p>{catList.category[setLang]}</p>
			</Link>
		</li>
	);
};

export { CategoryList };
