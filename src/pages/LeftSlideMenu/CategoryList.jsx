import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { leftSideMenuStatus } from "../../store/actions/leftSideMenuStatusAction";

const CategoryList = ({ catList, handleCategorySearch }) => {
	const { category, categoryLink } = catList;
	const dispatch = useDispatch();

	const handleCatalog = () => {
		dispatch(leftSideMenuStatus(false));
	};

	return (
		<li className="category_list-li">
			<Link
				onClick={handleCatalog}
				className="category_list"
				to={`/catalog/${categoryLink}`}
			>
				<p>{category}</p>
			</Link>
		</li>
	);
};
export { CategoryList };
