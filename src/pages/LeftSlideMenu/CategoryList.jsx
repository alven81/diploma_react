import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { leftSideMenuStatus } from "../../store/actions/leftSideMenuStatusAction";

const CategoryList = ({catList}) => {

    const {id, category, categoryLink} = catList;
    const dispatch = useDispatch();

    const handleCatalog = () => {
        dispatch(leftSideMenuStatus(false));
    }
    
    return (
        <li className="category_list-li">
            <NavLink onClick={handleCatalog} className="category_list" to={categoryLink}><p>{category}</p></NavLink>
        </li>
    )
}
export { CategoryList }
