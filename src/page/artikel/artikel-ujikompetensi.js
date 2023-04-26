import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay2 from '../../assets/layanan2.png';
import lay6 from '../../assets/layanan6.jpg';


const UjiKompetensi = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Pengadaan Uji Kompetensi Industri</h2>
            <div className="flex sm:flex-col xl:flex-row w-full gap-16"> 
                <img src={lay6} alt="" className="w-[500px] h-[400px]" />
                <div className="flex flex-col capitalize">
                    <p className="font-bold text-xl mb-5">Syarat Mengikuti :</p>
                    <p>a.	Seluruh siswa/I sekolah kejuruan atau umum</p>
                    <p>b.	Lulus pelatihan dasar dengan nilai materi minimal rata – rata 7</p>
                    <p className="font-bold text-xl my-5">Materi Kompetensi:</p>
                    <p>a.	Junior Web Developer (sesuai sub bidang)</p>
                    <p>b.	Junior Mobile Developer (sesuai sub bidang)</p>
                    <p>c.	Internet of Things (sesuai sub bidang)</p>
                    <p>d.	3D Modelling (sesuai sub bidang)</p>
                    <p className="font-bold text-xl my-5">Durasi :</p>
                    <p>Sesuai Kebutuhan</p>
                    <p className="font-bold text-xl my-5">Kuota :</p>
                    <p>Kuota tidak terbatas (online dan offline)</p>
                    <p className="font-bold text-xl my-5">Biaya :</p>
                    <p>Biaya eksploitasi tim penguji dan sertifikat Rp.500.000,- sd Rp.1.000.000,-</p>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-[#607EA6] hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default UjiKompetensi;