import axios from "axios";

const setCredentials = (credentials) => {
    axios
        .post(`http://localhost:3004/users/`, credentials)
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
            }
        });
};

export { setCredentials };
