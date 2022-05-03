import React, { forwardRef, useEffect } from 'react'
import scrollIntoView from 'scroll-into-view'
const SectionMain = forwardRef(({visionRef}, ref) => {
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
    if(videoHeight > pageY) {
      scrollIntoView(visionRef?.current, {
        align: {
          top: 0,
        }
      });
    }
    setTimeout(() => {
      customRef.current.play()
    }, 1000)
  }

  return (
    <main className="section-main" id="main" ref={ref}>
      <video muted autoPlay  playsInline className="section-main__banner" ref={customRef} onEnded={onVideoEnd}>
        <source src="/assets/banner.webm" type="video/webm"/>
        <source  src="/assets/banner.mp4" type="video/mp4"/>
        Your browser doesn't support HTML5 video tag.
      </video>
      <div className='container'>
        <button className='section-main__mute' onClick={toggleMute}><img src={`/assets/${muted}.png`} alt='' /></button>
      </div>
    </main>
  );
})

export default SectionMain;
