import React, { PureComponent } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { BrowserRouter as Link, Redirect } from "react-router-dom";

import './style.css'


class AuthorizationModal extends PureComponent {

    state = {
        userName: '',
        userPassword: ''
    }

    handleUserAuthorization = () => {
        const user = {
            login: this.state.userName,
            password: this.state.userPassword
        }

        this.props.onClose(user);
    }

    handleUserNameChange = (event) => {
        this.setState({ userName: event.target.value });
    }

    handleUserPasswordChange = (event) => {
        this.setState({ userPassword: event.target.value });
    }

    render() {
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Авторизация
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="configuration-modal-body">
                        <form className="form-horizontal">
                            <div className="form-group configuration-modal-form-group">
                                <label className="configuration-modal-label col-md-12">
                                    Имя пользователя
                                </label>
                                <div className="col-md-12">
                                    <input type="text"
                                        onChange={this.handleUserNameChange}
                                        defaultValue={this.state.userName}
                                        className="at-input form-control"
                                        placeholder="Введите имя пользователя">
                                    </input>
                                </div>
                            </div>
                            <div className="form-group configuration-modal-form-group">
                                <label className="configuration-modal-label col-md-12">
                                    Пароль
                                </label>
                                <div className="col-md-12">
                                    <input type="text"
                                        onChange={this.handleUserPasswordChange}
                                        defaultValue={this.state.userPassword}
                                        className="at-input form-control"
                                        placeholder="Введите пароль">
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleUserAuthorization}>Войти</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default AuthorizationModal