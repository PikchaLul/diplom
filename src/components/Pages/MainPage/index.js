import React, {PureComponent} from 'react'

import MainContent from '../../MainContent'
import Header from '../../Header'
import SideMenu from '../../SideMenu'

import SideMenuSections from '../../SideMenuSections'
import SideMenuSubsection from '../../SideMenuSubsection'

import './style.css'

class MainPage extends PureComponent {

    state = {
        title: "Группа",
        currentComponent: SideMenuSubsection["Группы"],
    }

    clickSubsection = (chooseSubsection) =>{
        this.setState({
            currentComponent: SideMenuSubsection[chooseSubsection]
        })
    }

    render() {
        return (
            <div className="page-viewer">
                <Header/>
                <SideMenu sideMenuSection = {SideMenuSections}
                          onLinkSubsectionClick = {this.clickSubsection}
                          selectedElement = {this.state.currentComponent.subsectionProps.sectionName}/>
                <MainContent ComponentName = {this.state.currentComponent.subsectionComponent}
                             title = {this.state.title}
                />
            </div>
        )
    }
}

export default MainPage