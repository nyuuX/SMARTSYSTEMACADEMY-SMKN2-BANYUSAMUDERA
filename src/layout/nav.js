import logo from '../assets/logo.png';
import { FaHome, FaTools, FaComment } from "react-icons/fa";
import { IoAlertOutline, IoPeople, IoCalendarClear } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <>
        <nav className="flex w-full bg-white justify-evenly py-2 px-28 text-black z-50">
            <ul className='flex gap-8 justify-center items-center text-lg sm:flex-col md:flex-row text-center'>
                <li><a href="/" className='flex items-center gap-1'><img src={logo} alt="" className='w-16 h-16 sm:mr-0 xl:mr-36'/></a></li>
                <li><NavLink to="/" className='flex items-center gap-1 hover:text-[#607EA6] hover:border-b-2 border-[#607EA6] transition'><FaHome/>Beranda</NavLink></li>
                <li><NavLink to="/tentang" className='flex items-center gap-1 hover:text-[#607EA6] hover:border-b-2 border-[#607EA6] transition'><IoAlertOutline/>Tentang</NavLink></li>
                <li><NavLink to="/layanan" className='flex items-center gap-1 hover:text-[#607EA6] hover:border-b-2 border-[#607EA6] transition'><FaTools/>Layanan</NavLink></li>
                <li><NavLink to="/acara" className='flex items-center gap-1 hover:text-[#607EA6] hover:border-b-2 border-[#607EA6] transition'><IoCalendarClear/>Acara</NavLink></li>
                <li><NavLink to="/kontak" className='flex items-center gap-1 hover:text-[#607EA6] hover:border-b-2 border-[#607EA6] transition'><FaComment/>Kontak</NavLink></li>
            </ul>
        </nav>
        </>
     );
}
 
export default Navbar;