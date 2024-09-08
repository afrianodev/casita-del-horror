import { Link } from 'react-router-dom';
import logo from '../assets/casita.svg';
import findIcon from '../assets/find-icon.svg';
import { useState } from 'react';

import closeIcon from '../assets/close.svg';
import burgerIcon from '../assets/burger.svg';

export default function Header() {
    const [deployMenu, setDeployMenu] = useState(false);
    const [deployFind, setDeployFind] = useState(false);

    const HandleMenuClick = () => {
        setDeployMenu(prev => !prev)
    }

    const HandleFindClick = () => {
        setDeployFind(prev => !prev)
    }

    return(
        <div className="select-none overflow-x-hidden h-[50px] w-[100vw] mt-[2%] bg-black rounded-xl flex justify-between px-2 md:px-6 lg:px-10">
            <Link to='/' className="flex gap-0 md:gap-2 justify-center items-center">
                <h1 className="text-white text-lg md:text-xl lg:text-2xl">La Casita del Horror</h1>
                <img src={logo} className="w-[35px] md:w-[40px] lg:w-[50px]" />
            </Link>
            <div className='flex gap-2'>
            {!deployMenu ? <img src={burgerIcon} className='w-[35px] mr-1 cursor-pointer' onClick={HandleMenuClick}  alt="burger icon" /> :
            <ul className='flex gap-4 mr-2 items-center'>
                <li className="flex items-center justify-center cursor-pointer select-none text-white"><Link to='/'>Inicio</Link></li>
                <li className="flex items-center justify-center cursor-pointer select-none text-white"><Link to='/thriller'>Thriller</Link></li>
                <li className="flex items-center justify-center cursor-pointer select-none text-white"><Link to='/paranormal'>Paranormal</Link></li>
                <li className="flex items-center justify-center cursor-pointer select-none text-white"><Link to='/sangrientas'>Sangrientas</Link></li>
                <li className="flex items-center justify-center cursor-pointer select-none text-white"><Link to='/criaturas'>Criaturas</Link></li>
                <li className="flex items-center justify-center cursor-pointer select-none text-white"><Link to='/clasicas'>Clásicas</Link></li>
                <li><img src={closeIcon} className='w-[30px] ml-4 cursor-pointer select-none' onClick={HandleMenuClick} alt="close icon" /></li>
            </ul>
            }
            {!deployFind ? <img src={findIcon} className='w-[20px] md:w-[20px] lg:w-[25px] cursor-pointer' onClick={HandleFindClick} /> : 
            <div className='flex items-center'><input type="text" className='rounded-xl px-2 py-0 h-8' /><img src={closeIcon} className='w-[30px] ml-4 cursor-pointer select-none' onClick={HandleFindClick} alt="close icon" /></div>
            }
            
            </div>
        </div>
    )
}