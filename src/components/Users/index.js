import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableContainer from '../TableContainer'

import './style.css'

const header = [ 
    {
        columnName:"Имя пользователя",
        position: ""
    },
    {
        columnName:"Статус",
        position: "center"
    },
    {
        columnName:"Действия",
        position: "center"
    }
];

const rowConstructor = {
    userName: (element) => {return {rowContainerClassName: "table-cell col-md-4",
                                    rowContent: <span className="">{element.data}</span>
                              }},
    status: (element) => {return {rowContainerClassName: "table-cell col-md-4",
                                  rowContent: <span className="status-on center">{element.data}</span>
                                    }},
    icons: (element) => {return {rowContainerClassName:"list-action-button-container col-md-4",
                                 rowContent: <div className="table-cell list-action-button-cell">
                                                 <div className="center">
                                                    {element.data.map((iconName) =>
                                                        <button className="action-button">
                                                            <FontAwesomeIcon icon={iconName} className="button-icon" />
                                                        </button>
                                                    )}
                                                 </div>
                                             </div>
                        }}
}

class Users extends PureComponent {
    render() {
        const {Data} = this.props; 

        const headerRow = header.map((element)=>
                            <div key={element.id} className="table-header table-cell col-md-4">
                                <span className={element.position}>{element.columnName}</span>
                            </div>
                          )

        const bodyRow = Data.map((record)=>
        <div key={record.id} className="list-default-table-row list-table-row">
            <div></div>
            <div className="d-flex h-100">
                <div className="table-cell col-md-4">
                    <span className="">{record.name}</span>
                </div>
                <div className="table-cell col-md-4">
                    <span className="badge title-badge total center">{record.status}</span>
                </div>
                <div className="table-cell col-md-3">
                    <div className="center">
                        <span className="badge title-badge online">{record.userCount}</span>
                        <span>/</span>
                        <span className="badge title-badge offline">{record.userCount}</span>
                    </div>
                </div>
                <div className="list-action-button-container col-md-3">
                    <div className="table-cell list-action-button-cell">
                        <div className="center">
                            <button className="action-button">
                                <FontAwesomeIcon icon="plus" className="button-icon" />
                            </button>
                            <button className="action-button">
                                <FontAwesomeIcon icon="minus" className="button-icon" />
                            </button>
                            <button className="action-button">
                                <FontAwesomeIcon icon="pencil-alt" className="button-icon" />
                            </button>
                            <button className="action-button">
                                <FontAwesomeIcon icon="trash" className="button-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>     
    )

        return (
            <TableContainer header = {headerRow}
                            rows =   {bodyRow}
            />
        )
    }
}

export default Users