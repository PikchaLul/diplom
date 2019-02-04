import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OrganizationInput from '../OrganizationInput'

import './style.css'

class MainContent extends PureComponent {

    state = {
        isOpenInput: false
    }

    render() {
        const {SubsectionView, subsectionProps} = this.props;
        console.log(subsectionProps)

        return (
            <div className="main-content-layout">
                <div className="content-layout">
                    <div className="container-fluid">
                        {this.state.isOpenInput ? <OrganizationInput onButtonCancelClick = {this.onButtonCancelRecordClick}/> : null}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tab-pane">
                                    <div className="card at-panel">
                                        <div className="content-header">
                                            <div className="content-header-text">
                                                {subsectionProps.sectionName}
                                            </div>
                                            <span className="badge title-badge">
                                                {subsectionProps.sectionNameCount}
                                            </span>
                                        </div>
                                        <div className="content-view">
                                            <div className="smart-search row">
                                                <div className="smart-search-bar">
                                                    <div className="smart-search-searcher">
                                                        <form name="smart-search" className="smart-search-form">
                                                            <label />
                                                            <input className="smart-search-input" name="smart-search-input" placeholder="ПОИСК" />
                                                        </form>
                                                        <div className="smart-search-searchButton">
                                                            <FontAwesomeIcon icon="search" className="search-icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="action-list">
                                                    <button className="action-button-add"  onClick = {this.onButtonAddRecordClick}>
                                                            <FontAwesomeIcon icon="plus" className="button-icon lg" />
                                                    </button>
                                                </div>
                                            </div>
                                            <SubsectionView subsectionData = {subsectionProps.subsectionData}/>
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

    onButtonAddRecordClick = () => {
        this.setState({
            isOpenInput: true
        })
    }

    onButtonCancelRecordClick = () => {
        this.setState({
            isOpenInput: false
        })
    }

}

export default MainContent