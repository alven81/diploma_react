import { getUserInfoById } from "services/fetch";
import IUser from "types/IUser";

const requestUserInfoById = async (id: number): Promise<any> => {

    return getUserInfoById(id)
        .then(function (res): IUser {

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
