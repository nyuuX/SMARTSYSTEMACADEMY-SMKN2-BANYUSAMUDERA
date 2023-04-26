import Footer from "../../layout/footer";
import Navbar from "../../layout/nav";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import lay4 from '../../assets/layanan4.jpg'


const Training = () => {
    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">PROGRAM KAMI</h2>
        </div>
        <div className="w-full px-32 py-20 h-auto flex flex-col gap-20">
            <h2 className="text-5xl text-center mb-20">Training Bersertifikat</h2>
            <div className="flex sm:flex-col xl:flex-row w-full gap-16"> 
                <img src={lay4} alt="" className="w-[500px] h-[400px]"/>
                <div className="flex flex-col capitalize">
                    <p className="font-bold text-xl mb-5">Syarat Mengikuti :</p>
                    <p>a.	Semua peserta sekolah kejuruan maupun umum</p>
                    <p>b.	Tertarik belajar pada IT developer (web, mobile, IoT, 3D Modelling)</p>
                    <p>c.	Melakukan pendaftaran</p>
                    <p>d.	d.	Membayar biaya pengganti sertifikat pelatihan</p>
                    <p className="font-bold text-xl my-5">Materi :</p>
                    <p className="font-semibold pb-2">a.	Web developer</p>
                        <p className="py-1">a.	Dasar HTML (Pengenalan CSS, Pengenalan Responsif Web)</p>
                        <p className="py-1">b.	JavaScript (dasar, tipe data, Javascript VueJS, Komponen Boostrap, module VueJS)</p>
                        <p className="py-1">c.	Framework “Vue JS”(GitHub, HTML, CSS, Javascript VueJS, Vue Landing Page)</p>
                        <p className="py-1">d.	RMQ (Mongo DB, RMQ service untuk NodeJS, worker/ API/ service dgn NodeJS)</p>
                    <p className="font-semibold py-2">b.	Mobile developer</p>
                        <p className="py-1">a.	Dart (Pengenalan, Basic Programing Dart I, Basic Programing Dart II, Penerapan konsep OOP didalam dart)</p>
                        <p className="py-1">b.	Flutter 1(Getting Started Flutter, Basic Programing Flutter I (Widget Flutter), Beautiful design widget with Flutter)</p>
                        <p className="py-1">c.	Flutter 2 (Version Controll, Package in Flutter, Fetch Data From Internet, Processing Data From Internet, Create Rest full API aplication with Flutter)</p>
                        <p className="py-1">d.	Flutter 3 (IoT Device to Flutter Application I, IoT Device to Flutter Application II, IoT Device to Flutter Application III, IoT Device to Flutter Application III, Create IoT Application)</p>
                        <p className="py-1">e.	Flutter 4 (Take Picture and Location, File Upload, Scan Barcode, Store Data to Local Storage, Create Self Record Activity)</p>
                        <p className="py-1">f.	Flutter 4 (Different 'State' dan 'State Management', Understanding MVVM Architecture, Understanding Notify Listener, Stack and Get It, Create Full Flutter Application With Architecture, Create Presence Application)</p>
                    <p className="font-semibold py-2">c.	Internet of Things (IoT)</p>
                        <p className="py-1">a.	Pengantar Smart System I (Komponen Elektronika dan Cara Membaca Komponen, Simbol Komponen Elektronika, Alat Ukur Elektronika, Penyolderan, Pengenalan Listrik dan Teknik Digital, Mikroprosesor dan Mikrokontroler, Instalasi Arduino, Program Sensor, Aktuator, dan Serial, Pengenalan Perangkat IoT, Pengenalan RMQ)</p>
                        <p className="py-1">b.	Pengantar IoT I(Overview Layanan berbasis IoT , Smart Watering Instalasi dan setting Arduino , Koneksi ke RMQ Server dan Use Case Smart Watering )</p>
                        <p className="py-1">c.	Pengantar IoT II (Pengenalan Git Hub dan Pengenalan Aplikasi Mobile , Pengenalan RMQ Server , Pompa Otomatis dan Instalasi , Dasar IoT Worker )</p>
                        <p className="py-1">d.	IoT (Arsitektur Komputasi & Proses bisnis model untuk IoT , lan teknologi RFID & Instalasi )</p>
                    <p className="font-semibold py-2">d.	3D Modelling</p>
                        <p className="py-1">a.	Pengenalan 3D Modeling</p>
                        <p className="py-1">b.	Project 3D Modelling</p>
                        <p className="py-1">c.	Tutorial Dasar Unity</p>
                    <p className="font-bold text-xl my-5">Durasi :</p>
                    <p>Hari Senin sd Jum’at; 2 jam pelajaran per hari</p>
                    <p className="font-bold text-xl my-5">Kuota :</p>
                    <p>Tidak terbatas</p>
                    <p className="font-bold text-xl my-5">Biaya :</p>
                    <p>Biaya pengganti sertifikat Rp.200.000,- – Rp.500.000,- (tergantung materi yg diambil, termasuk pengujian untuk penilaian)</p>
                    <Link to="https://forms.gle/uLVeb84hwkKNGcLQ8" target="_blank" className="w-1/3 bg-[#607EA6] text-white text-center mt-10 h-9 flex flex-col justify-center items-center rounded-sm">Daftar Sekarang</Link>
                    <Link to="/layanan" className="flex items-center mb-10 gap-2 hover:text-[#607EA6] hover:pl-2 transition-all text-lg mt-10"><IoArrowBack/>Kembali</Link>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Training;