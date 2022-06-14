import axios from "axios";

const getLastUserId = async () => {
    return axios
        .get(`http://localhost:3004/users/`)
        .then((res) => res.data.length + 1)
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
            }
        });
};

export { getLastUserId };
