import React, {forwardRef} from 'react';
import { isSafari } from 'react-device-detect'

const SectionMain = forwardRef((props, ref) => {

  return (
    <main className="section-main" id="main" ref={ref}>
      <video muted={!isSafari} autoPlay playsInline loop className="section-main__banner">
        <source src="/assets/banner.webm" type="video/webm"/>
        <source src="/assets/banner.mp4" type="video/mp4"/>
        Your browser doesn't support HTML5 video tag.
      </video>
    </main>
  );
})

export default SectionMain;
