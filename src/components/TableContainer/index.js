import React, { PureComponent } from 'react'

import './style.css'

class TableContainer extends PureComponent {
    render() {
        return (
            <div className="list-table-container">
                <div className="list-table">
                    <div className="list-default-table-row list-table-header-row">
                        <div></div>
                        <div className="d-flex h-100">
                            {this.props.header}
                        </div>
                    </div>
                    <div>
                    {this.props.body}
                    </div>
                </div>
            </div>
        )
    }
}

export default TableContainer