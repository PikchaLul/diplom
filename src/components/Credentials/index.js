import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ContentTable from '../ContentTable'

import './style.css'

const rowConstructor = {
    userName: (element) => {return {rowContainerClassName: "table-cell col-md-2",
                                    rowContent: <span className="">{element.data}</span>
                              }},
    type: (element) => {return {rowContainerClassName: "table-cell col-md-2",
                                rowContent: <span className="center">{element.data}</span>
                                    }},
    organizationName:  (element) => {return {rowContainerClassName: "table-cell col-md-2",
                                             rowContent: <a className="organization-cards-linkName center" herf="#">{element.data}</a>
                            }},
    projectList: (element) => {return {rowContainerClassName:"table-cell col-md-2",
                                       rowContent: <a className="organization-cards-linkName center" herf="#">{element.data}</a>
                        }},
    serverList: (element) => {return {rowContainerClassName: "table-cell col-md-2",
                                      rowContent: <a className="organization-cards-linkName center" herf="#">{element.data}</a>
                             }},
    icons: (element) => {return {rowContainerClassName: "list-action-button-container col-md-2",
                                 rowContent: <div className="table-cell list-action-button-cell">
                                                <div className="center">
                                                    {element.data.map((iconName) =>
                                                        <button className="action-button">
                                                            <FontAwesomeIcon icon={iconName} className="button-icon" />
                                                        </button>
                                                    )}
                                                </div>
                                             </div>
                                }},
}

class Credentials extends PureComponent {
    render() {
        const {subsectionData} = this.props; 

        const tableHeader = subsectionData.header.map((element) =>
        {
            return {
                columnName: element.columnName,
                columnContainerClassName: "table-header table-cell col-md-2",
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

export default Credentials