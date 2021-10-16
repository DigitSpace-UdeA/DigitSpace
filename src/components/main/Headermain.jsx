import '../style/Main.css';

import logo from '../media/logo.svg'

const Header = () => {
    return(
      <header className="header sticky top-0">
      <div className="icono_menu">
        <i className="fas fa-bars" id="boton_abrir"></i>
      </div>
      
  
      <div className = "flex">
  
        <div className="flex flex-auto ">
          <img src={logo} alt="imagen" className="Logo text" /> 
          <div className="text-2xl text-center pt-4 pl-4 text-white"><h4>Compañía de manufactura</h4></div>
        </div>
  
        <nav>
          <div className="aling">
            <a>Quiénes somos <i className="fas fa-users colorIcon"></i></a>
            <a>Contáctenos <i className="far fa-envelope colorIcon"></i></a>
          </div>
        </nav>
      </div>
    </header>
    );
  }

  export default Header;