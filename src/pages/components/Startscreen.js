import React from 'react'
import Moon from './Moon'
import Stars from './Stars'
import Wave1 from './Wave1'

const Startscreen = () => {
  return (
    <div className='bg-gradient-to-tr from-[#33061e] to-[#121b2a]  relative -z-10 my-[-1px] '>
        <div className='h-60v sm:h-45v md:h-30v'>
            <Moon className=" "></Moon>
            <Stars></Stars>
            <Stars></Stars>

            {/* Stars neu machen */}

        </div>
        <Wave1></Wave1>
    </div>
  )
}

export default Startscreen
