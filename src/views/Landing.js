import React, { useEffect, useRef, useState } from 'react'
import scrollIntoView from 'scroll-into-view'
import TheHeader from '../components/landing/TheHeader'
import ThePreloader from '../components/landing/ThePreloader'
import SectionMain from '../components/landing/SectionMain'
import SectionCollection from '../components/landing/SectionCollection'
import SectionVision from '../components/landing/SectionVision'
import SectionTeam from '../components/landing/SectionTeam'
import TheFooter from '../components/landing/TheFooter'
import SectionRoadmap from '../components/landing/SectionRoadmap'
import { useLocation } from 'react-router-dom'

function Landing(props) {
  const location = useLocation()
  const [scrollTo, setScrollTo] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const roadmapRef = useRef(null)
  const visionRef = useRef(null)
  const collectionRef = useRef(null)
  const teamRef = useRef(null)
  const mainRef = useRef(null)

  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleScrollIntoView = to => {
    console.log('scrolling : ', to)
    console.log('refMapping[to] : ', refMapping[to])
    console.log('refMapping[to]?.current : ', refMapping[to]?.current)
    scrollIntoView(refMapping[to]?.current, {
      align: {
        top: 0,
      },
    })
  }

  const refMapping = {
    '#vision': visionRef,
    '#roadmap': roadmapRef,
    '#team': teamRef,
    '#main': mainRef,
  }

  useEffect(() => {
    console.log('checking')
    if (location.hash && isLoaded) {
      console.log('location.hash', location.hash)
      handleScrollIntoView(location.hash)
    }
  }, [isLoaded])

  return (
    <>
      {isLoaded
        ? (
          <>
            <TheHeader onLinkClick={handleScrollIntoView} />
            <SectionMain ref={mainRef} collectionRef={collectionRef} />
            <div className='main-content-wrapper'>
              <SectionCollection ref={collectionRef} />
              <SectionVision ref={visionRef} />
              <SectionRoadmap ref={roadmapRef} />
              <SectionTeam ref={teamRef} />
              <TheFooter />
            </div>
          </>
        )
        : <ThePreloader loaded={(state) => setIsLoaded(state)} />
      }
    </>
  )
}

export default Landing
