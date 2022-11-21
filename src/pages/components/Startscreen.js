import React, { Component } from 'react'
import Moon from './Moon'
import Sun from './Sun'
import Stars from './Stars'
import Wave1 from './Wave1'
import { useState, useEffect } from 'react';





const Startscreen = () => {
  
  function getRealTime() {
    const locale = 'en';
    const today = new Date(); // Save the current date to be able to trigger an update
    const hour = today.getHours();
    if(hour >= 18 || hour <= 6) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div 
    onLoad={() => {
      //getRealTime();
  }}
    className= {getRealTime()
      ? 'bg-gradient-to-tr from-[#33061e] to-[#121b2a]  relative -z-10 my-[-1px] overflow-hidden'
      : 'bg-gradient-to-tr from-[#e4e9eb] to-[#7e9acb]  relative -z-10 my-[-1px] overflow-hidden' } >
        <div className='h-60v sm:h-45v md:h-30v'>
            {getRealTime() 
            ? <Moon></Moon> 
            : <Sun></Sun> }
            <div
            className= {getRealTime()
              ? ' opacity-60 '
              : ' opacity-20' } >
              <Stars></Stars>
              <Stars></Stars>
            </div>



        </div>
        <Wave1></Wave1>
    </div>
  )
}

export default Startscreen
