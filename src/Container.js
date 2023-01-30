import BarraNav from './Componets/BarraNav/BarraNav';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Categoria from "./Componets/SectioCategoria/Categoria";
import Pelicula from './Componets/Home/Pelicula';
function Container() {
  return (
    <div className="Container">
      < BrowserRouter>
        <BarraNav />
        <Routes>
          <Route path='/' element={<Pelicula/>}/>
          <Route path="/Categoria" element={<Categoria />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Container;
