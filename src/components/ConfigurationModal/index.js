import React, {PureComponent} from 'react'
import {Modal, Button} from 'react-bootstrap'
import { BrowserRouter as Link } from "react-router-dom";

import './style.css'


class ConfigurationModal extends PureComponent {
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
                                    Хост базы данных
                                </label>
                                <div className="col-md-12">
                                    <input type="text" 
                                           className="at-input form-control" 
                                           placeholder="Введите имя хоста вашей базы данных">
                                    </input>
                                </div>
                            </div>
                            <div className="form-group configuration-modal-form-group">
                                <label className="configuration-modal-label col-md-12">
                                    Порт базы данных
                                </label>
                                <div className="col-md-12">
                                    <input type="text" 
                                           className="at-input form-control" 
                                           placeholder="Введите порт вашей базы данных">
                                    </input>
                                </div>
                            </div>
                            <div className="form-group configuration-modal-form-group">
                                <label className="configuration-modal-label col-md-12">
                                    Имя базы данных
                                </label>
                                <div className="col-md-12">
                                    <input type="text" 
                                           className="at-input form-control" 
                                           placeholder="Введите имя вашей базы данных">
                                    </input>
                                </div>
                            </div>
                            <div className="form-group configuration-modal-form-group">
                                <label className="configuration-modal-label col-md-12">
                                    Имя пользователя
                                </label>
                                <div className="col-md-12">
                                    <input type="text" 
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
                                           className="at-input form-control" 
                                           placeholder="Введите пароль">
                                    </input>
                                </div>
                            </div>
                        </form>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Войти</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ConfigurationModal