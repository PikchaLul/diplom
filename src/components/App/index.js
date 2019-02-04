import React, {PureComponent} from 'react'

import Header from '../Header'
import PageViewer from '../PageViewer'

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
            faQuestionCircle)

class App extends PureComponent {
    render() {
        
        return (
            <div className="page-content">
                <Header/>
                <PageViewer/>
            </div>
        )
    }
}

export default App