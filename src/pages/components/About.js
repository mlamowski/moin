import React from 'react'
import Wave2 from './Wave2'
import Typo_Ueber_Mich from './Typo_Ueber_Mich'
import michelle from './../../img/Michelle.png';
import build from './../../img/build_FILL0_wght400_GRAD0_opsz48.svg'
import code from './../../img/code_FILL0_wght400_GRAD0_opsz48.svg'
import design from './../../img/design_services_FILL0_wght400_GRAD0_opsz48.svg'
import draw from './../../img/draw_FILL0_wght400_GRAD0_opsz48.svg'
import { useState, useEffect } from 'react';


import Skills from './Skills'

const skills = [
    {"description": "Konzeption", "image": draw, "visible": false, "text": "Von der Ideenfindung bis hin zur Planung übernehme ich alles gerne."},
    {"description": "Design", "image": design, "visible": false, "text": "Entwicklung und Gestaltung von einzigartigen Designkonzepten"},
    {"description": "Digitale Medien", "image": code, "visible": false, "text": "Erstellung von Animationen, 3D-Assets bis hin zur Programmierung. Digitale Medien sind mein Ding!"},
    {"description": "Print Medien", "image": build, "visible": false, "text": "Ich bin eine Expertin für jegliche Formen von Printmedien. Egal ob Flyer, Anzeigen oder Karten. "},

]


const About = () => {
    const [isVisible, setVisible] = useState(skills);
    const [isIndex, setIndex] = useState(0);

    const changeVisiblityTrue = (index) => {
        const newIsVisible = [...isVisible]
        newIsVisible[index].visible = true; 
        setIndex(index);
        setVisible(newIsVisible);
    }

    const changeVisiblityFalse = (index) => {
        const newIsVisible = [...isVisible]
        newIsVisible[index].visible = false;
        
        setVisible(newIsVisible);

    }
   
  return (
    <div className='bg-gradient-to-t from-[#121b2a] to-[#222d3a] text-center  text-white'>
        <h1 className=' text-4xl pb-[30px] font-extrabold'>
            ÜBER MICH
        </h1>
        <div className='flex justify-evenly items-center flex-wrap'>
            <div className=' flex-col flex  justify-between w-[350px] sm:w-[280px]'>
                <div className= {
                    skills[isIndex].visible
                    ? 'bg-white rounded-2xl opacity-1 p-[10px] mb-[30px] opacity-1'
                    : 'bg-white rounded-2xl opacity-1 p-[10px] mb-[30px] opacity-0'
                } >
                    <p className="text-black text-xs font-sans"  > {skills[isIndex].text} </p>
                </div>      
                <div className='flex justify-between items-center'>
                    {/*}
                    {Array.from({ length: 4 }).map((_, index) => (
                        <Skills key={index}></Skills>
                    ))}  
                    {*/}

                    {skills.map((item, index) => {
                        return (
                            <div>
                                <Skills 
                                    text={item.text}
                                    description={item.description}
                                    image={item.image}
                                    visible={item.visible}

                                    key={index}
                                    index={index}
                                    onChangeVisibilityTrue={changeVisiblityTrue}
                                    onChangeVisibilityFalse={changeVisiblityFalse}
                                ></Skills>
                            </div>
                        );
                    })}

                </div>
      

                <p className='py-[30px] font-sans'  >
                        Mein Name ist Michelle und ich brenne für einzigartige Designs und die neusten Technologien. 
                        
                </p>
            </div>
            <div className=' w-[350px] flex items-center justify-evenly sm:w-[280px]'>
                <img src={michelle} alt="Bild"/>            
            </div>
        </div>
        

        <Wave2/>
    </div>
  )
}

export default About
