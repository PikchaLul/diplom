import React, {PureComponent} from 'react'
import './style.css'

class Organizations extends PureComponent {
    render() {
        const {subsectionData} = this.props;

        const organizationListVeiew = subsectionData.listOrganizations.map((organization) =>     
            <div className="organization-cards-card">
                <div className="organization-cards-header">
                    <h3 className="organization-cards-label">{organization[0]}</h3>
                </div>
                <div className="organization-cards-links">
                    {subsectionData.links.map((link, index)=>
                        <div className="organization-cards-link">
                            <span className="badge title-badge organization-cards-linkBadge">{organization[index+1]}</span>
                            <a className="organization-cards-linkName" href="/">{link}</a>
                        </div>
                    )}
                </div>
            </div>
        )

        return (
            <div className="organization-cards">
                {organizationListVeiew}
            </div>  
        )
    }
}

export default Organizations