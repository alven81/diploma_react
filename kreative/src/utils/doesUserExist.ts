import { getUserEmail } from "services/fetch";

const doesUserExist = async (eMail: string): Promise<string> => {
    return getUserEmail(eMail)
        .then((res) => res.data.length)
        .catch(function (error) {
            if (error.response) {
                console.log(error.response.status);
            }
        });
};

export { doesUserExist };
