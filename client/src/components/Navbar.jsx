import { FaSearch } from "react-icons/fa";

function Navbar() {
  return (
    <div className='w-full h-20 p-4 px-8 flex justify-between items-center'>
        <div className='flex gap-2 items-baseline'>
          <img src="logo-casita-sola.webp" alt="icono de una casa con murcielagos y luna roja" className='h-10' />
          <img src="logo-texto.webp" alt="texto la casita del horror" className='h-8' />
        </div>
        <ul className='text-[#ece4d9] font-sans text-lg select-none hidden sm:flex flex-1 justify-center gap-16'>
            <li>Gore</li>
            <li>Slasher</li>
            <li>Thriller</li>
            <li>Psicológicas</li>
        </ul>
        <div className='text-[#ece4d9] border p-2 pl-4 rounded-lg w-[100px] sm:w-[220px] flex justify-between items-center'>
            <input type="text" className="outline-none" />
            <FaSearch />
        </div>
    </div>
  )
}

export default Navbar