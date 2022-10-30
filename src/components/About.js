import React from 'react'
import Wave2 from './Wave2'
import Typo_Ueber_Mich from './Typo_Ueber_Mich'
import Dot from './Dot'
import Image from './Image'
import bild from './../img/frauenkopf.jpg';




const About = () => {
  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#222d3a] text-center font-sans text-white'>
        <h1 className=' text-4xl pb-[30px]'>
            ÜBER MICH
        </h1>
        <div className='flex justify-evenly items-center flex-wrap'>
            <div className=' flex-col flex  justify-between w-[350px] sm:w-[280px]'>
                <div className='flex justify-between items-center'>
                    {Array.from({ length: 4 }).map((_, index) => (
                    <div className="rounded-full bg-[#243b4e] w-[50px] h-[50px]" key={index} />
                    ))}  
                </div>
      

                <p className='py-[30px]'  >
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                    Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum 
                </p>
            </div>
            <div className=' w-[350px] flex items-center justify-evenly sm:w-[280px]'>
                <img src={bild} alt="Bild" className='mix-blend-multiply'/>            
            </div>
        </div>
        

        <Wave2/>
    </div>
  )
}

export default About
