import { postUserList } from "services/fetch";
import IUser from "types/IUser";

const setCredentials = (credentials: IUser) => {
    postUserList(credentials)
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
            }
        });
};

export { setCredentials };
