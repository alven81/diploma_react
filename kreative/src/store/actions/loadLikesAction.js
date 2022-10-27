import { getUserInfoById } from "services/fetch";

function loadLikes(id) {

    return (dispatch) => {
        getUserInfoById(id)
            .then((res) => dispatch(getLikesData(res.data.likes)))
    };
}

function getLikesData(load) {

    return {
        type: "GET_LIKES_DATA",
        payload: load,
    };
}

export default loadLikes;
