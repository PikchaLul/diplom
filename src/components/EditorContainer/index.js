import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import GroupsEditor from './GroupsEditor'

import './style.css'

class EditorsViewer extends PureComponent {  
    render() {
        return(
            <div className="card at-panel">
                <div className="at-panel-header">
                    <div className="at-panel-header-row">
                        <h3 className="at-panel-header-title">Новая группа</h3>
                        <div className="at-panel-custom-content"></div>
                        <div className="at-panel-dismiss" onClick={this.props.onButtonCancelClick}>
                            <FontAwesomeIcon icon="times-circle" className="button-icon lg" />
                        </div>
                    </div>
                </div>
                <div className="card-body at-panel-body">
                    <div>
                        <form>
                            <GroupsEditor onGroupAdd={this.props.onGroupAdd}
                                          onButtonCancelClick={this.props.onButtonCancelClick}/>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default EditorsViewer