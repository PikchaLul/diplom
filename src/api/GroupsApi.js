import axios from 'axios';

export default {
    listGroups() {
        return axios.get(`http://localhost:8080/main/groups`);
    },

    createGroup(data) {
        return axios.post(`http://localhost:8080/main/groups`, data);
    },

    deleteGroup(noteId) {
        return axios.delete(`http://localhost:8080/main/groups/${noteId}`);
    }
}