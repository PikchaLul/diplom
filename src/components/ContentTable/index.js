import React, { PureComponent } from 'react'

import './style.css'

class ContentTable extends PureComponent {
    render() {
        const {header, rows} = this.props; 

        return (
            <div className="projects-table-container">
                <div className="projects-table">
                    <div className="projects-table-row">
                        <div></div>
                        <div className="d-flex h-100 projects-table-header-row">
                            {header.map((element)=>
                                <div className={element.columnContainerClassName}>
                                    <span className={element.position}>{element.columnName}</span>
                                </div>
                            )}
                        </div>
                        <div></div>
                        <div className="d-flex h-100">
                            {rows.map((row)=>
                                row.map((element) =>
                                    <div className={element.rowContainerClassName}>
                                        {element.rowContent}
                                    </div>
                                ) 
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContentTable