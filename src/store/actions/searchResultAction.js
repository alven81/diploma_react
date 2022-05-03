import axios from "axios";

function searchResult(searchText) {
    
    return (dispatch) => {
        axios.get(`http://localhost:3004/products?q=${searchText}`)
        .then((res) => {
            dispatch(getSearchResult(res.data));
        })
        .catch(function (error) {
            console.log(error);
    });
    }
}


function getSearchResult(load) {
    console.log("search Result", load);
    return {
        type: "GET_SEARCH_RESULT",
        payload: load
    }
}

export default searchResult
