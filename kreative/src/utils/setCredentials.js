import { postUserList } from "services/fetch";

const setCredentials = (credentials) => {
    postUserList(credentials)
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
            }
        });
};

export { setCredentials };
