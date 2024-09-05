import gitHubIcon from '../../assets/github-icon.svg';
import profileIcon from '../../assets/profile-icon.svg';

export default function Footer() {

    return(
    <div className="h-[70px] mt-4 flex justify-center items-center gap-12">
        <p className="text-white">Desarrollado por <a>AFRIANO</a></p>
        <div className='flex gap-4'>
            <a href="https://portfolio-afrianodev.vercel.app/" target='blank'><img className='w-[20px]' src={profileIcon} /></a>
            <a href='https://github.com/afrianodev' target='blank'><img className='w-[20px]' src={gitHubIcon} /></a>
        </div>
    </div>
    )
}