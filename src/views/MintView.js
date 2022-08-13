import React, { useEffect, useRef, useState } from 'react'
import ThePreloader from '../components/landing/ThePreloader'
import SectionMain from '../components/mint/SectionMain'
import AppHeader from '../components/landing/TheHeader'
import SectionCollection from '../components/landing/SectionCollection'

function Landing(props) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <>
      {isLoaded
        ? (
          <>
            <AppHeader />
            <SectionMain />
                      <SectionCollection />
          </>
        )
        : <ThePreloader loaded={(state) => setIsLoaded(state)} />
      }
    </>
  )
}

export default Landing
