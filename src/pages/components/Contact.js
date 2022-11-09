import React from 'react'
import Wave4 from './Wave4'
import Wave4Animated from './Wave4Animated';

import { useState, useEffect } from 'react';


import Typo_Contact from './Typo_Contact'

const Contact = () => {
  const [isActualKey, setActualKey] = useState(0);

    const testtest = () => {
      let time = Math.round(Date.now() / 2001);
      setActualKey(time);
      console.log("ich werde ausgeführt");
  
    }

  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#222d3a]  text-white text-center my-[-1px] '>
        <h1 className=' text-4xl pb-[30px] font-extrabold'>KONTAKT</h1>
        <div className=''>
          <div className='flex justify-between items-center flex-col'>
            <p className=' pb-[30px]'>
                Neugierig geworden? <br/>
                Schreib mir doch ein paar Zeilen! <br/>
                Mail: hello@lamowski.com
            </p>
            <a href="mailto:hello@lamowski.com" className=' bg-[#a85d62] p-[10px] rounded-2xl w-[250px] h-[45px]'>
              Emailt mich!
            </a> 
          </div>

        </div>

        <Wave4Animated
            onMouseTest={testtest}
            key={isActualKey}
                 />
    </div>
  )
}

export default Contact
