import axios from "axios";

function loadLikes(id) {
    return (dispatch) => {
        axios.get(`http://localhost:3004/users/${id}`).then((res) => {
            dispatch(getLikesData(res.data.likes));
        });
    };
}

function getLikesData(load) {
    return {
        type: "GET_LIKES_DATA",
        payload: load,
    };
}

export default loadLikes;
