import React, {PureComponent} from 'react'
import { BrowserRouter, Route, Redirect, Switch, Router } from "react-router-dom";
import createBrowserHistory from 'history/createBrowserHistory'

import MainPage from '../Pages/MainPage'
import AuthenticationPage from '../Pages/AuthenticationPage'

import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faPowerOff, 
         faBars, faTachometerAlt, 
         faDesktop, faFolderOpen, 
         faKey, faBuilding,
         faSitemap, faUsers,
         faCog, faSearch, 
         faPlus, faMinus, 
         faTrash, faSort, faPencilAlt, 
         faPlay, faStop,
         faSync, faUserPlus, faTimesCircle, faQuestionCircle} from '@fortawesome/free-solid-svg-icons'

library.add(faUser, faPowerOff, 
            faBars, faTachometerAlt, 
            faDesktop, faBuilding, 
            faFolderOpen, faKey,
            faSitemap, faUsers,
            faCog, faSearch, 
            faPlus, faMinus, 
            faTrash, faSort,
            faPencilAlt, faPlay,
            faStop, faSync,
            faUserPlus, faTimesCircle,
            faQuestionCircle);

const history = createBrowserHistory();

class App extends PureComponent {
    render() {

        const AuthenticationFuncRender = function(props){
            return <AuthenticationPage {...props} />
        }

        const MainFuncRender = function(props){
            return <MainPage {...props} />
        }

        return (
            <Router history={history}>
                <div>
                    <Route path="/" exact render={() => <Redirect to="/authentication"/>}/>
                    <Route path="/authentication" render={AuthenticationFuncRender}/>
                    <Route path="/main" render={MainFuncRender}/>
                </div>
            </Router>  
        )
    }
}

export default App