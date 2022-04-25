import axios from "axios";

const getLastUserId = async () => {
    return axios.get(`http://localhost:3004/users/`)
        .then (res => (res.data.length + 1))
        .catch(function (error) {
            if (error.response) {
            // Request made and server responded
            //console.log(error.response.data);
            console.log(error.response.status);
            //console.log(error.response.headers);
            }
        })
}

export { getLastUserId }