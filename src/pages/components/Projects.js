import React from 'react'
import Wave3 from './Wave3'
import Wave3Animated from './Wave3Animated';

import Typo_Projects from './Typo_Projects'
import Arrow_Left from './Arrow_Left'
import Arrow_Right from './Arrow_Right'
import Project from './Project'
import alraunenSimulator from './../../img/01_Alraunen_Simulator.png'
import bearzooka from './../../img/02_Bearzooka.png'
import pullTheTrigger from './../../img/03_Pull_the_Trigger.png';
import cameraProjekt01 from './../../img/04_CGA_01.png';
import cameraProjekt02 from './../../img/04_CGA_02.png';
import moodium from './../../img/05_Moodium.png';



import { useState, useEffect } from 'react';



const Projects = () => {

  const [isIndex, setIndex] = useState(0);
  const [isActualKey, setActualKey] = useState(0);

    const testtest = () => {
      let time = Math.round(Date.now() / 2001);
      setActualKey(time);
      console.log("ich werde ausgeführt");
  
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
    if(index > 2) {
      index = 0 ;
    }
    setIndex(index);
    console.log(isIndex);
  }

  const projectList = [
    {"description": "Bearzooka", "image": bearzooka, "text": "Bearzooka ist ein Game, welches lokal mit bis zu vier Freunden spielbar ist. Durch Power-Ups und Rubberbanding ist der Spielspaß garantiert. Das Spiel wurde mit Unity entwickelt."},
    {"description": "Alraunen Simulator", "image": alraunenSimulator, "text": "Mithilfe des Alraunen Simulators kann der User die magische Welt von Harry Potter in einem virtuellen Raum betreten werden. Dabei soll vermittelt werden, die die Zucht einer Alraune erfolgt. Durch direkte Interaktion und Feedback macht dieses Erlebnis besonders viel spaß. Der Simulator wurde mit Unity entwickelt."},
    {"description": "Camera Project", "image": cameraProjekt01, "text": "In diesem selbstentwickelten virtuellen Raum kann der User sich frei bewegen und mit verschiedenen Objekten interagieren. Dabei können eigene Fotos aufgenommen werden. Die Kamera-Vorlage wurde mit Blender erstellt, die Website ist mit Three.JS entstanden."},
    {"description": "Moodium", "image": moodium, "text": "Mithilfe des Moodtrackers Moodium lassen sich seine täglichen Stimmungen eintragen und visualisieren. Außerdem lassen sich diese in einem monatlichen Kalender anschauen. Die Website wurde mit Node.js und express entwickelt."},
    {"description": "Pull the Trigger", "image": pullTheTrigger, "text": "Der Sticker mit dem Motto -Pull the Trigger- lässt sich mit seiner Handykamera einscannen. Der Sticker entwickelt sich zu einer virtuellen Blumenwiese. Probier's mal aus! Der Augmented Reality Effekt wurde in Unity entwickelt, die Blumen in Blender."},

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
