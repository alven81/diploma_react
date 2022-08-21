import { useSelector } from "react-redux";
import CatElement from "../catalog/CatElement";
import { New } from "../product/New";

const Search = () => {
    const searchCatalog = useSelector((state) => state.loadSearch.searchResult);

    return (
        <>
            <div className="catalog_main container">
                {searchCatalog && (
                    <>
                        {searchCatalog.length > 0 ? (
                            searchCatalog.map((catalog) => (
                                <CatElement
                                    key={catalog.id}
                                    catalog={catalog}
                                />
                            ))
                        ) : (
                            <div className="catalog_main-search">
                                <p>No search result!</p>
                            </div>
                        )}
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
