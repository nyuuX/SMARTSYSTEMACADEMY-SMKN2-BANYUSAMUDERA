import Footer from "../layout/footer";
import Navbar from "../layout/nav";
import p1 from '../assets/p1.jpg';
import p2 from '../assets/p2.jpg';
import p3 from '../assets/p3.jpg';
import p4 from '../assets/p4.jpg';
import p5 from '../assets/p5.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';
import p8 from '../assets/p8.jpg';

const Tentang = () => {
    return ( 
        <>
        <Navbar />
        <div className="bg-banner1 bg-fixed bg-cover bg-center h-[500px]  flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">TENTANG SMART SYSTEM ACADEMY</h2>
        </div>
        <div className="text-center py-32 w-full flex flex-col items-center">
            <h2 className="text-xl text-gray-500 mb-8">SELAMAT DATANG DI SMART SYSTEM ACADEMY</h2>
            <p className="text-4xl w-4/5">Adalah platform pembelajaran dengan mengusung konsep Pembelajaran paradigma baru memastikan praktik pembelajaran yang berpusat pada murid, yang mana setiap murid belajar sesuai dengan kebutuhan dan tahap perkembangannya.</p>
        </div>
        <div className="flex sm:flex-col sm:items-center xl:flex-row xl:items-start justify-evenly py-32 bg-gray-50">
            <div className="text-center sm:w-full xl:w-1/3 min-h-[530px] p-20 rounded-2xl shadow border transition bg-white">
                <h2 className="text-3xl mb-4">Visi</h2>
                <p className="text-lg">Visi kami adalah menjadi Inkubator terbaik untuk Startups bidang teknologi informasi dan komunikasi di Indonesia.</p>
            </div>
            <div className="text-center sm:w-full xl:w-1/3 min-h-[530px] p-20 shadow rounded-2xl border transition bg-white">
                <h2 className="text-3xl mb-4">Misi</h2>
                <ul className="text-left list-none text-lg">
                    <li>1. Mengelola program Inkubator yang berfokus pada solusi dan inovasi berkelanjutan.</li>
                    <li>2. Menyediakan fasilitas yang mendorong Startup untuk menjadi kreatif dan produktif.</li>
                    <li>3. Menjadi penghubung untuk Startup dengan sinergi program dan kolaborasi dengan investor, pemerintah, perusahaan, akademisi, media dan komunitas.</li>
                    <li>4. Mengelola pendanaan yang menguntungkan dan modal pertumbuhan untuk Investor dan Startup.</li>
                </ul>
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Tentang;