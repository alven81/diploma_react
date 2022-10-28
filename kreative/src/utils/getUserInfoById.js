import { getUserInfoById } from "services/fetch";

const requestUserInfoById = async (id) => {

    return getUserInfoById(id)
        .then(function (res) {

            return {
                id: res.data.id,
                avatar: res.data.avatar,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
                email: res.data.email,
            };
        })
        .catch(function (error) {
            console.log(error);
        });
};

export { requestUserInfoById };
