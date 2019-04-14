import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableContainer from '../../Containers/TableContainer'

import './style.css'

const header = [
    {
        columnName: "Имя пользователя",
        position: ""
    },
    {
        columnName: "Статус",
        position: "center"
    },
    {
        columnName: "Действия",
        position: "center"
    }
];

class Users extends PureComponent {
    render() {
        const { Data } = this.props;

        const headerRow = header.map((element) =>
            <div key={element.id} className="table-header table-cell col-md-4">
                <span className={element.position}>{element.columnName}</span>
            </div>
        )

        const bodyRow = Data.map((record) =>
            <div key={record.id} className="list-default-table-row list-table-row">
                <div></div>
                <div className="d-flex h-100">
                    <div className="table-cell col-md-4">
                        <span className="">{record.name}</span>
                    </div>
                    <div className="table-cell col-md-4">
                        <span className="status-on center">{record.status}</span>
                    </div>
                    <div className="list-action-button-container col-md-4">
                        <div className="table-cell list-action-button-cell">
                            <div className="center">
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
                body={bodyRow}
            />
        )
    }
}

export default Users