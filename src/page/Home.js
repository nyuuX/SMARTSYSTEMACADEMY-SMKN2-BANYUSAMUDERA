import Carousel from "../layout/carousel";
import Navbar from "../layout/nav";
import meeting from '../assets/meeting.jpg';
import meeting2 from '../assets/meeting2.jpg';
import meeting3 from '../assets/meeting3.jpg';
import meeting4 from '../assets/meeting4.jpg';
import Footer from "../layout/footer";

const Home = () => {
    return ( 
        <>
        <Navbar />
        <div className="bg-bannerssa h-[80vh] bg-cover bg-center flex flex-col justify-center items-center text-white ">
        </div>
        <div className="mt-56 text-center flex flex-col items-center w-full">
            <h2 className="text-4xl mb-16">Smart System Academy</h2>
            <p className="w-2/3 text-2xl">Adalah platform pembelajaran dengan mengusung konsep Pembelajaran paradigma baru memastikan praktik pembelajaran yang berpusat pada murid, yang mana setiap murid belajar sesuai dengan kebutuhan dan tahap perkembangannya.</p>
        </div>
        <div className="my-36 flex flex-col gap-12">
            <div className="flex sm:flex-col sm:items-center md:flex-row md:items-start justify-center gap-32 w-full">
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Program Inkubator Bisnis</p>
                    <p className="text-xl">PRODUCT ACCELERATOR</p>
                </div>
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting2} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Program Edukasi Intensif</p>
                    <p className="text-xl">FOUNDER BOOTCAMP</p>
                </div>
            </div>
            <div className="flex sm:flex-col sm:items-center md:flex-row md:items-start justify-center gap-32 w-full">
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting3} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Jaringan Investor</p>
                    <p className="text-xl">DIGITAL MARKETING</p>
                </div>
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-80 shadow-xl border  transition rounded-2xl p-8">
                    <img src={meeting4} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="mt-8 text-gray-600">Manajemen Keuangan</p>
                    <p className="text-xl">FINANCE & TAX</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center bg-banner1 h-[500px] w-full bg-fixed bg-cover text-white">
            <div className="w-[45%] flex items-center justify-center">
                <Carousel />
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Home;