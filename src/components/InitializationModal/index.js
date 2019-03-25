import React, { PureComponent } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { BrowserRouter as Link } from "react-router-dom";

import './style.css'


class InitializationModal extends PureComponent {

    state = {
        superUserName: '',
        superUserPassword: ''
    }

    handleSuperUserAdd = () => {
        const superUser = {
            login: this.state.superUserName,
            password: this.state.superUserPassword
        }

        this.props.onClose(superUser);
    }

    handleSuperUserNameChange = (event) => {
        this.setState({ superUserName: event.target.value });
        console.log(this.state.superUserName);
    }

    handleSuperUserPasswordChange = (event) => {
        this.setState({ superUserPassword: event.target.value });
        console.log(this.state.superUserPassword);
    }

    render() {
        return (
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Конфигурационные данные
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
                                        onChange={this.handleSuperUserNameChange}
                                        defaultValue={this.state.superUserName}
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
                                        onChange={this.handleSuperUserPasswordChange}
                                        defaultValue={this.state.superUserPassword}
                                        className="at-input form-control"
                                        placeholder="Введите пароль">
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSuperUserAdd}>Войти</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default InitializationModal