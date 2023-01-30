import { FaCalendarCheck } from 'react-icons/fa';
import { BsFillCameraReelsFill } from 'react-icons/bs';
import Logo from '../Img/logo.png'
import { Link } from "react-router-dom";
import "./Header.css" 

function BarraNav() {
  return (
    <div className='Header_NV'>
      <div className='box_Logo' >
        <section >
        <img className='Logo'src={Logo} alt="../img/logo.png"/>
        </section>
      </div>
      <div className='Box_BarraNV'>
        <Link to="/">
          <button className='btn_mv'>
            <span> Peliculas </span>
          </button>
        </Link>
        <Link to="/Categoria">
          <button className='btn_mv'>
            <span> Series  </span> 
          </button>
        </Link>
      </div>
        <div className='box_Carrito'>
          <FaCalendarCheck cursor={"pointer"} fontSize={"35px"} />
          <div className='Carrito' id="carrito">
        </div>
      </div>

    </div>
  )
}

export default BarraNav