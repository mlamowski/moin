import React from 'react'
import { Link } from "react-router-dom";

const Impress = () => {
  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#243b4e] text-white font-sans my-[-1px] '>
        <h1 className=' text-4xl text-center pb-[30px] font-extrabold'>MICHELLE LAMOWSKI</h1>
        <div className='flex justify-evenly items-center pb-[30px]'>
          <Link to="/impressum">Impressum</Link>
          <Link to="/datenschutz">Datenschutz</Link>

        </div>

    </div>
  )
}

export default Impress
