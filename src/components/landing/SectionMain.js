import React, { forwardRef } from 'react'

const SectionMain = forwardRef((props, ref) => {
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

  return (
    <main className="section-main" id="main" ref={ref}>
      <video muted autoPlay  playsInline loop className="section-main__banner" ref={customRef}>
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
