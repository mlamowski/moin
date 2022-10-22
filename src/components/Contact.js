import React from 'react'
import Wave4 from './Wave4'
import Typo_Contact from './Typo_Contact'
import Button from './Button'

const Contact = () => {
  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#222d3a] flex flex-col justify-evenly items-center'>
        <Typo_Contact></Typo_Contact>
        <p>
            Neugierig geworden? 
            Schreib mir doch ein paar Zeilen!
            Mail: hello@lamowski.com
        </p>
        <Button></Button>
        <Wave4></Wave4>
    </div>
  )
}

export default Contact
