import { AiFillTwitterCircle,AiFillInstagram,AiFillFacebook } from "react-icons/ai";
import logo from '../assets/logo.png';

const Footer = () => {
    return ( 
        <div className="mt-40 w-full ">
            <footer className='flex rounded-t-[100px] sm:flex-col sm:items-center md:flex-row md:items-start text-black py-28 px-20  justify-center gap-64 bg-gray-100 bg-no-repeat bg-cover bg-center w-full'>
                <div className="md:w-1/3 sm:w-2/3">
                    <h1 className=" text-2xl font-semibold">Hubungi Kami</h1>
                    <p className="text-lg">Jl. Pelajar Pejuang 45 No, 65 Bandung</p>

                </div>
                <div className="md:w-1/3 sm:w-2/3">
                    <h1 className="text-2xl font-semibold">Tautan berguna</h1>
                    <ul className="leading-9 text-lg text-gray-700 flex flex-col md:gap-3 xl:gap-0">
                        <li><a href="/startup" className="hover:text-[#607EA6] transition">Inkubasi Pra Startup</a></li>
                        <li><a href="/workshop" className="hover:text-[#607EA6] transition">Workshop / Webminar</a></li>
                        <li><a href="/praktek-kerja-lapangan" className="hover:text-[#607EA6] transition">PKL / Magang</a></li>
                        <li><a href="/training" className="hover:text-[#607EA6] transition">Training Bersertifikat</a></li>
                        <li><a href="/guru-industri" className="hover:text-[#607EA6] transition">Program Guru Industri</a></li>
                        <li><a href="/uji-kompetensi" className="hover:text-[#607EA6] transition">Uji Kompetensi</a></li>
                    </ul>
                </div>        
                <div className="md:w-1/3 sm:w-2/3">
                    <h1 className="text-2xl font-semibold">Tentang Smart System Academy</h1>
                    <p className="text-lg">Adalah platform pembelajaran dengan mengusung konsep Pembelajaran paradigma baru memastikan praktik pembelajaran yang berpusat pada murid, yang mana setiap murid belajar sesuai dengan kebutuhan dan tahap perkembangannya.</p>
                    <div className="flex flex-row gap-2 my-2 text-gray-700">
                        <AiFillFacebook fontSize="2rem"/>
                        <AiFillInstagram fontSize="2rem"/>
                    </div>
                    <div className="">
                        <img src={logo} alt="" className="w-[150px] h-[150px]" />
                        <p className="my-5 font-semibold">© 2022 Smart System Academy. All rights reserved</p>
                    </div>
                </div>
                
            </footer>

            
        </div>
     );
}
 
export default Footer;