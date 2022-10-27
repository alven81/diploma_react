import { getSearchByCategory } from "services/fetch";

function searchCategoryResult(searchText) {

    return (dispatch) => {
        getSearchByCategory(searchText)
            .then((res) => dispatch(getSearchCategoryResult(res.data)))
            .catch(function (error) {
                console.log(error);
            });
    };
}

function getSearchCategoryResult(load) {

    return {
        type: "GET_SEARCH_CATEGORY_RESULT",
        payload: load,
    };
}

export { searchCategoryResult };
