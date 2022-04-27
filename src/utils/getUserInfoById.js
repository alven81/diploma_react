import axios from "axios";

const getUserInfoById = async (id) => {
    return axios.get(`http://localhost:3004/users/${id}`)
    .then(function (res) {
        return {
            "id": res.data.id,
            "avatar": res.data.avatar,
            "firstName": res.data.firstName,
            "lastName": res.data.lastName,
            "email": res.data.email,
            }
    })
    .catch(function (error) {
        console.log(error);
    })
}

export { getUserInfoById }


