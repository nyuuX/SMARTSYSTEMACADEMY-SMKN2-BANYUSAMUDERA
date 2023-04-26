import { useEffect, useState } from "react";
import Adminnav from "./adminnav";
import Axios from "axios";

const Adminws = () => {

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        Axios.get("http://localhost:3001/getws").then((response) => {
            setDataList(response.data);
        })
    }, [])

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
            <h1 className="text-center text-2xl mb-20">Workshop Data</h1>
            <div className="shadow overflow-hidden rounded border-b border-gray-200">
            <table className="min-w-full bg-white">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/4">Name</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/4">Email</th>
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/4">Instansi</th>                        
                        <th className="text-left py-3 px-4 uppercase font-semibold text-sm w-1/4">Phone</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700 ">
                        {dataList.map((user, key) => 
                            <tr key={key} className="text-center">
                                <td className="text-left py-3 px-4">{user.fullName}</td>                             
                                <td className="text-left py-3 px-4">{user.email}</td>
                                <td className="text-left py-3 px-4">{user.instansi}</td>
                                <td className="text-left py-3 px-4">{user.phone}</td>
                                
                            </tr>

                        )}
                    </tbody>
                </table>
            </div>
        </div>
        </>
     );
}
 
export default Adminws;