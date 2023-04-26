import React, { useState } from 'react';
import axios, { Axios } from "axios";
import Swal from "sweetalert2";

    const Tambahevent = () => {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:80/binari/kontak/user/save', inputs);
        console.log(inputs);
        
        Swal.fire({  
            title: 'Berhasil',  
            text: 'Pesan Terkirim',
            icon: 'success',
            timer: 1000,
        }); 
    }

    return ( 
        <>
        <div className="w-full flex flex-col items-center">
            <div className="w-full flex flex-col justify-center items-center py-20 gap-8">
                <h1 className="text-4xl text-center w-1/2 ">Tambah Event</h1>
            </div>
            <div className="w-1/2">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="w-full flex flex-col">
                        <span>Nama Event</span>
                        <input required onChange={handleChange} name="name" type="text" className="w-full border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                    </div>
                <div className="w-full flex flex-col">
                        <span>Jenis Event</span>
                        <input required onChange={handleChange} name="phone" type="text" className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Deskripsi</span>
                        <input required onChange={handleChange} name="email" type="email" className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Kuota</span>
                        <input required onChange={handleChange} name="email" type="number" className="border-b border-black outline-none focus:border-pink-600 transition h-10"/>
                </div>
                <div className="w-full flex flex-col">
                        <span>Gambar Event</span>
                        <input type="file" />
                        <button className="w-1/3 bg-pink-600 text-white text-center mt-4 h-10 flex flex-col justify-center items-center">KIRIM PESAN</button>
                </div>
                </form>
                
            </div>
        </div>
        </>
     );
}
 
export default Tambahevent;