import React, {forwardRef} from 'react';
import CollectionCarousel from "../ui/Carousel/CollectionCarousel";
import {CollectionElement} from "../ui/icons";



const SectionCollection = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="section collection" id="collection">
            <div className="container">
                <CollectionCarousel/>

                <CollectionElement/>
            </div>
        </div>
    );
});

export default SectionCollection;

