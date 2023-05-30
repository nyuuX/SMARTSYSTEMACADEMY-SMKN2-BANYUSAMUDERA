import Carousel from "../layout/carousel";
import Navbar from "../layout/nav";
import Inkubasi from '../assets/InkubasiPraStartUp_Model1.png';
import Workshop from '../assets/Workshop_Model1.png';
import Magang from '../assets/Magang_Model1.png';
import Training from '../assets/Training_Model1.png';
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
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-auto shadow-xl border  transition rounded-2xl p-8">
                    <img src={Inkubasi} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="text-xl mt-8">Inkubasi Pra Startup</p>
                </div>
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-auto shadow-xl border  transition rounded-2xl p-8">
                    <img src={Workshop} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="text-xl mt-8">Workshop / webminar</p>
                </div>
            </div>
            <div className="flex sm:flex-col sm:items-center md:flex-row md:items-start justify-center gap-32 w-full">
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-auto shadow-xl border  transition rounded-2xl p-8">
                    <img src={Magang} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="text-xl mt-8">PKL / Magang</p>
                </div>
                <div className="flex flex-col items-center align-middle md:w-1/4 sm:w-2/4 h-auto shadow-xl border  transition rounded-2xl p-8">
                    <img src={Training} alt="" className="w-36 h-36 rounded-full object-cover"/>
                    <p className="text-xl mt-8">Training Bersertifikat</p>
                </div>
            </div>
        </div>
        <div className="flex justify-center h-[500px] w-full bg-gray-50 text-white">
            <div className="w-[45%] flex items-center justify-center">
                <Carousel />
            </div>
        </div>
        <Footer />
        </>
     );
}
 
export default Home;