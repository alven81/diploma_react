import { getCatalog } from "services/fetch";

function getCatalogData() {

    return (dispatch) => {
        getCatalog()
        .then((res) => dispatch(setCatalogData(res.data)))
    };
}

function setCatalogData(load) {

    return {
        type: "SET_CATALOG_DATA",
        payload: load,
    };
}

export default getCatalogData;
