import React from 'react'
import Wave3Animated from './Wave3Animated';

import Arrow_Left from './Arrow_Left'
import Arrow_Right from './Arrow_Right'
import alraunenSimulator from './../../img/01_Alraunen_Simulator.png'
import bearzooka from './../../img/02_Bearzooka.png'
import pullTheTrigger from './../../img/03_Pull_the_Trigger.png';
import cameraProjekt01 from './../../img/04_CGA_01.png';
import moodium from './../../img/05_Moodium.png';



import { useState, useEffect } from 'react';



const Projects = () => {

  const [isIndex, setIndex] = useState(0);
  const [isActualKey, setActualKey] = useState(0);

    const testtest = () => {
      let time = Math.round(Date.now() / 2001);
      setActualKey(time);
  
    }

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
    if(index > projectList.length -1) {
      index = 0 ;
    }
    setIndex(index);
    console.log(isIndex);
  }

  const projectList = [
    {"description": "Bearzooka", "image": bearzooka, "text": "Bearzooka ist ein Game, welches lokal mit bis zu vier Freunden spielbar ist. Das Ziel ist es, sich gegenseitig mit Bambuskugeln abzuschießen. Durch diverse Power-Ups und Rubberbanding ist der Spielspaß garantiert. Das Spiel wurde mit Unity entwickelt.", "link": "https://www.youtube.com/watch?v=ihV3084oR-U"},
    {"description": "Alraunen Simulator", "image": alraunenSimulator, "text": "Mithilfe des Alraunen Simulators kann der User die magische Welt von Harry Potter betreten. Dabei dreht sich alles um die Zucht einer Alraune. Der User kann direkt mit Game-Elementen interagieren und bekommt daraufhin ein Feedback. Der Simulator wurde mit Unity entwickelt.", "link": ""},
    {"description": "Camera Project", "image": cameraProjekt01, "text": "In diesem selbstentwickelten virtuellen Raum kann der User sich frei bewegen und mit verschiedenen Objekten interagieren. Dabei können eigene Fotos aufgenommen und angeschaut werden. Die Website wurde mithilfe von Three.JS entwickelt.", "link": ""},
    {"description": "Moodium", "image": moodium, "text": "Mithilfe des Moodtrackers Moodium lassen sich seine täglichen Stimmungen eintragen und visualisieren. Außerdem lassen sich diese in einem monatlichen Kalender anschauen. Die Website wurde mit Node.js und express entwickelt.", "link": ""},
    {"description": "Pull the Trigger", "image": pullTheTrigger, "text": "Der Sticker mit dem Motto \"Pull the Trigger\" lässt sich ganz einfach mit der Handykamera einscannen. Daraufhin entwickelt sich der Sticker zu einer virtuellen Blumenwiese. Der Augmented Reality Effekt wurde in Unity entwickelt, die Blumen in Blender.", "link": "https://www.youtube.com/watch?v=oVX7QAkrWLw"},

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
              <img className=' w-full aspect-video rounded-3xl object-contain;' 
              src={projectList[isIndex].image} 
              alt={projectList[isIndex].description}/>      
            </div>




            <button onClick={toRight} type="button" className='h-[50px] w-[50px] p-[10px] sm:w-[40px]'>
              <Arrow_Right></Arrow_Right>
            </button> 
          </div>
          <div className=' w-1/2 sm:w-[280px] '>
            <h1 className='relative text-white pt-[20px]'> {projectList[isIndex].description}</h1>
            <p className='relative text-white pt-[10px]'> {projectList[isIndex].text} </p>
          </div>
        </div>




        <Wave3Animated
            onMouseTest={testtest}
            key={isActualKey}
                 />    </div>
  )
}

export default Projects
