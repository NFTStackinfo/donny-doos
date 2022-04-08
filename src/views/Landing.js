import React, {useEffect, useRef, useState} from 'react';
import TheHeader from "../components/landing/TheHeader";
import ThePreloader from "../components/landing/ThePreloader";
import SectionMain from "../components/landing/SectionMain";
import SectionCollection from "../components/landing/SectionCollection";
import SectionVision from "../components/landing/SectionVision";
import SectionTeam from "../components/landing/SectionTeam";
import TheFooter from "../components/landing/TheFooter";
import SectionRoadmap from "../components/landing/SectionRoadmap";

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
                        <div className="main-content-wrapper">
                            <SectionCollection/>
                            <SectionVision ref={visionRef}/>
                            <SectionRoadmap ref={roadmapRef}/>
                            <SectionTeam ref={teamRef}/>
                            <TheFooter/>
                        </div>
                    </>
                )
                : <ThePreloader loaded={(state) => setIsLoaded(state)}/>
            }
        </>
    );
}

export default Landing;
