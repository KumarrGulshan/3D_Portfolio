import React, { useEffect, useState, useRef } from "react";
import { soundoff, soundon, arrow } from "../assets/icon";
import Air_sound from "../assets/Air_sound.mp3";

function Home() {
  const audioRef = useRef(new Audio(Air_sound));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play().catch(err => console.error("Error playing audio:", err));
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [isPlayingMusic]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative bg-fuchsia-950 text-white rounded-3xl p-1 mx-4 mt-4 
                    sm:mx-10 sm:mt-6 max-w-full 
                    sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-6xl">
      
      <p className={`transition-transform duration-1000 transform text-center 
                     text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 
                     leading-snug 
                     ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        Hi, I am <span className="font-semibold text-lg sm:text-2xl md:text-3xl xl:text-5xl">Gulshan</span> 🖐️<br />
        A Software Engineer from BIHAR
      </p>

      <div className="mt-4 flex justify-center">
        <a
          href="/about"
          className="flex items-center gap-2 ml-5 px-5 py-2 mb-1.5 
                     w-40 sm:w-50 md:w-60 lg:w-72 
                     bg-white text-blue-500 font-semibold rounded-2xl 
                     hover:bg-violet-600 hover:text-white hover:scale-90 
                     transition-all duration-300 ease-in-out text-sm md:text-base lg:text-lg"
        >
          Learn more
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </a>
      </div>

      <div className="absolute bottom-4 left-4">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-8 h-8 cursor-pointer object-contain"
        />
      </div>
    </div>
  );
}


export default Home;
