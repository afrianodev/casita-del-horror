import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export default function PopUpMovieInfo({movieTitle, movieURL, movieSinopsis, moviePoster, movieDuration, movieYear, movieDirector, onClose}) {

  return (
    <div className='absolute top-1/2 left-1/2 w-[60%] h-[70vh] transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black rounded-md overflow-hidden text-white flex'>
      <div className='w-[50%] p-8 gap-4 flex flex-col justify-center items-center'>
        <h2 className='text-2xl'>{movieTitle}</h2>
        <p>{movieSinopsis}</p>
        <div className='flex justify-around w-[100%] text-sm'>
          <p>{movieYear}</p>
          <p>Director Pipelonstoky</p>
        </div>
        <div className='flex justify-around mt-8 w-[100%]'>
          <div className='bg-transparent border border-white py-2 px-4 rounded-md select-none cursor-pointer hover:bg-zinc-800'>Ver Película</div>
          <div className='bg-red-900 py-2 px-4 rounded-md select-none cursor-pointer flex gap-2 items-center hover:bg-red-800'>
            <FaPlay />
            <p onClick={() => alert('Lo sentimos, esta función todavía no está activa.')}>Trailer</p>
          </div>
        </div>
      </div>
      <div className='w-[50%] relative'>
        <div className='absolute text-white bg-black right-2 top-1 p-2 rounded-full select-none cursor-pointer hover:bg-zinc-800 hover:rotate-90 hover:transition-transform text-2xl' onClick={onClose}><CgClose /></div>
        <img src={moviePoster} alt="movie poster"
        className='h-full w-full object-contain' />
      </div>
    </div>
  )
}
