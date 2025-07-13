import React from 'react'

const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[70%] mx-auto overflow-hidden group mt-8">
        <img
          src="emf-program.jpg"
          alt="Program Hero"
          className="w-full h-[196px] md:h-[252px] object-contain transition-transform duration-300 group-hover:scale-105 border-4 border-black"
        />
      </div>
      <h1 className="text-4xl md:text-5xl text-center text-[#a0403a] font-bold mt-8 border-b-4 border-[#a0403a] inline-block">
    INSTITUTE PROGRAMS
      </h1>
    </div>
  )
}

export default HeroSection
