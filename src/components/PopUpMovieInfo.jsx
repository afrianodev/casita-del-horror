import React from 'react'
import { FaPlay } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

export default function PopUpMovieInfo({movieTitle, movieURL, movieSinopsis, moviePoster, movieDuration, movieYear, movieDirector}) {
  const handleClose = () => {
    
  }
  return (
    <div className='absolute top-1/2 left-1/2 w-[60%] h-[70vh] transform -translate-x-1/2 -translate-y-1/2 z-50 bg-black rounded-md overflow-hidden text-white flex'>
      <div className='w-[50%] p-8 gap-4 flex flex-col justify-center items-center'>
        <h2 className='text-2xl'>Titulo de la pelicula aqui</h2>
        <p>Aqui iria la sinopsis, Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti rem maiores sequi illo dolore vel sint, corporis rerum accusantium iusto consequuntur libero alias necessitatibus enim similique vitae assumenda officia quasi.</p>
        <div className='flex justify-around w-[100%] text-sm'>
          <p>año 2024</p>
          <p>Director Pipelonstoky</p>
        </div>
        <div className='flex justify-around mt-8 w-[100%]'>
          <div className='bg-transparent border border-white py-2 px-4 rounded-md select-none cursor-pointer hover:bg-zinc-800'>Ver Película</div>
          <div className='bg-red-900 py-2 px-4 rounded-md select-none cursor-pointer flex gap-2 items-center hover:bg-red-800'>
            <FaPlay />
            <p>Trailer</p>
          </div>
        </div>
      </div>
      <div className='w-[50%] relative'>
        <div className='absolute text-white bg-black right-2 top-1 p-2 rounded-full select-none cursor-pointer hover:bg-zinc-800 hover:rotate-90 hover:transition-transform text-2xl' onClick={handleClose}><CgClose /></div>
        <img src="https://m.media-amazon.com/images/S/pv-target-images/bcc47bd375b8eb12821e9b48ad05475eeb85e106efeb02cf1803b1f1b9d57ee3.jpg" alt="movie poster"
        className='h-full w-full object-cover' />
      </div>
    </div>
  )
}
