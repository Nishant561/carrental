import React from 'react'


function Button({text='button'}) {



  return (
    <>
        <button className="relative w-[116px] h-[53px] flex-none  rounded-md bg-[#ff4c31] text-white font-semibold overflow-hidden group 1290:w-[80px] 1290:h-[41px] 1290:text-[15px]">
      <span className="relative z-10 text-nowrap">{text}</span>
      <span className="absolute inset-0 w-0 h-full bg-black transition-all duration-300 group-hover:w-full"></span>
    </button>
    </>
  )
}

export default Button
