import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import { leftSideMenuStatus } from "../../store/actions/leftSideMenuStatusAction";
import getCategoryList from "../../store/actions/loadCategoryAction";
import { CategoryList } from "./CategoryList";

const LeftSlideMenu = ({ isMenuOpen }) => {
	const category = useSelector(
		(state) => state.loadCategoryList.categoryListIs
	);

	const dispatch = useDispatch();

	const handleCloseMenu = () => {
		dispatch(leftSideMenuStatus(false));
	};

	useEffect(() => {
		dispatch(getCategoryList());
	}, [dispatch]);

	return (
		<>
			<div
				className={
					isMenuOpen ? "navbar-modal open-modal" : "navbar-modal"
				}
			>
				<div className={isMenuOpen ? "navbar open" : "navbar"}>
					<button
						className="navbar-button cross-button"
						onClick={handleCloseMenu}
					></button>
					{!category.length ? (
						<LoadingSpinner />
					) : (
						<ul>
							{category.map((item) => (
								<CategoryList key={item.id} catList={item} />
							))}
						</ul>
					)}
				</div>
			</div>
		</>
	);
};
export { LeftSlideMenu };
