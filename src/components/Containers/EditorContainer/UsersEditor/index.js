import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import SelectModal from '../../SelectModal'

import SelectModalsData from '../../SelectModalsData'

import './style.css'

class GroupsEditor extends PureComponent {

    state = {
        name: '',
        surname: '',
        patronymic: '',
        login: '',
        password: '',
        confirmationPassword: '',
        email: ''
    }

    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    handleSurnameChange = (event) => {
        this.setState({ surname: event.target.value });
    }

    handlePatronymicChange = (event) => {
        this.setState({ patronymic: event.target.value });
    }

    handleLoginChange = (event) => {
        this.setState({ login: event.target.value });
    }

    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    handleConfirmationPasswordChange = (event) => {
        this.setState({ confirmationPassword: event.target.value });
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    handleGroupAdd = () => {
       
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
                            placeholder="Имя пользователя" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Фамилия</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handleSurnameChange}
                            defaultValue={this.state.surname}
                            placeholder="Фамилия пользователя" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Отчество</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handlePatronymicChange}
                            defaultValue={this.state.patronymic}
                            placeholder="Отчество пользователя" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Логин</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handleLoginChange}
                            defaultValue={this.state.login}
                            placeholder="Логин пользователя" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Пароль</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handlePasswordChange}
                            defaultValue={this.state.password}
                            placeholder="Введите пароль" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">Подтверждение пароля</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handleСonfirmationPasswordChange}
                            defaultValue={this.state.confirmationPassword}
                            placeholder="Подтвердите пароль" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-4 at-input-container">
                    <div className="form-group at-u-flat">
                        <label className="at-input-label">
                            <span className="at-input-label-required">*</span>
                            <span className="at-input-label-name">e-mail</span>
                        </label>
                        <input className="at-input form-control at-input-rejected"
                            onChange={this.handleEmailChange}
                            defaultValue={this.state.email}
                            placeholder="E-mail" />
                        <p className="at-input-message-rejected">fdgdfgdf</p>
                    </div>
                </div>
                <div className="col-sm-12 at-action-group">
                    <div className="pull-right">
                        <button className="btn at-button-hollow-default" type="button" onClick={this.props.onButtonCancelClick}>Отменить</button>
                        <button className="btn at-button-hollow-success" type="button" onClick={this.handleUserAdd}>Сохранить</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default GroupsEditor