import { getCatalog } from "services/fetch";

function getCatalogData() {

    return (dispatch) => {
        getCatalog()
        .then((res) => dispatch(setCatalogData(res.data)))
        .catch(function (error) {
            console.log(error);
        });
    };
}

function setCatalogData(load) {

    return {
        type: "SET_CATALOG_DATA",
        payload: load,
    };
}

export default getCatalogData;
