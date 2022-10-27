import axios from "axios";
import { getSearchByProduct } from "services/fetch";

function searchResult(searchText) {

    return (dispatch) => {
        getSearchByProduct(searchText)
            .then((res) => {
                dispatch(getSearchResult(res.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

function getSearchResult(load) {

    return {
        type: "GET_SEARCH_RESULT",
        payload: load,
    };
}

export { searchResult };
