import React from 'react'
import { useParallax } from 'react-scroll-parallax';
import { ReactComponent as Svg } from './../../img/New_Moon.svg';


const Moon = () => {
  const { ref } = useParallax({ 
    translateY:['-10', '80'],
    rotate:[-30, 50],
    easing:"easeInQuad"   });
  return (
    <div ref={ref} className='absolute w-[420px] right-1/20  sm:left-1/2 sm:ml-[-210px] sm:-top-1/4 md:-top-1/3' >
        <Svg/>

    </div>
  )
}

export default Moon
