import React from 'react'
import { useState, useEffect } from "react";
const Skills = ({description, image, visible, onChangeVisibilityTrue,onChangeVisibilityFalse, onCheckNewIndex, index}) => {


  return (
    <div>
        
        <div
            onTouchStart={() => {
                onChangeVisibilityTrue(index);
                onCheckNewIndex(index);
            }}
            onMouseOver={() => {
                onChangeVisibilityTrue(index);

            }} 
            onMouseLeave={() => {
                onChangeVisibilityFalse(index);
            }} 
            className= {
            visible
            ? "rounded-full bg-[#a85d62] w-[50px] h-[50px]"
            : "rounded-full bg-[#243b4e] w-[50px] h-[50px]"
        }   
        >
            <img src={image} alt={description} className="w-4/5 mx-auto pt-1/10 "/>            
        </div>
    </div>

  )
}

export default Skills
 