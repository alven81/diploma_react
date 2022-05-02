import axios from "axios";

const getUserForReviewById = (id) => {
    axios.get(`http://localhost:3004/users/${id}`)
    .then(function (res) {
        return {
            "id": res.data.id,
            "avatar": res.data.avatar,
            "firstName": res.data.firstName,
            "lastName": res.data.lastName,
            }
    })
    .catch(function (error) {
        console.log(error);
    })
}

export { getUserForReviewById }


