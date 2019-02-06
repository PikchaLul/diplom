import React, {PureComponent} from 'react'

import MainContent from '../MainContent'
import Header from '../Header'
import SideMenu from '../SideMenu'

import SideMenuSections from '../SideMenuSections'
import SideMenuSubsection from '../SideMenuSubsection'

import './style.css'

class PageViewer extends PureComponent {
    
    state = {
        currentComponent: SideMenuSubsection["Организации"],
        currentModalPage: null,
        isOpenInput: false,
        isModalShow: false
    }

    render() {
        return (
            <div className="page-viewer">
                <Header/>
                <SideMenu sideMenuSection = {SideMenuSections}
                          onLinkSubsectionClick = {this.clickSubsection}
                          selectedElement = {this.state.currentComponent.subsectionProps.sectionName}/>
                <MainContent SubsectionView = {this.state.currentComponent.subsectionComponent}
                             subsectionProps = {this.state.currentComponent.subsectionProps}
                             onButtonAddRecordClick = {this.onButtonAddRecordClick}
                             onButtonCancelRecordClick = {this.onButtonCancelRecordClick}
                             isOpenInput = {this.state.isOpenInput}
                             isModalShow = {this.state.isModalShow}
                             currentModalPage  = {this.state.currentModalPage}
                             modalShow = {this.modalShow}
                             modalClose = {this.modalClose}
                />
            </div>
        )
    }

    clickSubsection = (chooseSubsection) =>{
        this.setState({
            currentComponent: SideMenuSubsection[chooseSubsection],
            isOpenInput: false
        })
    }

    onButtonAddRecordClick = () => {
        this.setState({isOpenInput: true})
    }

    onButtonCancelRecordClick = () => {
        this.setState({isOpenInput: false})
    }

    modalShow = (fieldName) => {
        this.setState({ isModalShow: true, currentModalPage: fieldName })
    }

    modalClose = () => {
        this.setState({ isModalShow: false, currentModalPage: null })
    }
}

export default PageViewer