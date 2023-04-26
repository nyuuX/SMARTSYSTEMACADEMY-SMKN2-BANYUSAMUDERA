import Footer from "../../layout/footer"
import Navbar from "../../layout/nav"
import React, { useState, useEffect } from 'react';
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";
import Axios from "axios";

export default function Formstartup() {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [instansi, setInstansi] = useState("");
    const [phone, setPhone] = useState(0);

    const Submit = () => {
        Axios.post("http://localhost:3001/insertdatastartup", { 
            fullName: fullName, 
            email: email, 
            instansi: instansi, 
            phone: phone
        });
    };

    return ( 
        <>
        <Navbar/>
        <div className="bg-banner3 h-[500px] bg-fixed bg-cover bg-center flex flex-col justify-center items-center text-white ">
            <h2 className="text-5xl">Startup</h2>
        </div>
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center py-20 gap-8">
                <h1 className="text-4xl text-center w-1/2 ">Jangan ragu untuk mengontak kami</h1>
                <h2 className="text-2xl text-center w-1/2 text-gray-700">Daftar Segera</h2>
            </div>
            <div className="w-1/2">
                <Link to="/startup" className="flex items-center mb-10 gap-2 hover:text-pink-500 hover:pl-2 transition-all text-lg"><IoArrowBack/>Kembali</Link>
                <div className="flex flex-col gap-4">
                <div className="w-full flex flex-col">
                    <span>Nama Lengkap</span>
                    <input type="text" className="w-full border-b border-black outline-none focus:border-pink-600 transition h-10"
                    onChange={(event) => {
                        setFullName(event.target.value);
                    }}
                    />
                </div>
                <div className="w-full flex flex-col">
                        <span>Alamat Email*</span>
                        <input type="email" className="border-b border-black outline-none focus:border-pink-600 transition h-10"
                        onChange={(event) => {
                            setEmail(event.target.value);
                        }}
                        />
                </div>
                <div className="w-full flex flex-col">
                        <span>Asal Sekolah / Perusahaan</span>
                        <input type="text" className="border-b border-black outline-none focus:border-pink-600 transition h-10"
                        onChange={(event) => {
                            setInstansi(event.target.value);
                        }}
                        />
                </div>
                <div className="w-full flex flex-col">
                        <span>Nomor Handphone</span>
                        <input type="number" className="border-b border-black outline-none focus:border-pink-600 transition h-10"
                        onChange={(event) => {
                            setPhone(event.target.value);
                        }}
                        />
                </div>
                <button required className="w-1/3 bg-pink-700 text-white text-center mt-4 h-10 flex flex-col justify-center items-center"
                onClick={Submit}
                >Daftar</button>
                </div>
            </div>
        </div>
        <Footer/>
        </>
     );
}
