import logo from '../casita.svg';
import findIcon from '../find-icon.svg';

export default function Header() {
    return(
        <div className="select-none overflow-x-hidden h-[50px] w-[100vw] mt-[2%] bg-black rounded-xl flex justify-between px-2 md:px-6 lg:px-10">
            <div className="flex gap-0 md:gap-2 justify-center items-center">
                <h1 className="text-white text-lg md:text-xl lg:text-2xl">La Casita del Horror</h1>
                <img src={logo} className="w-[35px] md:w-[40px] lg:w-[50px]" />
            </div>
            <div className='flex gap-2 mr-2'>
                <div className="w-[60px] md:w-[90px] lg:w-[120px] flex items-center justify-center cursor-pointer select-none text-white">Categorías</div>
                <img src={findIcon} className='w-[20px] md:w-[20px] lg:w-[25px]' />
            </div>
        </div>
    )
}