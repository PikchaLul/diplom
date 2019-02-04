import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

class OrganizationInput extends PureComponent {
    render() {
        return(
            <div className="card at-panel">
                <div className="at-panel-header">
                    <div className="at-panel-header-row">
                        <h3 className="at-panel-header-title">Новая организация</h3>
                        <div className="at-panel-custom-content"></div>
                        <div className="at-panel-dismiss">
                            <FontAwesomeIcon icon="times-circle" className="button-icon lg" />
                        </div>
                    </div>
                </div>
                <div className="card-body at-panel-body">
                    <div>
                        <form>
                            <div className="row">
                                <div className="col-sm-4 at-input-container">
                                    <div className="form-group at-u-flat">
                                        <label className="at-input-label">
                                            <span className="at-input-label-required">*</span>
                                            <span className="at-input-label-name">Имя</span>
                                            <div className="at-popover at-popover-inline">
                                                <div className="at-popover-icon">
                                                    <FontAwesomeIcon icon="question-circle" className="button-icon lg" />
                                                </div> 
                                                <div className="at-popover-container">

                                                </div>

                                            </div>
                                        </label>
                                        <input className="at-input form-control at-input-rejected"/>
                                        <p className="at-input-message-rejected ">fdgdfgdf</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 at-input-container">
                                    <div className="form-group at-u-flat">
                                        <label className="at-input-label">
                                            <span className="at-input-label-required">*</span>
                                            <span className="at-input-label-name">Описание</span>
                                            <div className="at-popover at-popover-inline">
                                                <div className="at-popover-icon">
                                                    <FontAwesomeIcon icon="question-circle" className="button-icon lg" />
                                                </div> 
                                                <div className="at-popover-container">

                                                </div>

                                            </div>
                                        </label>
                                        <input className="at-input form-control at-input-rejected"/>
                                        <p className="at-input-message-rejected ">fdgdfgdf</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 at-input-container">
                                    <div className="form-group at-u-flat">
                                        <label className="at-input-label">
                                            <span className="at-input-label-required">*</span>
                                            <span className="at-input-label-name">Группа</span>
                                            <div className="at-popover at-popover-inline">
                                                <div className="at-popover-icon">
                                                    <FontAwesomeIcon icon="question-circle" className="button-icon lg" />
                                                </div> 
                                                <div className="at-popover-container">
                                                </div>
                                            </div>
                                        </label>
                                        <div className="at-input-lookup">
                                            <button className="at-input-lookup-button">
                                                <FontAwesomeIcon icon="search" className="search-icon" />
                                            </button>
                                            <input className="at-input form-control at-input-rejected" placeholder="Выберите группу"/>
                                        </div>
                                        <p className="at-input-message-rejected ">fdgdfgdf</p>
                                    </div>
                                </div>
                                <div className="col-sm-4 at-input-container">
                                    <div className="form-group at-u-flat">
                                        <label className="at-input-label">
                                            <span className="at-input-label-required">*</span>
                                            <span className="at-input-label-name">Пользователь</span>
                                            <div className="at-popover at-popover-inline">
                                                <div className="at-popover-icon">
                                                    <FontAwesomeIcon icon="question-circle" className="button-icon lg" />
                                                </div> 
                                                <div className="at-popover-container">
                                                </div>
                                            </div>
                                        </label>
                                        <div className="at-input-lookup">
                                            <button className="at-input-lookup-button">
                                                <FontAwesomeIcon icon="search" className="search-icon" />
                                            </button>
                                            <input className="at-input form-control at-input-rejected" placeholder="Выберите пользователя"/>
                                        </div>
                                        <p className="at-input-message-rejected ">fdgdfgdf</p>
                                    </div>
                                </div>
                                <div className="col-sm-12 at-action-group">
                                    <div className="pull-right">
                                        <button className="btn at-button-hollow-default">Отменить</button>
                                        <button className="btn at-button-hollow-success">Сохранить</button>
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

export default OrganizationInput