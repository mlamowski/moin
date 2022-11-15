import React from 'react'
import Moon from './Moon'
import Stars from './Stars'
import Wave1 from './Wave1'
import { useState, useEffect } from 'react';





const Startscreen = () => {
  const [isNight, setNight] = useState(false);

  function getRealTime() {
    const locale = 'en';
    const today = new Date(); // Save the current date to be able to trigger an update
    const hour = today.getHours();
    if(hour > 18 || hour < 4) {
      setNight(true);
    } else {
      setNight(false);
    }
  }

  return (
    <div 
    onLoad={() => {
      getRealTime();
  }}
    className='bg-gradient-to-tr from-[#33061e] to-[#121b2a]  relative -z-10 my-[-1px] '>
        <div className='h-60v sm:h-45v md:h-30v'>
            <Moon></Moon>
            <Stars></Stars>
            <Stars></Stars>


        </div>
        <Wave1></Wave1>
    </div>
  )
}

export default Startscreen
