import React, {PureComponent} from 'react'

import MainContent from '../MainContent'
import Header from '../Header'
import SideMenu from '../SideMenu'

import SideMenuSections from '../SideMenuSections'
import SideMenuSubsection from '../SideMenuSubsection'

import './style.css'

class PageViewer extends PureComponent {
    
    state = {
        currentComponent: SideMenuSubsection["Организации"]
    }

    render() {
        return (
            <div className="page-viewer">
                <Header/>
                <SideMenu sideMenuSection={SideMenuSections}
                          onLinkSubsectionClick={this.clickSubsection}
                          selectedElement={this.state.currentComponent.subsectionProps.sectionName}/>
                <MainContent SubsectionView={this.state.currentComponent.subsectionComponent}
                             subsectionProps={this.state.currentComponent.subsectionProps}
                />
            </div>
        )
    }

    clickSubsection = (chooseSubsection) =>{
        this.setState({
            currentComponent: SideMenuSubsection[chooseSubsection]
        })
    }
}

export default PageViewer