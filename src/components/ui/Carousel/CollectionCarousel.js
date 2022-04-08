import React, {useState} from 'react';
import Slider from "react-slick";
import Icon from "../icons/Icon";
import collectionImagesData from "../../../data/collection-images-data";
import {ArrowNext, ArrowPrev} from "../icons";

const Arrow = ({ className, onClick, direction }) => {
    return (
        <button onClick={onClick} className={className}>
            {direction === 'left' ? <ArrowPrev /> : <ArrowNext />}
        </button>
    )
}

const CollectionCarousel = () => {
    const [current, setCurrent] = useState(1)
    const settings = {
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 600,
        centerMode: true,
        centerPadding: '80px',
        focusOnSelect: true,
        variableWidth: true,
        nextArrow: <Arrow direction={"right"}  />,
        prevArrow: <Arrow direction={"left"}  />,
        // autoplay: true,
        autoplaySpeed: 2000
    };

    const handleBeforeChange = async (oldIndex, newIndex) => {
        setCurrent(newIndex + 1)
    }
    return (
        <div className='img-slider-wrapper'>
            <Slider className='slider img-slider' {...settings} beforeChange={handleBeforeChange}>
                {[...Array(8)].map((item, index) => {
                    return (
                        <div className="item" key={`carousel-${index}`}>
                            <div className="img-thumbnail">
                                <img src={collectionImagesData[index]} alt="Donny Doos" />
                            </div>
                        </div>
                    )
                })}
            </Slider>
            <div className="item-number">
                {current}/8
            </div>
        </div>
    );
};

export default CollectionCarousel;
