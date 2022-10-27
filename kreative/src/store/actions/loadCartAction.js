import { getUserInfoById } from "services/fetch";

function loadCart(id) {

    return (dispatch) => {
        getUserInfoById(id)
            .then((res) => dispatch(getCartData(res.data.cart)))
    };
}

function getCartData(load) {

    return {
        type: "GET_CART_DATA",
        payload: load,
    };
}

export default loadCart;
