import React, { PureComponent } from 'react'

import './style.css'

class InputPrivilege extends PureComponent {

    render() {
        return(
            <div className="col-sm-12 at-input-group">
                <div className="at-input-group-border"></div>
                <div className="at-input-group-inset">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="at-panel-header-title">Настройки привилегий</h3>
                        </div>
                    </div>
                    <div className="at-input-group-container">
                        <div className="row">
                            <div className="col-sm-4 at-input-container">
                                <div className="form-group at-u-flat">
                                    <label className="at-input-label">
                                        <span className="at-input-label-required">*</span>
                                        <span className="at-input-label-name">Имя пользователя</span>
                                    </label>
                                    <input className="at-input form-control at-input-rejected" placeholder="Имя пользователя"/>
                                    <p className="at-input-message-rejected">fdgdfgdf</p> 
                                </div>
                            </div>
                            <div className="col-sm-4 at-input-container">
                                <div className="form-group at-u-flat">
                                    <label className="at-input-label">
                                        <span className="at-input-label-required">*</span>
                                        <span className="at-input-label-name">Пароль</span>
                                    </label>
                                    <input className="at-input form-control at-input-rejected" placeholder="Введите пароль"/>
                                    <p className="at-input-message-rejected">fdgdfgdf</p> 
                                </div>
                            </div>
                            <div className="col-sm-12 at-input-container">
                                <div className="form-group at-u-flat">
                                    <label className="at-input-label">
                                        <span className="at-input-label-required">*</span>
                                        <span className="at-input-label-name">Ssh-private-key</span>
                                    </label>
                                    <div className="at-input-ssh">
                                        <input className="at-input-file-hidden"></input>
                                        <textarea className="form-control at-input at-input-textarea"></textarea>
                                    </div>
                                    <p className="at-input-message-rejected">fdgdfgdf</p> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
    }
}

export default InputPrivilege