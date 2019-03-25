import React, { PureComponent } from 'react';
import { BrowserRouter, Switch, Route, Redirect, Router } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

import AuthenticationStore from '../../stores/AuthenticationStore';
import AuthenticationActions from '../../actions/AuthenticationActions';

import AuthorizationStore from '../../stores/AuthorizationStore';
import AuthorizationActions from '../../actions/AuthorizationActions';

import InitializationModal from '../InitializationModal';
import AuthorizationModal from '../AuthorizationModal';

import './style.css';

const history = createBrowserHistory();

function getStateFromFlux() {
    const isInitView = AuthenticationStore.isInitializationModalView();

    return {
        isLoading: AuthenticationStore.isLoading(),
        showInitializationModal: isInitView,
        showAuthorizationModal: !isInitView,
    };
}

class AuthenticationPage extends PureComponent {

    state = {
        isLoading: false,
        showInitializationModal: false,
        showAuthorizationModal: false,
        error: []
    };

    componentDidMount() {
        AuthenticationActions.isInitializationModalView();
        AuthorizationActions.isAuthorization()
        AuthenticationStore.addChangeListener(this._onChange);
        AuthorizationStore.addChangeListener(this._onChange);
    }

    componentWillUnmount() {
        AuthenticationStore.removeChangeListener(this._onChange);
        AuthorizationStore.removeChangeListener(this._onChange);
    }

    handleSuperUserAdd = (superUser) => {
        AuthenticationActions.createSuperUser(superUser);
        this.setState({ showInitializationModal: AuthenticationStore.isInitializationModalView() });
    };

    handleAuthorizationUser = (user) => {
        AuthorizationActions.authorizationUser(user);
        if(AuthorizationStore.isAuthorization()){
            this.setState({ showAuthorizationModal: !AuthorizationStore.isAuthorization() });
            this.props.history.push('/main');
        }
        
    };

    _onChange = () => {
        this.setState({ ...getStateFromFlux() });
    }

    render() {
        const initializationState = this.state.showInitializationModal;
        const onSuperUserAdd = this.handleSuperUserAdd;

        const authorizationState = this.state.showAuthorizationModal;
        const onAuthorizationUser = this.handleAuthorizationUser;

        const InitializationModalFuncRender = function (props) {
            return <InitializationModal {...props} show={initializationState}
                onClose={onSuperUserAdd} />
        }

        const AuthorizationModalFuncRender = function (props) {
            return <AuthorizationModal {...props} show={authorizationState}
                onClose={onAuthorizationUser} />
        }

        return (
            <div className="at-layout">
                <div className="at-layout-top-nav">
                    <div className="at-layout-main">
                        <div className="at-layout-content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {initializationState ? <Redirect to="/authentication/initialization" /> :
                                            <Redirect to="/authentication/authorization" />}
                                        <div>
                                            <Route path="/authentication/initialization" render={InitializationModalFuncRender} />
                                            <Route path="/authentication/authorization" render={AuthorizationModalFuncRender} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AuthenticationPage