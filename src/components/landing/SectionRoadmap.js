import React, {forwardRef, useEffect, useRef, useState} from 'react';
import roadmapData from "../../data/roadmap-data";
import {normalizeRange} from "../../utils/math";
import {LineNeon, PhaseStart} from "../ui/icons";
import Fade from "react-reveal/Fade";
import SectionRoadmapItem from "./SectionRoadmapItem";

const SectionRoadmap = forwardRef((props, ref) => {

    const $phase1Roadmap = useRef(null);
    const [phase1LoadedHeight, setPhase1LoadedHeight] = useState(0)
    const [phase1Loaded, setPhase1Loaded] = useState(false)

    const $phase2Roadmap = useRef(null);
    const [phase2LoadedHeight, setPhase2LoadedHeight] = useState(0)
    const [phase2Loaded, setPhase2Loaded] = useState(false)

    const handleResize = () => {
        handleScroll();
    }

    const handleScroll = () => {
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const topPart = windowHeight * 2 / 3;

        const rectPhase1 = $phase1Roadmap.current.getBoundingClientRect();
        const phase1LoadedHeight = ~~(rectPhase1.height - rectPhase1.bottom + topPart)
        const phase1LoadedHeightNormalized = normalizeRange(phase1LoadedHeight, 0,rectPhase1.height-16)
        setPhase1LoadedHeight(phase1LoadedHeightNormalized)
        setPhase1Loaded(phase1LoadedHeightNormalized >= rectPhase1.height-16)


        const rectPhase2 = $phase2Roadmap.current.getBoundingClientRect();
        const phase2LoadedHeight = ~~(rectPhase2.height - rectPhase2.bottom + topPart)
        const phase2LoadedHeightNormalized = normalizeRange(phase2LoadedHeight, 0,rectPhase2.height-16)
        setPhase2LoadedHeight(phase2LoadedHeightNormalized)
        setPhase2Loaded(phase2LoadedHeightNormalized >= rectPhase2.height-16)
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
        <section className="section section-roadmap" id="roadmap" ref={ref}>
            <div className="container">
                <h2 className="uppercase ff-primary fs-900 ls-2 fw-normal white-text text-center-sm">Roadmap</h2>

                <div className="roadmap-wrapper">
                    <div className="roadmap-container">
                        <div className="phase-1" >
                            <div className="phase-start flex flex-col items-center">
                                <div className="phase-start__title uppercase fw-normal ff-primary ls-1">
                                    Phase 1
                                </div>
                                <PhaseStart />
                            </div>
                            <div className="phase-1__roadmap margin-top-3" ref={$phase1Roadmap}>
                                {roadmapData.phase1.map((item, index) => (
                                    <div className="roadmap-item-wrapper">
                                        <Fade bottom key={index}>
                                            <SectionRoadmapItem {...item}/>
                                        </Fade>
                                    </div>

                                ))}
                                <div className="roadmap-line">
                                    <div className="roadmap-line__progress"
                                         style={{height: `${phase1LoadedHeight}px`}}
                                    />
                                    <div
                                        className={['roadmap-line__end-circle', phase1Loaded && 'active'].join(' ')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="phase-2 margin-top-3" >
                            <div className="phase-start flex flex-col items-center">
                                <div className="phase-start__title uppercase fw-normal ff-primary ls-1">
                                    Phase 2
                                </div>
                                <PhaseStart />
                            </div>
                            <div className="phase-2__roadmap margin-top-3" ref={$phase2Roadmap}>
                                {roadmapData.phase2.map((item, index) => (
                                    <div className="roadmap-item-wrapper">
                                        <Fade bottom key={index}>
                                            <SectionRoadmapItem {...item}/>
                                        </Fade>
                                    </div>
                                ))}
                                <div className="roadmap-line">
                                    <div className="roadmap-line__progress"
                                         style={{height: `${phase2LoadedHeight}px`}}
                                    />
                                    <div
                                        className={['roadmap-line__end-circle', phase2Loaded && 'active'].join(' ')}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
})

export default SectionRoadmap;