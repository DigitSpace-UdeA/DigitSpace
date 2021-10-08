import '../style/MainStyles.css';

const Header = () => {
    return(
      <header className="header">
      <div className="icono_menu">
        <i className="fas fa-bars" id="boton_abrir"></i>
      </div>
      <div>
  
        <div className="nameCompany">
          <img src="./media/logo.svg" alt="imagen" className="Logo text" /> Compañía de manufactura
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