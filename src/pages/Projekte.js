import React from 'react'

const Projekte = ({description, text}) => {
  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#243b4e] text-white font-sans  text-center   min-h-screen'>
        <h1 className=' text-4xl text-center p-[30px]'>{description}</h1>
        <div className='w-3/4 mx-auto'>
          <p > 
             {text}
          </p>
        </div>

       
    </div>
  )
}

export default Projekte
