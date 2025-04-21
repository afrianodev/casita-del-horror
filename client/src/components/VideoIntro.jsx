import React, { useState } from 'react';
import { MoonLoader } from 'react-spinners';

const VideoIntro = ({ onVideoEnd }) => {
  const [isVideoReady, setIsVideoReady] = useState(false);

  const handleCanPlay = () => {
    setIsVideoReady(true);
  };

  return (
    <div className="relative w-full h-screen bg-black flex justify-center items-center">
      {!isVideoReady && (
        <div className="absolute inset-0 flex justify-center items-center bg-black">
          <MoonLoader color="#ffffff" size={50} />
        </div>
      )}
      <video
        className="w-[30%] sm:w-[12.5%] h-auto max-w-xs max-h-[calc(100vh-2rem)] object-contain"
        autoPlay
        muted
        playsInline
        onCanPlay={handleCanPlay}
        onEnded={onVideoEnd}
      >
        <source src="/casitahorror-video-intro.mp4" type="video/mp4" />
        La casita del horror.
      </video>
    </div>
  );
};

export default VideoIntro;