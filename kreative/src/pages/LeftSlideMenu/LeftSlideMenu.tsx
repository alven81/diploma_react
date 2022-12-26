import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "components/LoadingSpinner";
import { leftSideMenuStatus } from "store/actions/leftSideMenuStatusAction";
import getCategoryList from "store/actions/loadCategoryAction";
import { CategoryList } from "pages/LeftSlideMenu/CategoryList";
import ICategoryLanguage from "types/ICategoryLanguage";

interface ILeftSlideMenu {
	isMenuOpen: boolean;
}

interface ICategoryList {
	category: ICategoryLanguage;
	categoryLink: string;
	id: string;
}

interface ICategoryListIs {
	[x: string]: any;
	categoryListIs: Array<ICategoryList>;
}

const LeftSlideMenu = ({ isMenuOpen }: ILeftSlideMenu) => {

	const category: ICategoryListIs = useSelector(
		(state: ICategoryListIs) => state.loadCategoryList.categoryListIs
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
					/>
					{
						!category.length ?
							<LoadingSpinner />
							:
							<ul>
								{category.map((item: ICategoryList) => (
									<CategoryList key={item.id} catList={item} />
								))}
							</ul>
					}
				</div>
			</div>
		</>
	);
};

export { LeftSlideMenu };
