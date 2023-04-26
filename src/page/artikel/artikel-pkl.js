import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay3 from '../../assets/lay3.jpg'


const Pkl = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">PKL / Magang</h2>
            <div className="flex sm:flex-col xl:flex-row w-full gap-16"> 
                <img src={lay3} alt="" className="w-[500px] h-[400px]"/>
                <div className="flex flex-col capitalize">
                    <p className="font-bold text-xl mb-5">Syarat Mengikuti :</p>
                    <p>a.	Calon peserta merupakan siswa/i aktif sekolah</p>
                    <p>b.	Melakukan pendaftaran</p>
                    <p>c.	Menyerahkan surat permohonan</p>
                    <p>d.	Membayar biaya pengganti sertifikat</p>
                    <p className="font-bold text-xl my-5">Materi dan Tugas :</p>
                    <p>a.	Pengenalan smart system</p>
                    <p>b.	Pengenalan Topologi system teknologi IoT Perusahaan</p>
                    <p>c.	Pengenalan Tools Teknologi Perusahaan</p>
                    <p>d.	Project Base Learning</p>
                    <p className="font-bold text-xl my-5">Durasi :</p>
                    <p>Dilakukan minimal 3 bulan dan maksimal 6 bulan</p>
                    <p className="font-bold text-xl my-5">Kuota :</p>
                    <p>a.	Offline, maksimal 4 siswa dari kompetensi keahlian setiap sekolah dan maksimal 5 sekolah tiap semester</p>
                    <p>b.	Online tidak dibatasi</p>
                    <p className="font-bold text-xl my-5">Biaya :</p>
                    <p>Biaya pengganti Sertifikat Praktek Kerja Lapangan Rp. 50.000,-/ orang</p>
                    <Link to="https://forms.gle/9gspUct4VyvGvTiH9" target="_blank" className="w-1/3 bg-[#607EA6] text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</Link>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-[#607EA6] hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Pkl;