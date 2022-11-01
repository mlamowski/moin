import React from 'react'
import Moon from './Moon'
import Stars from './Stars'
import Wave1 from './Wave1'

const Startscreen = () => {
  return (
        <div className='bg-gradient-to-tr from-[#250516] to-[#121b2a]'>
        <div className='h-60v'>
            <Moon></Moon>
            <Stars></Stars>
        </div>
        <Wave1></Wave1>
    </div>
  )
}

export default Startscreen
