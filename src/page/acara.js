import Footer from "../layout/footer";
import Navbar from "../layout/nav";
import acara from '../assets/acara.jpg';
import acara2 from '../assets/acara2.jpg';
import acara3 from '../assets/acara3.jpg';
import acara4 from '../assets/acara4.jpg';
import acara5 from '../assets/acara5.jpg';
import acara6 from '../assets/acara6.jpg';
import acara7 from '../assets/acara7.png';

const Acara = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner5 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">ACARA</h2>
        </div>
        <div className="w-full flex flex-col py-36 justify-center items-center gap-20">
        <div className="flex sm:flex-col md:flex-row w-2/3">
                <img src={acara7} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">SMART SYSTEM FOR INDUSTRI</h1>
                    <p className="text-xl">Halo Teman - teman SMK</p>
                    <p className="text-xl">Webinar Smart System for Industry dibuka untuk umum. </p>
                    <p className="text-xl">Acara ini akan diselenggarakan pada :</p>
                    <p className="text-xl">Hari/Tanggal 	: Senin, 6 Juni 2022</p>
                    <p className="text-xl">Pukul		: 09.30 - selesai</p>
                    <p className="text-xl">Online via Zoom Meeting</p>
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSefep5Nnc0Ho_TT7qtHXTZoncjmyF2_Zu0YSH08E9yc1tNi5Q/viewformhttps://s.id/PendaftaranWebinarSmartSystemIndustry" className="font-bold text-xl transition hover:text-[#607EA6]" target="_blank">Daftar Sekarang</a>
                </div>  
            </div>
            <div className="flex sm:flex-col md:flex-row-reverse text-right w-2/3">
                <img src={acara2} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">MOBILE APPS</h1>
                    <p className="text-xl">Acara ini akan diselenggarakan Online via zoom meeting</p>
                    <p className="text-xl">Webinar Mobile Developer dibuka untuk umum. Dengan Tema "Mobile Developer Using Flutter"</p>
                    <p className="text-xl">Acara ini akan diselenggarakan Online via zoom meeting</p>
                    <p className="text-xl pt-4">Registration FREE</p>
                </div>
            </div>
            <div className="flex sm:flex-col md:flex-row w-2/3">
                <img src={acara4} alt="" className="w-[400px]" />
                <div className="p-10">
                <h1 className="text-3xl">PENGANTAR IOT</h1>
                    <p className="text-xl">Webinar Web Developer dibuka untuk umum. Dengan Tema sebagai berikut :</p>
                    <p className="text-xl">1. Pengantar Smart System I</p>
                    <p className="text-xl">2. Pengantar Smart System II</p>
                    <p className="text-xl">3. Pengantar IoT I</p>
                    <p className="text-xl">4. Pendalaman IoT II</p>
                    <p className="text-xl">5. Pemahanan IoT</p>
                    <p className="text-xl">6. IoT Project Based Learning</p>
                    <p className="text-xl">Acara ini akan diselenggarakan Online via zoom meeting</p>
                    <p className="text-xl pt-4">Registration FREE</p> 
                </div>
            </div>
            <div className="flex sm:flex-col md:flex-row-reverse text-right w-2/3">
                <img src={acara6} alt="" className="w-[400px]" />
                <div className="p-10">
                    <h1 className="text-3xl">WEB PROGRAMMING</h1>
                    <p className="text-xl">Webinar Web Developer dibuka untuk umum. Dengan Tema sebagai berikut :</p>
                    <p className="text-xl">1. Dasar Dasar HTML</p>
                    <p className="text-xl">2. Javascript</p>
                    <p className="text-xl">3. Framework Vue JS</p>
                    <p className="text-xl">4. Javascript Lanjutan</p>
                    <p className="text-xl">5. Pengenalan RMQ</p>
                    <p className="text-xl">6. Projek Akhir dengan Vue JS</p>
                    <p className="text-xl">Acara ini akan diselenggarakan pada :</p>
                    <p className="text-xl">Online via zoom meeting</p>
                    <p className="text-xl pt-4">Registration FREE</p>
                </div>
            </div>
            <div className="flex sm:flex-col md:flex-row w-2/3">
                <img src={acara3} alt="" className="w-[400px]" />
                <div className="p-10">
                    .........
                </div>  
            </div>
            <div className="flex sm:flex-col md:flex-row-reverse text-right w-2/3">
                <img src={acara5} alt="" className="w-[400px]" />
                <div className="p-10">
                    ........
                </div>
            </div>
            <div className="flex sm:flex-col md:flex-row w-2/3">
                <img src={acara} alt="" className="w-[400px]" />
                <div className="p-10">
                    ........
                </div>
            </div>
        </div>
        
        <Footer/>
        </>
     );
}
 
export default Acara;