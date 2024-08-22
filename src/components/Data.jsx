import React from 'react';
import { gsap } from 'gsap';
import { IconContext } from "react-icons";
import { FaCar } from "react-icons/fa";
import { TweenMax } from 'gsap/gsap-core';

function Data(props) {
  const shakeHandler = (e) => {

    
    TweenMax.fromTo(e.currentTarget, 0.1, {
        x: -3,
      }, {
        x: 3,
        repeat: 5,
        yoyo: true,
        
      });
   
  };

  return (
    <>
      <div className='flex w-[27%] flex-col items-center p-4 854:w-full  '>
        <img 
          onMouseEnter={shakeHandler} 
          className='shaker w-[150px] object-contain object-center' 
          src={props.item.img} 
          alt="Shaking"
        />
        <h2 className='text-2xl text-nowrap font-semibold'>{props.item.text}</h2>
        <p className='pt-2 text-center leading-5 text-zinc-500'>{props.item.description}</p>
      </div>
    </>
  );
}

export default Data;
