import axios from "axios";

function loadCart(id) {
    
    return (dispatch) => {
        axios.get(`http://localhost:3004/users/${id}`).then ((res) => {
            dispatch(getCartData(res.data.cart))
        });
    }
}


function getCartData(load) {
    console.log("load", load);
    return {
        type: "GET_CART_DATA",
        payload: load
    }
}

export default loadCart