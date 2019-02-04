import React, {PureComponent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './style.css'

class Header extends PureComponent { 
    render() {
        
        return (
            <div className="header-content">
                <div className="right-aligner"></div>
                <div className="user-menu">
                    <a>
                        <FontAwesomeIcon icon="user" className="user-icon"/>
                        <span>Имя пользователя</span>
                    </a>
                </div>
                <div className="logout-menu">
                    <a>
                        <FontAwesomeIcon icon="power-off" className="logout-icon"/>
                    </a>
                </div>
            </div>
            
        )
    }
}

export default Header