import axios from "axios";

const doesCredentialsOk = async (callback, eMail, passMain) => {
    if (callback) {
        return axios
            .get(`http://localhost:3004/users/?email=${eMail}`)
            .then(function (res) {
                if (res.data[0].password === passMain) {
                    return {
                        access:
                            res.data[0].password === passMain ? true : false,
                        id: res.data[0].id,
                    };
                } else {
                    return false;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    } else {
        return false;
    }
};

export { doesCredentialsOk };
