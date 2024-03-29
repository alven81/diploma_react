import { getUserList } from "services/fetch";

const getLastUserId = async (): Promise<number> => {
    return getUserList()
        .then((res) => res.data.length + 1)
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
            }
        });
};

export { getLastUserId };
