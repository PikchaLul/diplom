import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import EditorContainer from '../EditorContainer'

import './style.css'

class MainContent extends PureComponent {
    render() {
        const {ComponentName} = this.props;
        console.log('sdfsdfdfsdfsd');

        return (
            <div className="main-content-layout">
                <div className="content-layout">
                    <div className="container-fluid">
                        {this.props.isOpenEditor ? <EditorContainer onButtonCancelClick = {this.props.onButtonCancelRecordClick}
                                                                    currentModalPage = {this.props.currentModalPage}
                                                                    onGroupAdd = {this.props.onGroupAdd}

                        /> : null}
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="tab-pane">
                                    <div className="card at-panel">
                                        <div className="content-header">
                                            <div className="content-header-text">
                                                {this.props.title}
                                            </div>
                                            <span className="badge title-badge">
                                                {this.props.groups.length}
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
                                                    <button className="action-button-add"  onClick = {this.props.onButtonAddRecordClick}>
                                                            <FontAwesomeIcon icon="plus" className="button-icon lg" />
                                                    </button>
                                                </div>
                                            </div>
                                            <ComponentName Data = {this.props.groups}/>
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

export default MainContent