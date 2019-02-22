import React, {PureComponent} from 'react';
import { BrowserRouter, Switch, Route, Redirect, Router} from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory';

import ConfigurationModal from '../ConfigurationModal';
import AuthorizationModal from '../AuthorizationModal';

import './style.css';

const history = createBrowserHistory();

class ConfigurationPage extends PureComponent {

    state = {
        showConfigurationModal: true,
        showAuthorizationModal: true,
    };


    handleConfigurationHide = () => {
        this.setState({ showConfigurationModal: false});
    };

    handleAuthorizationHide = () => {
        this.setState({ showAuthorizationModal: false });
    };

    render() {

        const configurationState = this.state.showConfigurationModal;
        const configurationHandleHide = this.handleConfigurationHide

        const authorizationState = this.state.showAuthorizationModal;
        const authorizationHandleHide = this.handleAuthorizationHide

        const ConfigurationModalFuncRender = function (props){
            return <ConfigurationModal {...props} show = {configurationState} 
                                                  onHide = {configurationHandleHide}/>
        }

        const AuthorizationModalFuncRender = function(props){
            return <AuthorizationModal {...props} show = {authorizationState} 
                                                  onHide = {authorizationHandleHide}/>
        }

        return (
            <div className="at-layout">
                <div className="at-layout-top-nav">
                    <div className="at-layout-main">
                        <div className="at-layout-content">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-lg-12">
                                        {configurationState ? <Redirect to="/configuration/configurationSettings"/> : 
                                                              <Redirect to="/configuration/authorization"/>}
                                        <div>
                                            <Route path="/configuration/configurationSettings" render={ConfigurationModalFuncRender}/> 
                                            <Route path="/configuration/authorization" render={AuthorizationModalFuncRender}/>   
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

export default ConfigurationPage