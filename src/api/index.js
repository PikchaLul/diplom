import axios from 'axios';

export default {
    listGroups() {
        return axios.get(`http://localhost:8080/groups`);
    },

    createGroup(data) {
        return axios.post(`http://localhost:8080/groups`, data);
    },

    deleteGroup(noteId) {
        return axios.delete(`http://localhost:8080/groups/${noteId}`);
    }
}