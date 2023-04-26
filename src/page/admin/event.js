import Adminnav from "./adminnav";
import { useEffect, useState } from "react";

const Event = () => {

    useEffect(() => {
        const token = localStorage.getItem("token");
    
        if (!token) {
          window.location.href = "http://localhost:3000/login";
        }
      }, []);

    return ( 
        <>
            
            <div className="md:px-32 py-8 w-full">
            <Adminnav/>
                <h1 className="text-center text-2xl mb-20">LIST DATA EVENT</h1>
                <div className="shadow overflow-hidden rounded border-b border-gray-200 mb-10">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Nama Event</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Jenis</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Deskripsi</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Kuota</th>
                            <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/5">Gambar</th>
                            </tr>
                        </thead>
                    </table>
                   
                </div>
                <a href="/tambah-event" className="border p-2 rounded-lg bg-gray-800 text-white">Tambah Event</a>
            </div>  
        </>
     );
}
 
export default Event;