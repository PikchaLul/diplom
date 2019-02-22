import React, {PureComponent} from 'react'

import MainContent from '../MainContent'
import Header from '../Header'
import SideMenu from '../SideMenu'

import GroupsStore from '../../stores/GroupsStore';
import GroupsActions from '../../actions/GroupsActions';

import SideMenuSections from '../SideMenuSections'
import SideMenuSubsection from '../SideMenuSubsection'

import './style.css'

function getStateFromFlux() {
    return {
        isLoading: GroupsStore.isLoading(),
        groups: GroupsStore.getGroups(),
        currentComponent: SideMenuSubsection["Группы"]
    };
}

class PageViewer extends PureComponent {

    state = {
        isLoading: false,
        title: "Группа",
        groups: [],
        currentComponent: SideMenuSubsection["Группы"],
        isOpenEditor: false
    }

    componentDidMount() {
        GroupsActions.loadGroups();  
        GroupsStore.addChangeListener(this._onChange);     
    }

    componentWillUnmount() {
        GroupsStore.removeChangeListener(this._onChange);
    }

    handleGroupDelete = (group) => {
        GroupsActions.deleteGroup(group.id);
    }

    handleGroupAdd = (groupData) => {
        GroupsActions.createGroup(groupData);
    }

    clickSubsection = (chooseSubsection) =>{
        this.setState({
            currentComponent: SideMenuSubsection[chooseSubsection],
            isOpenEditor: false
        })
    }

    _onChange = () => {
        this.setState({...getStateFromFlux()});
    }

    onButtonAddRecordClick = () => {
        this.setState({isOpenEditor: true})
    }

    onButtonCancelRecordClick = () => {
        this.setState({isOpenEditor: false})
    }

    render() {
        return (
            <div className="page-viewer">
                <Header/>
                <SideMenu sideMenuSection = {SideMenuSections}
                          onLinkSubsectionClick = {this.clickSubsection}
                          selectedElement = {this.state.currentComponent.subsectionProps.sectionName}/>
                <MainContent ComponentName = {this.state.currentComponent.subsectionComponent}
                             currentModalPage  = {this.state.currentModalPage}
                             title = {this.state.title}
                             groups = {this.state.groups}
                             onGroupAdd = {this.handleGroupAdd}
                             onGroupDelete = {this.handleGroupDelete}
                             isOpenEditor = {this.state.isOpenEditor}
                             onButtonAddRecordClick = {this.onButtonAddRecordClick}
                             onButtonCancelRecordClick = {this.onButtonCancelRecordClick}
                />
            </div>
        )
    }
}

export default PageViewer