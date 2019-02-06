import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Modal, Button} from 'react-bootstrap'

import './style.css'

class SelectModal extends PureComponent {
    render() {
        return(
            <Modal
                {...this.props}
                aria-labelledby="contained-modal-title-vcenter"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {this.props.data.modalTitle}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body">
                        <div>
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
                        <div className="list-table-container">
                            <div className="list-table">
                                <div className="list-lookup-layout list-table-header-row">
                                    <div></div>
                                    <div className="d-flex h-100">
                                        <div className="list-table-header list-table-cell">
                                            {this.props.data.modalFieldName}
                                        </div>
                                    </div>
                                </div>
                                <div className="selector-list-body">
                                    {this.props.data.modalBody.map((record) => 
                                        <div className="list-lookup-layout list-table-row">
                                            <div className="list-center-end">
                                                <input type="radio"></input>
                                            </div>
                                            <div className="d-flex h-100">
                                                <div className="list-table-cell col-sm-12">{record.recordName}</div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={this.props.onHide}>Закрыть</Button>
                  <Button>Выбрать</Button>
                </Modal.Footer>
            </Modal>
            // <div className="selector-veiw">
            //     <div className="Lookup modal fade">
            //         <div className="modal-dialog">
            //             <div className="modal-content">
            //                 <div className="modal-header form-header">
            //                     <div className="selector-form-title">Выберите организацию</div>
            //                     <div className="selector-form-header-fields"></div>
            //                     <div className="at-panel-dismiss">
            //                         <FontAwesomeIcon icon="times-circle" className="button-icon lg" />
            //                     </div>
            //                 </div>
            //                 <div className="modal-body">
            //                     <div>
            //                         <div className="smart-search-searcher">
            //                             {/* <form name="smart-search" className="smart-search-form">
            //                                 <label />
            //                                 <input className="smart-search-input" name="smart-search-input" placeholder="ПОИСК" />
            //                             </form> */}
            //                             <div className="smart-search-searchButton">
            //                                 <FontAwesomeIcon icon="search" className="search-icon" />
            //                             </div>
            //                         </div>
            //                     </div>
            //                     <div className="list-table-container">
            //                         <div className="list-table">
            //                             <div className="list-lookup-layout list-table-header-row">
            //                                 <div></div>
            //                                 <div className="d-flex h-100">
            //                                     <div className="list-table-header list-table-cell">
            //                                         Имя организации
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                             <div className="selector-list-body">
            //                                 <div className="list-lookup-layout list-table-row">
            //                                     <div className="list-center-end">
            //                                         <input type="radio"></input>
            //                                     </div>
            //                                     <div className="d-flex h-100">
            //                                         <div className="list-table-cell col-sm-12">ФИТ</div>
            //                                     </div>
            //                                 </div>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>    
            // </div>
        ) 
    }
}

export default SelectModal