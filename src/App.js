import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Tentang from './page/tentang';
import Layanan from './page/layanan';
import Startup from './page/artikel/artikel-startup';
import Acara from './page/acara';
import Kontak from './page/kontak';
import Workshop from './page/artikel/artikel-ws';
import Test from './page/test';
import Pkl from './page/artikel/artikel-pkl';
import Training from './page/artikel/artikel-training';
import Event from './page/admin/event';
import Tambahevent from './page/admin/tambahevent';
import Login from './page/admin/login';

import Formpkl from './page/form/formpkl';
import Formtraining from './page/form/formtraining';
import Formstartup from './page/form/formstartup';
import Formws from './page/form/formws';

import Adminpkl from './page/admin/adminpkl';
import Adminws from './page/admin/adminws';
import Adminstartup from './page/admin/adminstartup';
import Admintraining from './page/admin/admintraining';
import GuruIndustri from './page/artikel/artikel-guru';
import UjiKompetensi from './page/artikel/artikel-ujikompetensi';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/tentang' element={<Tentang />}/>
      <Route path='/layanan' element={<Layanan />}/>
      <Route path='/startup' element={<Startup />}/>
      <Route path='/workshop' element={<Workshop />}/>
      <Route path='/praktek-kerja-lapangan' element={<Pkl />}/>
      <Route path='/training' element={<Training />}/>
      <Route path='/acara' element={<Acara />}/>
      <Route path='/kontak' element={<Kontak />}/>
      <Route path='/test' element={<Test />}/>    
      <Route path='/event' element={<Event />}/>
      <Route path='/tambah-event' element={<Tambahevent />}/>      
      <Route path='/login' element={<Login />}/>
      <Route path='/guru-industri' element={<GuruIndustri />}/>
      <Route path='/uji-kompetensi' element={<UjiKompetensi />}/>

      <Route path='/formpkl' element={<Formpkl />}/>
      <Route path='/formtraining' element={<Formtraining />}/>
      <Route path='/formstartup' element={<Formstartup />}/>
      <Route path='/formworkshop' element={<Formws />}/>

      <Route path='/admin-pkl' element={<Adminpkl />}/>
      <Route path='/admin-ws' element={<Adminws />}/>
      <Route path='/admin-startup' element={<Adminstartup />}/>
      <Route path='/admin-training' element={<Admintraining />}/>

    </Routes>
  );
}

export default App;
