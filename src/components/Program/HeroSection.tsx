const HeroSection = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-[70%] mx-auto overflow-hidden group mt-8">
        <img
          src="emf-program.jpg"
          alt="Program Hero"
          className="w-full h-[196px] md:h-[252px] object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h1 className="text-4xl md:text-5xl text-center text-[#a0403a] font-bold mt-8">
    INSTITUTE PROGRAMS
      </h1>
    </div>
  )
}

export default HeroSection
