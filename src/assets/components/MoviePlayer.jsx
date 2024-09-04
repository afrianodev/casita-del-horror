import { useState } from "react";


export default function MoviePlayer({movieSel, setSelectedMovie, setCurrentMovie}) {
    const [movieSet, setMovieSet] = useState(true);
    
    const handleBack = () => {
        setSelectedMovie(null);
        setCurrentMovie(null);
    };

    return(

    <div className='w-[98vw] h-[80vh] bg-gray-950 rounded-3xl mx-auto mt-5'>
        <div className='flex gap-10 justify-center'>
        <button
            onClick={handleBack}
            className="bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center text-white"
        >
            Volver
        </button>
        <div className='bg-gray-900 rounded-3xl p-2 mt-4 w-[15%] flex items-center justify-center text-white'>
            Info
        </div>
        </div>
        <iframe
        src={movieSel}
        title="Movie Player"
        className="w-[90%] h-[85%] mx-auto mt-4"
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        ></iframe>
    </div>)
}