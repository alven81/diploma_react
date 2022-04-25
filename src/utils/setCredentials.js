import axios from "axios";

const setCredentials = (credentials) => {
    axios.post(`http://localhost:3004/users/`, credentials)
    .catch(function (error) {
        if (error.response) {
          // Request made and server responded
          //console.log(error.response.data);
          console.log(error.response.status);
          //console.log(error.response.headers);
        }
    })
}


export { setCredentials }