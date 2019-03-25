import conform from 'conform';

import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants';

import AuthenticationApi from '../api/AuthenticationApi';

const userSchema = {
    properties: {
        login: {
            type: 'string',
            pattern: /^[a-zA-Z](.[a-zA-Z0-9_-]*)$/,
            maxLength: 20,
            minLength: 5,
            required: true,
            messages: {
                pattern: 'Неверный логин',
                maxLength: 'Максимальная длинна логина 20 символов',
                minLength: 'Минимальная длинна логина 5 символов'
            }
        },
        password: {
            type: 'string',
            pattern: /^[a-z0-9_-]{6,18}$/,
            maxlength: 18,
            minlength: 6,
            required: true,
            messages: {
                pattern: 'Неверный пароль',
                maxLength: 'Максимальная длинна пароля 20 символов',
                minLength: 'Минимальная длинна пароля 6 символов'
            }
        },
        role: {
            type: 'string',
            required: true
        }
    }
}

const AuthenticationActions = {

    isInitializationModalView() {
        AppDispatcher.dispatch({
            type: Constants.AUTHENTICATION_INITIALIZATION_REQUEST
        });

        AuthenticationApi.isInitializationView()
            .then(({data}) => {
                AppDispatcher.dispatch({
                    type: Constants.AUTHENTICATION_INITIALIZATION_SUCCESS,
                    isView: !data.length ? true : false
                })
            })
            .catch(err => {
                console.log(err);
                AppDispatcher.dispatch({
                    type: Constants.AUTHENTICATION_INITIALIZATION_FAIL,
                    error: err
                })
            });

    },

    createSuperUser(superUser) {
        AuthenticationApi.createSuperUser(superUser)
            .then(() => {
                return this.isInitializationModalView()
            })
            .catch(error => {
                console.error(error.response.status === 404);
                console.error(error)
            }
            );
    },

    authorizationUser(user) {
        AuthenticationApi.authorizationUser(user)
            .then(({ ok }) => {
                return ok;
            })
            .catch(error =>
                console.error(error)
            );
    }
};

export default AuthenticationActions;