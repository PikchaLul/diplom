import axios from 'axios';

export default {
    isAuthorization() {
        return axios.get(`http://localhost:8080/authentication/authorization`);
    },

    authorizationUser(user) {
        return axios.post(`http://localhost:8080/authentication/authorization`, user);
    }
}