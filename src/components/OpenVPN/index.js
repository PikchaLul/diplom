import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TableContainer from '../TableContainer'

import './style.css'

const rowConstructor = {
    openvpnName: (element) => {return {rowContainerClassName: "table-cell col-md-1",
                                       rowContent: <span className="">{element.data}</span>
                              }},
    type: (element) => {return {rowContainerClassName: "table-cell col-md-1",
                                rowContent: <span className="center">{element.data}</span>
                                    }},
    organizationName:  (element) => {return {rowContainerClassName: "table-cell col-md-2",
                                             rowContent: <a className="organization-cards-linkName center" href="/">{element.data}</a>
                            }},
    status: (element) => {return {rowContainerClassName:"table-cell col-md-1",
                                  rowContent: <span className="center status-on">{element.data}</span>
                        }},
    credentialsCount: (element) => {return {rowContainerClassName: "table-cell col-md-2",
                                            rowContent: <div className="center">
                                                          <span className="badge title-badge total">{element.data.total}</span>
                                                          <span>/</span>
                                                          <span className="badge title-badge online">{element.data.online}</span>
                                                          <span>/</span>
                                                          <span className="badge title-badge offline">{element.data.offline}</span>
                                                        </div>
                             }},        
    userIcons: (element) => {return {rowContainerClassName: "list-action-button-container col-md-2",
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
    actionIcons: (element) => {return {rowContainerClassName: "list-action-button-container col-md-3",
                                       rowContent: rowConstructor.userIcons(element)['rowContent']
                                      }},
}

class OpenVPN extends PureComponent {
    render() {
        const {subsectionData} = this.props; 

        const headerClassType = ["table-header table-cell col-md-1", 
                                 "table-header table-cell col-md-1", 
                                 "table-header table-cell col-md-2", 
                                 "table-header table-cell col-md-1",
                                 "table-header table-cell col-md-2",
                                 "table-header table-cell col-md-2",
                                 "table-header table-cell col-md-3"]

        const tableHeader = subsectionData.header.map((element, index) =>
        {
            return {
                columnName: element.columnName,
                columnContainerClassName: headerClassType[index],
                position: element.position
            }
        })

        const rows = subsectionData.body.map((row) => {
            return row.map((element)=>rowConstructor[element.type](element))
        })

        return (
            <TableContainer header = {tableHeader}
                          rows = {rows}
            />
        )
    }
}

export default OpenVPN