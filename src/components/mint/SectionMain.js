// import React, {forwardRef} from 'react';
// import ConnectAndMint from "./ConnectAndMint";
//
// const SectionMain = forwardRef((props, ref) => {
//     return (
//         <main className="mint-section-main" id="main" ref={ref}>
//             <div className="mint-section-main__banner">
//                 <img src="/assets/mint-main-banner.jpg" alt="Donny Doos" />
//             </div>
//
//             <div className="mint-container container">
//                 <h1 className="uppercase ff-primary ls-2 fw-normal white-text text-center margin-bottom-6">Lorem ipsum</h1>
//
//                 <ConnectAndMint/>
//             </div>
//         </main>
//     );
// })
//
// export default SectionMain;

import React, { forwardRef, useEffect } from 'react'
import scrollIntoView from 'scroll-into-view'
import ConnectAndMint from './ConnectAndMint'

const SectionMain = forwardRef(({ collectionRef }, ref) => {
  const [muted, setMuted] = React.useState('mute')
  const customRef = React.useRef(null)


  const toggleMute = () => {
    let mute = customRef.current.muted
    if (mute) {
      customRef.current.muted = false
      setMuted('unmute')
    } else {
      setMuted('mute')
      customRef.current.muted = true
    }
  }

  const onVideoEnd = () => {
    const pageY = window.scrollY
    const videoHeight = customRef.current.clientHeight
    if (videoHeight > pageY) {
      scrollIntoView(collectionRef?.current, {
        align: {
          top: 0,
        },
      })
    }
    setTimeout(() => {
      customRef.current.play()
    }, 1000)
  }

  return (
    <main className='mint-section-main' id='main' ref={ref}>
      <div className='mint-section-main__banner'>
        <video muted autoPlay playsInline
               ref={customRef} onEnded={onVideoEnd}>
          <source src='/assets/banner.webm' type='video/webm' />
          <source src='/assets/banner.mp4' type='video/mp4' />
          Your browser doesn't support HTML5 video tag.
        </video>
      </div>


      <div className='container mute-btn-container'>
        <button className='hero-video-mute-btn' onClick={toggleMute}><img
          src={`/assets/${muted}.png`} alt='' /></button>
      </div>

      <div className='container mint-container'>


        <h1
          className='uppercase ff-primary ls-2 fw-normal white-text text-center margin-bottom-6'>
          Lorem ipsum
        </h1>

        <ConnectAndMint />
      </div>
    </main>
  )
})

export default SectionMain
