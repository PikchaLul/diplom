import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants';

const CHANGE_EVENT = 'change';

var _isView = false;

let _loadingError = null;
let _isLoading = true;


const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },

    isInitializationModalView() {
        return _isView;
    },

    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function (action) {
    switch (action.type) {
        case Constants.AUTHENTICATION_INITIALIZATION_REQUEST: {
            _isLoading = true;
            TasksStore.emitChange();
            break;
        }

        case Constants.AUTHENTICATION_INITIALIZATION_SUCCESS: {
            _isLoading = false;
            _isView = action.isView;
            _loadingError = null;
            TasksStore.emitChange();
            break;
        }

        case Constants.AUTHENTICATION_INITIALIZATION_FAIL: {
            _loadingError = action.error;
            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;