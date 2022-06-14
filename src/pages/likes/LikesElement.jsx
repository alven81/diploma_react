//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItemIndex } from "../../store/actions/indexAction";
import Product from "../product/Product";

const LikesElement = ({ item }) => {
    const { id } = item;
    const dispatch = useDispatch();
    const fullCatalog = useSelector((state) => state.loadData.loadCatalog);
    const catalog = fullCatalog[id - 1];

    return (
        <div className="likes_list_element">
            <div className="likes_list_element-image">
                <Link key={catalog.id} to={`/product/${catalog.id}`}>
                    <img
                        onClick={() => {
                            dispatch(addItemIndex(catalog.id));
                            <Product />;
                        }}
                        src={`http://localhost:3000${catalog.image}`}
                        alt=""
                    />
                </Link>
                
            </div>
            <div className="likes_list_element-title">
                <p>{catalog.title.slice(0, 15) + "..."}</p>
            </div>
        </div>
    );
};
export default LikesElement;
