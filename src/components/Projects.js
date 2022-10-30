import React from 'react'
import Wave3 from './Wave3'
import Typo_Projects from './Typo_Projects'
import Arrow_Left from './Arrow_Left'
import Arrow_Right from './Arrow_Right'

const Projects = () => {
  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#243b4e]  text-center font-sans text-white'>
        <h1 className=' text-4xl pb-[30px]'>PROJEKTE</h1>
        <div className='flex justify-evenly items-center'>
          <button type="button" className='h-[50px] w-[50px] p-[10px]'> 
            <Arrow_Left></Arrow_Left>         
          </button> 
          <div className=' w-70w  h-70v sm:h-30v bg-white rounded-3xl'></div>
          <button type="button" className='h-[50px] w-[50px] p-[10px]'>
            <Arrow_Right></Arrow_Right>
          </button> 
        </div>


      <Wave3></Wave3>
    </div>
  )
}

export default Projects
