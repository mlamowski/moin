import React from 'react'
import Wave3 from './Wave3'
import Typo_Projects from './Typo_Projects'
import Arrow_Left from './Arrow_Left'
import Arrow_Right from './Arrow_Right'
import Project from './Project'
import example from './../../img/Screenshot_3.png'
import example2 from './../../img/Screenshot_1.png'
import michelle from './../../img/frauenkopf.jpg';


import { useState, useEffect } from 'react';



const Projects = () => {

  const [isIndex, setIndex] = useState(0);

  const toLeft = () => {
    let index = isIndex;
    index--;
    if(index < 0) {
      index = projectList.length -1 ;
    }
    setIndex(index);
    console.log(isIndex);
  }

  const toRight = () => {
    let index = isIndex;
    index++;
    if(index > 2) {
      index = 0 ;
    }
    setIndex(index);
    console.log(isIndex);
  }

  const projectList = [
    {"description": "Panda Game", "image": example, "text": "Im vierten Semester ist im Kurs Media Game Design ein Couch-Game entstanden: Bearzooka. "},
    {"description": "Alraunen Simulator", "image": example2, "text": "Von der Ideenfindung bis hin zur Planung übernehme ich alles gerne."},
    {"description": "Moodium", "image": michelle, "text": "Von der Ideenfindung bis hin zur Planung übernehme ich alles gerne."},

  ]


  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#243b4e]  text-center font-sans text-white my-[-1px] '>
        <h1 className=' text-4xl pb-[30px] font-extrabold'>PROJEKTE</h1>
        <div className='flex  flex-col justify-between items-center'>
          <div className='flex justify-evenly items-center'>
            <button onClick={toLeft} type="button" className='h-[50px] w-[50px] p-[10px] sm:w-[40px]'> 
              <Arrow_Left></Arrow_Left>         
            </button> 
            <div className='flex-col flex  justify-between items-center flex-wrap w-1/2 sm:w-full'>
              <img className=' w-full aspect-video rounded-3xl object-contain;' src={projectList[isIndex].image} alt={projectList[isIndex].description}/>      
            </div>




            <button onClick={toRight} type="button" className='h-[50px] w-[50px] p-[10px] sm:w-[40px]'>
              <Arrow_Right></Arrow_Right>
            </button> 
          </div>
          <div className=' w-1/2 sm:w-[280px] '>
            <p className='relative text-white pt-[30px]'> {projectList[isIndex].text} </p>
          </div>
        </div>




      <Wave3></Wave3>
    </div>
  )
}

export default Projects
