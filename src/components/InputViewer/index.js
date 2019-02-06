import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import InputPrivilege from '../InputPrivilege'
import SelectModal from '../SelectModal'

import SelectModalsData from '../SelectModalsData'

import './style.css'

class InputViewer extends PureComponent {
    render() {
        const {onButtonCancelClick, fieldsPropeties} = this.props;

        const inputConstructor = {
            "common": (placeholder)=>{return(<input className="at-input form-control at-input-rejected" placeholder={placeholder}/>)},
            "lookUp": (placeholder, fieldName)=>{return(<div className="at-input-lookup">
                                                 <button type="button" className="at-input-lookup-button" onClick={this.props.modalShow.bind(this, fieldName)}>
                                                     <FontAwesomeIcon icon="search" className="search-icon"/>
                                                 </button>
                                                 <input className="at-input form-control at-input-rejected" placeholder={placeholder}/>
                                             </div> )}
            
        }

        console.log(SelectModalsData[this.props.currentModalPage]);

        return(
            <div className="card at-panel">
                <div className="at-panel-header">
                    <div className="at-panel-header-row">
                        <h3 className="at-panel-header-title">{fieldsPropeties.inputTitle}</h3>
                        <div className="at-panel-custom-content"></div>
                        <div className="at-panel-dismiss" onClick={onButtonCancelClick}>
                            <FontAwesomeIcon icon="times-circle" className="button-icon lg" />
                        </div>
                    </div>
                </div>
                <div className="card-body at-panel-body">
                    <div>
                        <form>
                            <div className="row">
                                {fieldsPropeties.inputBody.map((field)=>
                                    <div className="col-sm-4 at-input-container">
                                        <div className="form-group at-u-flat">
                                            <label className="at-input-label">
                                                <span className="at-input-label-required">*</span>
                                                <span className="at-input-label-name">{field.fieldName}</span>
                                            </label>
                                            {inputConstructor[field.fieldType](field.fieldPlaceholder, field.fieldName)}
                                            <p className="at-input-message-rejected">fdgdfgdf</p> 
                                        </div>
                                    </div>
                                )}
                                {this.props.currentModalPage ? <SelectModal show={this.props.isModalShow} 
                                                                            onHide={this.props.modalClose} 
                                                                            data={SelectModalsData[this.props.currentModalPage]}/> 
                                                            : null}
                                {/* <InputPrivilege/> */}
                                <div className="col-sm-12 at-action-group">
                                    <div className="pull-right">
                                        <button className="btn at-button-hollow-default" type="button" onClick={onButtonCancelClick}>Отменить</button>
                                        <button className="btn at-button-hollow-success" type="button">Сохранить</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default InputViewer