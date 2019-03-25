import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants';

import GroupsApi from '../api/GroupsApi';

const GroupsActions = {
    loadGroups() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_GROUPS_REQUEST
        });

        GroupsApi.listGroups()
            .then(({ data }) => {
                AppDispatcher.dispatch({
                    type: Constants.LOAD_GROUPS_SUCCESS,
                    groups: data
                })
            }
            )
            .catch(err => {
                AppDispatcher.dispatch({
                    type: Constants.LOAD_GROUPS_FAIL,
                    error: err
                })
            }
            );
    },

    createGroup(group) {
        GroupsApi.createGroup(group)
            .then(() => {
                return this.loadGroups()
            })
            .catch(err =>
                console.error(err)
            );
    },

    deleteGroup(noteId) {
        GroupsApi.deleteGroup(noteId)
            .then(() =>
                this.loadGroups()
            )
            .catch(err =>
                console.error(err)
            );
    }
};

export default GroupsActions;