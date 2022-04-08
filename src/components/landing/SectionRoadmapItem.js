import React, {useEffect, useRef, useState} from 'react';
import {normalizeRange} from "../../utils/math";

function SectionRoadmapItem({title, description}) {
    const $roadmapItemCont = useRef(null);
    const [loadedHeight, setLoadedHeight] = useState(0)

    const handleResize = () => {
        handleScroll();
    }

    const handleScroll = () => {
        const rect = $roadmapItemCont.current?.getBoundingClientRect();
        if (rect) {
            const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
            const topPart = windowHeight * 2 / 3;
            const loadedHeight = ~~(rect.height - rect.bottom + topPart)
            setLoadedHeight(normalizeRange(loadedHeight, 0, rect.height))
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className="roadmap-item">
                <div className="roadmap-item__content" ref={$roadmapItemCont}>
                    <h3
                        className="roadmap-item__title ff-primary fs-600 ls-2 uppercase fw-normal"
                    >{title}</h3>
                    <p
                        className="roadmap-item__description margin-top-6"
                    >{description}</p>

                    <div className="roadmap-item__content-overlay"
                         style={{height: `${loadedHeight}px`}}
                    >
                        <h3
                            className="roadmap-item__title ff-primary fs-600 ls-2 uppercase fw-normal"
                        >{title}</h3>
                        <p
                            className="roadmap-item__description margin-top-6"
                        >{description}</p>
                    </div>
                </div>
        </div>
    );
}

export default SectionRoadmapItem;