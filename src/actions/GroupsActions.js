import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/AppConstants';

import api from '../api';

const GroupsActions = {
    loadGroups() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_GROUPS_REQUEST
        });

        api.listGroups()
        .then(({ data }) => 
            AppDispatcher.dispatch({
                type: Constants.LOAD_GROUPS_SUCCESS,
                groups: data
            })
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_GROUPS_FAIL,
                error: err
            })
        );
    },

    createGroup(group) {
        api.createGroup(group)
        .then(() =>{
            console.log('dfgdgdf');
            return this.loadGroups()
        })
        .catch(err =>
            console.error(err)
        );
    },

    deleteGroup(noteId) {
        api.deleteGroup(noteId)
        .then(() =>
            this.loadGroups()
        )
        .catch(err =>
            console.error(err)
        );
    }
};

export default GroupsActions;