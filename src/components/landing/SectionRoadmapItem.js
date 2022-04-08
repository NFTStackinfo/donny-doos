import React from 'react';

function SectionRoadmapItem({title, description, loaded=false}) {
    return (
        <div className={['roadmap-item', loaded && 'loaded'].join(' ')}>
                <h3
                    className="roadmap-item__title ff-primary fs-600 ls-2 uppercase fw-normal"
                >{title}</h3>
                <p
                    className="roadmap-item__description margin-top-6"
                >{description}</p>
        </div>
    );
}

export default SectionRoadmapItem;