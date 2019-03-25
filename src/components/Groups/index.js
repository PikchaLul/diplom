import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import TableContainer from '../TableContainer'

import './style.css'

const header = [
    {
        id: "1",
        columnName: "Имя группы",
        position: ""
    },
    {
        id: "2",
        columnName: "Кол-во пользователей",
        position: "center"
    },
    {
        id: "3",
        columnName: "Статус",
        position: "center"
    },
    {
        id: "4",
        columnName: "Действия",
        position: "center"
    }
];

class Groups extends PureComponent {
    render() {
        const { Data } = this.props;

        const headerRow = header.map((element) =>
            <div key={element.id} className="table-header table-cell col-md-3">
                <span className={element.position}>{element.columnName}</span>
            </div>
        )

        const bodyRow = Data.map((record) =>
            <div key={record.id} className="list-default-table-row list-table-row">
                <div></div>
                <div className="d-flex h-100">
                    <div className="table-cell col-md-3">
                        <span className="">{record.name}</span>
                    </div>
                    <div className="table-cell col-md-3">
                        <span className="badge title-badge total center">{record.userCount}</span>
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
            <TableContainer header={headerRow}
                body={bodyRow} />
        )
    }
}

export default Groups