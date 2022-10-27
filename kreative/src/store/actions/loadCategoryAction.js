import { getCategories } from "services/fetch";

function getCategoryList() {

    return (dispatch) => {
        getCategories()
        .then((res) => dispatch(setCategoryData(res.data)))
        .catch(function (error) {
            console.log(error);
        });
    };
}

function setCategoryData(load) {

    return {
        type: "SET_CATEGORY_DATA",
        payload: load,
    };
}

export default getCategoryList;
