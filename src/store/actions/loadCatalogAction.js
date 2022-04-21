import axios from "axios";

function getCatalogData() {
    
    return (dispatch) => {
        axios.get('http://localhost:3004/products').then ((res) => {
            console.log("does work?");
            dispatch(setCatalogData(res.data))
        });
        
    }
}


function setCatalogData(load) {
    console.log(load);
    return {
        type: "SET_CATALOG_DATA",
        payload: load
    }
}

export default getCatalogData