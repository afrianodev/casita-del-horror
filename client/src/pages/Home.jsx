import React from 'react'
import { FaSearch } from "react-icons/fa";
import { IoMdConstruct } from "react-icons/io";

function Home() {
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex flex-col'>
      {/* banner part */}
      <div className='w-full h-20 p-4 flex justify-evenly items-center'>
        <div className='flex gap-2 items-baseline'>
          <img src="logo-casita-sola.webp" alt="icono de una casa con murcielagos y luna roja" className='h-10' />
          <img src="logo-texto.webp" alt="texto la casita del horror" className='h-8' />
        </div>
        <div>
          <ul className='text-white gap-4 font-serif text-lg select-none hidden sm:flex'>
            <li>Gore</li>
            <li>Slasher</li>
            <li>Thriller</li>
            <li>Psicológicas</li>
          </ul>
        </div>
        <div className='text-white'>
          <div className='border p-2 rounded-lg w-[100px] sm:w-[200px] flex justify-end'>
            <FaSearch />
          </div>
        </div>
      </div>
      {/* announcement part */}
      <div className='text-white flex flex-col gap-4 items-center select-none my-auto'>
        <IoMdConstruct className='text-9xl' />
        <p className='text-2xl text-center'>Este sitio se encuentra en construcción</p>
      </div>
      {/* button to the old version */}
      <div className='flex items-center flex-col mt-auto mb-4'>
        <p className='text-white mb-4'>Todavía puedes entrar a la antigua versión</p>
        <a href='https://old-casita-horror.vercel.app/' className='bg-red-700 p-2 cursor-pointer w-[170px] text-white font-bold rounded-lg text-center'>
          Versión antigua
        </a>
      </div>
    </div>
  )
}

export default Home