import React, {PureComponent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './style.css'

class SideMenu extends PureComponent {
    render() {
        const {sideMenuSection, onLinkSubsectionClick, selectedElement} = this.props;

        console.log(selectedElement);
        const sideMenu = sideMenuSection.map( (element) => {
                             if(element.title !== undefined)
                                 return (
                                     <div key={element.id} className="side-menu-section">
                                         <span className="side-menu-section-title">{element.title}</span>
                                     </div>
                                 )
                             else
                                 return (
                                     <a key={element.id} 
                                        className={selectedElement !== element.subsectionName ? "side-menu-item" : "side-menu-item side-menu-item-selected"}
                                                    onClick={onLinkSubsectionClick.bind(this, element.subsectionName)}>
                                         <FontAwesomeIcon icon={element.icon} className="menu-icon"/>
                                         <span className="side-menu-section-subsection">{element.subsectionName}</span>
                                     </a>
                                 )
                         })
                     
        return (
            <div className="side-menu">
                <div className="side-menu-item">
                    <FontAwesomeIcon icon="bars" className="menu-icon"/>
                </div>
                {sideMenu}
            </div>
        )
    }
    
    
}

export default SideMenu