import React, {forwardRef, useEffect, useRef, useState} from 'react';
import roadmapData from "../../data/roadmap-data";
import {normalizeRange} from "../../utils/math";
import {PhaseStart} from "../ui/icons";
import SectionRoadmapItem from "./SectionRoadmapItem";

const SectionRoadmap = forwardRef((props, ref) => {
    const $roadmapWrapper= useRef(null);
    const [loadedHeight, setLoadedHeight] = useState(0)

    const $phase1Roadmap = useRef(null);
    const [phase1LoadedHeight, setPhase1LoadedHeight] = useState(0)

    const $phase2Roadmap = useRef(null);
    const [phase2LoadedHeight, setPhase2LoadedHeight] = useState(0)

    const handleResize = () => {
        handleScroll();
    }

    const handleScroll = () => {
        const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
        const topPart = windowHeight * 2 / 3;

        const rect = $roadmapWrapper.current.getBoundingClientRect();
        const loadedHeight = ~~(rect.height - rect.bottom + topPart)
        setLoadedHeight(normalizeRange(loadedHeight, 0, rect.height))

        const rectPhase1 = $phase1Roadmap.current.getBoundingClientRect();
        const phase1LoadedHeight = ~~(rectPhase1.height - rectPhase1.bottom + topPart)
        setPhase1LoadedHeight(normalizeRange(phase1LoadedHeight, 0, rectPhase1.height-16))

        const rectPhase2 = $phase2Roadmap.current.getBoundingClientRect();
        const phase2LoadedHeight = ~~(rectPhase2.height - rectPhase2.bottom + topPart)
        setPhase2LoadedHeight(normalizeRange(phase2LoadedHeight, 0, rectPhase2.height-16))
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

                <div className="roadmap-wrapper" ref={$roadmapWrapper}>
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
                                    <SectionRoadmapItem
                                        key={index}
                                        {...item}
                                    />
                                ))}
                                <div className="roadmap-line">
                                    <div className="roadmap-line__progress"
                                         style={{height: `${phase1LoadedHeight}px`}}
                                    />
                                    <div className="roadmap-line__end-circle" />
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
                                    <SectionRoadmapItem
                                        key={index}
                                        {...item}
                                    />
                                ))}
                                <div className="roadmap-line">
                                    <div className="roadmap-line__progress"
                                         style={{height: `${phase2LoadedHeight}px`}}
                                    />
                                    <div className="roadmap-line__end-circle" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roadmap-container overlay" style={{height: `${loadedHeight}px`}}>
                        <div className="phase-start flex flex-col items-center">
                            <div className="phase-start__title uppercase fw-normal ff-primary ls-1">
                                Phase 1
                            </div>
                            <PhaseStart />
                        </div>
                        <div className="phase-1__roadmap margin-top-3">
                            {roadmapData.phase1.map((item, index) => (
                                <SectionRoadmapItem
                                    key={index}
                                    {...item}
                                    loaded={true}
                                />
                            ))}
                            <div className="roadmap-line">
                                <div className="roadmap-line__progress"
                                     style={{height: `0px`}}
                                />
                                <div className="roadmap-line__end-circle active" />
                            </div>
                        </div>
                        <div className="phase-2 margin-top-3" >
                            <div className="phase-start flex flex-col items-center">
                                <div className="phase-start__title uppercase fw-normal ff-primary ls-1">
                                    Phase 2
                                </div>
                                <PhaseStart />
                            </div>
                            <div className="phase-2__roadmap margin-top-3">
                                {roadmapData.phase2.map((item, index) => (
                                    <SectionRoadmapItem
                                        key={index}
                                        {...item}
                                        loaded={true}
                                    />
                                ))}
                                <div className="roadmap-line">
                                    <div className="roadmap-line__progress"
                                         style={{height: `${phase2LoadedHeight}px`}}
                                    />
                                    <div className="roadmap-line__end-circle active" />
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