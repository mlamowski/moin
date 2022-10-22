import React from 'react'
import Wave2 from './Wave2'
import Typo_Ueber_Mich from './Typo_Ueber_Mich'
import Dot from './Dot'
import Image from './Image'


const About = () => {
  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#222d3a]'>
        <Typo_Ueber_Mich></Typo_Ueber_Mich>
        <div className='flex justify-evenly items-center'>
            <div className='flex flex-col justify-evenly items-center w-1/4 '>
                <div className='flex justify-center items-center'>
                    {Array.from({ length: 4 }).map((_, index) => (
                    <Dot key={index} />
                    ))}  
                </div>
      

                <p className=' text-center m-[20px] font-sans text-white'  >
                    Mein Name ist Michelle und ich <br/>
                    komme aus dem wunderschönen Hamburg
                </p>
            </div>
            <div className='w-1/4'>
                <Image/>
            </div>
        </div>
        

        <Wave2/>
    </div>
  )
}

export default About
