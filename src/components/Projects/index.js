import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentTable from '../ContentTable'

import './style.css'

const rowConstructor = {
    projectName: (element) => {return {rowContainerClassName: "table-cell col-md-3",
                                       rowContent: <a className="organization-cards-linkName" herf="#">{element.data}</a>
                              }},
    organizationName: (element) => {return {rowContainerClassName: "table-cell col-md-3",
                                            rowContent: <a className="organization-cards-linkName center" herf="#">{element.data}</a>
                                    }},
    servers:  (element) => {return {rowContainerClassName: "table-cell col-md-3",
                                    rowContent: <div className="center">
                                                    <span className="badge title-badge total">{element.data.total}</span>
                                                    <span>/</span>
                                                    <span className="badge title-badge online">{element.data.online}</span>
                                                    <span>/</span>
                                                    <span className="badge title-badge offline">{element.data.offline}</span>
                                                </div>
                            }},
    icons: (element) => {return {rowContainerClassName:"list-action-button-container col-md-3",
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

class Projects extends PureComponent {
    render() {
        const {subsectionData} = this.props; 

        const tableHeader = subsectionData.header.map((element) =>
        {
            return {
                columnName: element.columnName,
                columnContainerClassName: "table-header table-cell col-md-3",
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

export default Projects