import '../style/ZEstilos_Login.css';

import logo from '../media/logo.svg'

const Header = () => {
    return(
      <header className="header ">
     
      <div>
  
        <div className="nameCompany">
          <img src={logo} alt="imagen" className="Logo text" /> Compañía de manufactura
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