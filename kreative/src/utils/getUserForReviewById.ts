import { getUserInfoById } from "services/fetch";

const getUserForReviewById = (id: number) => {
    getUserInfoById(id)
        .then(function (res) {

            return {
                id: res.data.id,
                avatar: res.data.avatar,
                firstName: res.data.firstName,
                lastName: res.data.lastName,
            };
        })
        .catch(function (error) {
            console.log(error);
        });
};

export { getUserForReviewById };
