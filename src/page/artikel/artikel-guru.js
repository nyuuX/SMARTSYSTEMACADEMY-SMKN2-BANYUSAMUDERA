import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay5 from '../../assets/layanan5.png';


const GuruIndustri = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Program Guru Industri</h2>
            <div className="flex sm:flex-col xl:flex-row w-full gap-16"> 
                <img src={lay5} alt="" className="w-[500px] h-[400px]" />
                <div className="flex flex-col capitalize">
                    <p className="font-bold text-xl mb-5">Syarat Mengikuti :</p>
                    <p>a.	Sekolah mengajukan permohonan</p>
                    <p>b.	Materi sesuai yang terdapat pada industry</p>
                    <p>c.	Membayar biaya eksploitasi narasumber</p>
                    <p className="font-bold text-xl my-5">Materi :</p>
                    <p>Materi bahasan sesuai dengan materi pelatihan, bila terdapat usulan materi diluar yang disajikan oleh industry dapat berkordinasi dengan admin</p>
                    <p className="font-bold text-xl my-5">Durasi :</p>
                    <p>Seminggu kami sediakan 2x kehadiran guru industry, masing – masing kehadiran 2 jam pelajaran</p>
                    <p className="font-bold text-xl my-5">Kuota :</p>
                    <p>Kuota dalam setahun atau 2 semester sebanyak 156 jam pelajaran atau 78 jam pelajaran per semester</p>
                    <p className="font-bold text-xl my-5">Biaya :</p>
                    <p>Biaya eksploitasi guru industry Rp.1.000.000,- sd Rp.2.500.000,-</p>
                    <Link to="https://forms.gle/ePfx6WGWvXBdLx9H9" target="_blank" className="w-1/3 bg-[#607EA6] text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</Link>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-[#607EA6] hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default GuruIndustri;