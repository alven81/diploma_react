import { getUserEmail } from "services/fetch";

const doesCredentialsOk = async (callback, eMail, passMain) => {
    if (callback) {

        return getUserEmail(eMail)
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
