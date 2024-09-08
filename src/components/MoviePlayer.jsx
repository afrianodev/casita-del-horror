import { useState } from "react";


export default function MoviePlayer({movieSel, setSelectedMovie, movieTitle}) {
    
    const handleBack = () => {
        setSelectedMovie(null);
    };

    return(

    <div className='w-[100vw] h-[80vh] bg-black mx-auto mt-4'>
        <div className='flex gap-10 justify-around items-center'>
        <button
            onClick={handleBack}
            className="border-2 rounded-md py-2 w-[150px] flex items-center justify-center text-white"
        >
            Volver
        </button>
        <h2 className="text-white text-2xl">{movieTitle}</h2>
        </div>
        <iframe
        src={movieSel}
        title="Movie Player"
        className="w-[90%] h-[90%] mx-auto mt-4"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        ></iframe>
    </div>)
}