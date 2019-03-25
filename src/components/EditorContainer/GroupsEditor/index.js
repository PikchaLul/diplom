import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SelectModal from '../../SelectModal'

import SelectModalsData from '../../SelectModalsData'

import './style.css'

class InputViewer extends PureComponent {

    state = {
        name: '',
        description: '',
        accessRights: '',
        currentModalPage: null,
        isModalShow: false
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleDescriptionChange = (event) => {
        this.setState({ description: event.target.value });
    }

    handleAccessRightsChange = (right) => {
        this.setState({ accessRights: right, isModalShow: false });
    }

    handleGroupAdd = () => {
        const newGroup = {
            name: this.state.name,
            description: this.state.description,
            accessRights: this.state.accessRights
        };

        this.props.onGroupAdd(newGroup);
        this.setState({ name: '', description: '', accessRights: '' });
    }

    modalShow = (fieldName) => {
        console.log(fieldName)
        this.setState({ isModalShow: true, currentModalPage: fieldName })
    }

    modalClose = () => {
        this.setState({ isModalShow: false, currentModalPage: null })
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Имя</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handleNameChange}
                            defaultValue={this.state.name}
                            placeholder="Название группы" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Описание</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handleDescriptionChange}
                            defaultValue={this.state.description}
                            placeholder="Описание группы" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Права доступа</span>
                        </label>
                        <div className="at-input-lookup">
                            <button type="button" className="at-input-lookup-button" onClick={this.modalShow.bind(this, "Права доступа")}>
                                <FontAwesomeIcon icon="search" className="search-icon" />
                            </button>
                            <input className="at-input form-control at-input-rejected"
                                defaultValue={this.state.accessRights}
                                placeholder="Выберите тип доступа" />
                        </div>
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                {this.state.isModalShow ? <SelectModal show={this.state.isModalShow}
                    onHide={this.modalClose}
                    onSelect={this.handleAccessRightsChange}
                    data={SelectModalsData[this.state.currentModalPage]} />
                    : null}
                <div className="col-sm-12 at-action-group">
                    <div className="pull-right">
                        <button className="btn at-button-hollow-default" type="button" onClick={this.props.onButtonCancelClick}>Отменить</button>
                        <button className="btn at-button-hollow-success" type="button" onClick={this.handleGroupAdd}>Сохранить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default InputViewer