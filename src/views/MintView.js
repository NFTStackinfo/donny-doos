import React, {useEffect, useRef, useState} from 'react';
import TheHeader from "../components/mint/TheHeader";
import ThePreloader from "../components/landing/ThePreloader";
import SectionMain from "../components/mint/SectionMain";
import SectionCollection from "../components/landing/SectionCollection";

function Landing(props) {
    const [scrollTo, setScrollTo] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const roadmapRef = useRef(null)
    const visionRef = useRef(null)
    const teamRef = useRef(null)
    const mainRef = useRef(null)

    useEffect(() => {
        window.history.scrollRestoration = "manual"
    }, [])

    useEffect(() => {
        if (scrollTo) {
            refMapping[scrollTo]?.current?.scrollIntoView({
                behavior: "smooth",
            })
            setScrollTo(false)
        }
    }, [scrollTo])

    const handleLinkClick = to => {
        setScrollTo(to)
    }

    const refMapping = {
        "#vision": visionRef,
        "#roadmap": roadmapRef,
        "#team": teamRef,
        "#main": mainRef,
    }

    return (
        <>
            {isLoaded
                ? (
                    <>
                        <TheHeader onLinkClick={handleLinkClick}/>
                        <SectionMain ref={mainRef}/>
                        {/*<div className="main-content-wrapper">*/}
                        {/*    <SectionCollection/>*/}
                        {/*</div>*/}
                    </>
                )
                : <ThePreloader loaded={(state) => setIsLoaded(state)}/>
            }
        </>
    );
}

export default Landing;
