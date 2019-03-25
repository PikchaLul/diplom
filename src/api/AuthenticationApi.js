import axios from 'axios';

export default {
    isInitializationView() {
        return axios.get(`http://localhost:8080/authentication/initialization`);
    },

    createSuperUser(superUser) {
        return axios.post(`http://localhost:8080/authentication/initialization`, superUser);
    },

    authorizationUser(user) {
        return axios.post(`http://localhost:8080/authentication/authorization`, user);
    }
}