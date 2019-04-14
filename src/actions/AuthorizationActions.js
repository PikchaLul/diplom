import conform from 'conform';

import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants';

import AuthorizationApi from '../api/AuthorizationApi';

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

const AuthorizationActions = {

    isAuthorization() {
        AppDispatcher.dispatch({
            type: Constants.AUTHENTICATION_AUTHORIZATION_REQUEST
        });

        AuthorizationApi.isAuthorization()
            .then(({ data }) => {
                AppDispatcher.dispatch({
                    type: Constants.AUTHENTICATION_AUTHORIZATION_SUCCESS,
                    isAuthorization: data.isAuthorization
                })
            })
            .catch(err => {
                console.log(err);
                AppDispatcher.dispatch({
                    type: Constants.AUTHENTICATION_AUTHORIZATION_FAIL,
                    error: err
                })
            });
    },

    authorizationUser(user) {
        AuthorizationApi.authorizationUser(user)
            .then(() => {
                return this.isAuthorization()
            })
            .catch(error => {
                console.log('sdsfsdfdsfdsfdsfd')
                console.error(error.response.status === 404);
            }
            );
    },
};

export default AuthorizationActions;