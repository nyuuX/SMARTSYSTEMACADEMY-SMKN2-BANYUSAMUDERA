import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay2 from '../../assets/layanan2.png'


const Workshop = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Workshop / Webminar</h2>
            <div className="flex sm:flex-col xl:flex-row w-full gap-16"> 
                <img src={lay2} alt="" className="w-[500px] h-[400px]" />
                <div className="flex flex-col capitalize">
                    <p className="font-bold text-xl mb-5">Syarat Mengikuti :</p>
                    <p>a.	Semua peserta sekolah kejuruan maupun umum</p>
                    <p>b.	Tertarik terhadap perkembangan smart system baik lintas jurusan</p>
                    <p>c.	Melakukan pendaftaran</p>
                    <p>d.	Membayar biaya pengganti sertifikat keikutsertaan</p>
                    <p className="font-bold text-xl my-5">Materi :</p>
                    <p>Terdiri dari 80% materi yang disampaikan dalam bentuk gambar atau video dan 20% diskusi. Materi terkait dengan perkembangan smart system, skema, perangkat dan teknologi yang kami gunakan di perusahaan dalam mendukung terciptanya smart system.</p>
                    <p className="font-bold text-xl my-5">Durasi :</p>
                    <p>Hari Senin sd Jum’at; 2 jam pelajaran per hari; setiap materi terdapat 5 sesi setiap minggunya</p>
                    <p className="font-bold text-xl my-5">Kuota :</p>
                    <p>Tidak terbatas</p>
                    <p className="font-bold text-xl my-5">Biaya :</p>
                    <p>Biaya pengganti sertifikat keikutsertaan workshop Rp.25.000,-/ orang</p>
                    <Link to="https://forms.gle/FGZN4P3oyis8j4SQ8" target="_blank" className="w-1/3 bg-[#607EA6] text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</Link>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-[#607EA6] hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Workshop;