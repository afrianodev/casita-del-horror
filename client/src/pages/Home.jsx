import React from 'react'
import { IoMdConstruct } from "react-icons/io";
import Navbar from '../components/Navbar';
import RecommendMovie from '../components/RecommendMovie';

function Home() {
  return (
    <div className='bg-black h-[100vh] w-[100vw] flex flex-col'>
      <Navbar />
      {/* announcement part */}
      <RecommendMovie />
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