import React from 'react'

import { useState, useEffect, createContext, useContext } from "react";


import {indexContext} from "./../App";


import alraunenSimulator1 from './../img/Alraunen_Simulator_1.png'
import alraunenSimulator2 from './../img/Alraunen_Simulator_2.png'
import alraunenSimulator3 from './../img/Alraunen_Simulator_3.png'
import alraunenSimulator4 from './../img/Alraunen_Simulator_4.png'
import alraunenSimulator5 from './../img/Alraunen_Simulator_5.png'
import alraunenSimulator6 from './../img/Alraunen_Simulator_6.png'

import bearzooka1 from './../img/Bearzooka_1.png'
import bearzooka2 from './../img/Bearzooka_2.png'
import bearzooka3 from './../img/Bearzooka_3.png'
import bearzooka4 from './../img/Bearzooka_4.png'
import bearzooka5 from './../img/Bearzooka_5.png'
import bearzooka6 from './../img/Bearzooka_6.png'
import bearzooka7 from './../img/Bearzooka_7.png'
import bearzooka8 from './../img/Bearzooka_8.png'
import bearzooka9 from './../img/Bearzooka_9.png'

import pullTheTrigger from './../img/TrackImageGun.jpg';

import cameraProjekt01 from './../img/CGA_1.png';
import cameraProjekt02 from './../img/CGA_2.png';
import cameraProjekt03 from './../img/CGA_3.png';
import cameraProjekt04 from './../img/CGA_4.png';
import cameraProjekt05 from './../img/CGA_5.png';
import cameraProjekt06 from './../img/CGA_6.png';
import cameraProjekt07 from './../img/CGA_7.png';
import cameraProjekt08 from './../img/CGA_8.png';

import moodium1 from './../img/Moodium_1.png';
import moodium2 from './../img/Moodium_2.png';
import moodium3 from './../img/Moodium_3.png';

const projectList = [
  {"description": "Bearzooka", "image": [bearzooka1, bearzooka2, bearzooka3, bearzooka4, bearzooka5, bearzooka6, bearzooka7, bearzooka8, bearzooka9], "text": "Bearzooka ist ein Game, welches lokal mit bis zu vier Freunden spielbar ist. Das Ziel ist es, sich gegenseitig mit Bambuskugeln abzuschießen. Durch diverse Power-Ups und Rubberbanding ist der Spielspaß garantiert. Das Spiel wurde mit Unity entwickelt.", "link": "https://www.youtube.com/watch?v=ihV3084oR-U"},
  {"description": "Alraunen Simulator", "image": [alraunenSimulator1, alraunenSimulator2, alraunenSimulator3, alraunenSimulator4, alraunenSimulator5, alraunenSimulator6],"text": "Mithilfe des Alraunen Simulators kann der User die magische Welt von Harry Potter betreten. Dabei dreht sich alles um die Zucht einer Alraune. Der User kann direkt mit Game-Elementen interagieren und bekommt daraufhin ein Feedback. Der Simulator wurde mit Unity entwickelt.", "link": ""},
  {"description": "Camera Project", "image": [cameraProjekt01,cameraProjekt02,cameraProjekt03,cameraProjekt06,cameraProjekt08],"text": "In diesem selbstentwickelten virtuellen Raum kann der User sich frei bewegen und mit verschiedenen Objekten interagieren. Dabei können eigene Fotos aufgenommen und angeschaut werden. Die Website wurde mithilfe von Three.JS entwickelt.", "link": ""},
  {"description": "Moodium", "image": [moodium1, moodium2, moodium3],"text": "Mithilfe des Moodtrackers Moodium lassen sich seine täglichen Stimmungen eintragen und visualisieren. Außerdem lassen sich diese in einem monatlichen Kalender anschauen. Die Website wurde mit Node.js und express entwickelt.", "link": ""},
  {"description": "Pull the Trigger", "image": [pullTheTrigger],"text": "Der Sticker mit dem Motto \"Pull the Trigger\" lässt sich ganz einfach mit der Handykamera einscannen. Daraufhin entwickelt sich der Sticker zu einer virtuellen Blumenwiese. Der Augmented Reality Effekt wurde in Unity entwickelt, die Blumen in Blender.", "link": "https://www.youtube.com/watch?v=oVX7QAkrWLw"},

]

const Projekte = () => {

  const { globalIndex}  = useContext(indexContext);
  const { loadValue } = useContext(indexContext)

    return (
      
    <div className='bg-gradient-to-t from-[#121b2a] to-[#243b4e] text-white font-sans  text-center   min-h-screen'>
        <h1 className=' text-4xl text-center p-[30px]'>{projectList[globalIndex].description}</h1>
        <div className='w-2/4 mx-auto flex flex-wrap '>
        {projectList[globalIndex].image.map((item, index) => {
                        return (
                          <img className='p-[5px] grow' 
                            src={item} 
                          />  
                        );
                    })} 
        </div>

       
    </div>
  )
}

export default Projekte
