import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentTable from '../ContentTable'

import './style.css'

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
        const {subsectionData} = this.props; 

        const tableHeader = subsectionData.header.map((element) =>
        {
            return {
                columnName: element.columnName,
                columnContainerClassName: "table-header table-cell col-md-4",
                position: element.position
            }
        })

        const rows = subsectionData.body.map((row) => {
            return row.map((element)=>rowConstructor[element.type](element))
        })

        return (
            <ContentTable header = {tableHeader}
                          rows = {rows}
            />
        )
    }
}

export default Users