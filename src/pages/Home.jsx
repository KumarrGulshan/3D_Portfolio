import React, { useEffect, useState } from "react";
import {useRef } from "react";
import { soundoff, soundon } from "../assets/icon";
import { arrow } from "../assets/icon";
import Ishq_Bulaava from "../assets/Ishq Bulaava Hasee Toh Phasee 320 Kbps.mp3";

function Home({ }) {
  const audioRef = useRef(new Audio(Ishq_Bulaava));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;

  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play(Ishq_Bulaava).catch(err => console.error("Error playing audio:", err));
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; // Reset audio
    }
  }, [isPlayingMusic]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Trigger the visibility after delay
    }, 300); // Delay to make the animation smooth
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="sm:text-xl w-110 h-30 sm:leading-snug rounded-3xl ml-125 mr-125 mt-1 bg-fuchsia-950 text-center py-4 px-6 text-white mx-5">
       <p className={`transition-transform duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        Hi, I am <span className="font-semibold"> Gulshan </span> 🖐️ <br />
        A Software Engineer from BIHAR
      </p>
      
      <div>
      <a
        href="/about"
        className="justify-center w-full bg-white text-blue-500 h-10 font-semibold px-6 py-2 rounded-2xl 
                   hover:bg-violet-600 hover:text-white hover:scale-90 transition-all 
                   duration-300 ease-in-out transform flex items-center gap-2"
      >
        Learn more
        <img src={arrow} alt="arrow" className="w-4 h-4 object-contain " />
      </a>
    </div>


      <div className="absolute mt-122 ml-4 left-2">
        <img
          src={isPlayingMusic ? soundon : soundoff}
          alt="jukebox"
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className="w-10 h-10 cursor-pointer object-contain" 
        />
      </div>
    </div>
  );
}

export default Home;
