import React, {useCallback, useEffect, useState} from 'react';
import {normalizeRange} from "../../utils/math";

function ThePreloader({loaded}) {
    const imagesSrc = [
       '/assets/donny-doo-1.png',
       '/assets/donny-doo-2.png',
       '/assets/donny-doo-3.png',
       '/assets/donny-doo-4.png',
       '/assets/donny-doo-5.png',
       '/assets/donny-doo-6.png',
       '/assets/donny-doo-7.png',
       '/assets/donny-doo-8.png',
       '/assets/logo.svg',
       '/assets/main-banner.jpg',
        'assets/vision.png'
    ]

    let imagesCount = imagesSrc.length
    const imageLoadPercent = 100 / imagesCount
    const [loadedPercent, setLoadedPercent] = useState(0)
    let interval;

    function createImage(src) {
        const image = new Image()
        image.src = src
        return image
    }

    const imageLoad = useCallback(() => {
        imagesCount -= 1
        setLoadedPercent((prevLoadedPercent) => (
            normalizeRange(Math.round(prevLoadedPercent + imageLoadPercent), 0, 100)
        ))

        if (imagesCount === 0) {
            setLoadedPercent(100)
            clearInterval(interval)
            loaded(true)
        }
    }, [imagesCount])


    useEffect(() => {
        interval = setInterval(() => {
            if (loadedPercent >= 100) {
                clearInterval(interval)
                loaded(true)
            }
        }, 0)

        imagesSrc.forEach(src => {
            const img = createImage(src)
            img.addEventListener('load', imageLoad)
        })
    }, [])

    return (
        <div className="preloader flex justify-center items-center">
            <div className="container">
                <div className="preloader-container">
                    <img src="/assets/logo.svg" alt="Donny Doos"/>

                    <div className="load-bar margin-top-10">
                        <div style={{width: `${loadedPercent}%`}}/>
                    </div>

                    <p className="margin-top-3 ff-primary ls-2">{loadedPercent}%</p>
                </div>
            </div>
        </div>
    );
}

export default ThePreloader;