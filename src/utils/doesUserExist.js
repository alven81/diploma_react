import axios from "axios";



const doesUserExist = async (eMail) => {
    return axios.get(`http://localhost:3004/users/?email=${eMail}`)
    .then (res => (res.data.length) )
    .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          // console.log(error.response.data);
          console.log(error.response.status);
          //console.log(error.response.headers);
        }
   })
}

export { doesUserExist }