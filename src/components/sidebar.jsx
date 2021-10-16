import '../style/MainStyles.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
            {/* < !--Sección del Sidebar-- > */}
            <div className="menu_sidebar" id="menu_sidebar">


                <section className="text-center mt-14 ml-3"> Menú </section>
              {/* <section className="menu_principal">
                    <i className="fab fa-buromobelexperte text-xl"></i>
                    <h3> Muebles Wood-Art </h3>
                </section>*/}

                <section className="opciones_menu">

                    <a href="#" className="seleccionado">
                        <div className="opcion">
                            <i className="fas fa-home text-xl" title="Inicio"></i>
                            <h4> Menú Principal </h4>
                        </div>
                    </a>
                    <Link to ={'/productos'}>
                        <div className="opcion">
                            <i className="fas fa-couch text-xl" title="Administrar productos"></i>
                            <h4> Administrar productos </h4>
                        </div>
                    </Link>
                    <a href="#">
                        <div className="opcion">
                            <i className="fas fa-shopping-cart text-xl" title="Registrar Venta"></i>
                            <h4> Registrar Venta </h4>
                        </div>
                    </a>
                    <a href="#">
                        <div className="opcion">
                            <i className="fas fa-clipboard-list text-xl" title="Gestionar Venta"></i>
                            <h4> Gestionar Venta </h4>
                        </div>
                    </a>
                    <Link to ={'/ModuloUsuarios'}>
                        <div className="opcion">
                            <i className="fas fa-users-cog text-xl" title="Administrar Usuarios"></i>
                            <h4> Administrar productos </h4>
                        </div>
                    </Link>
                    <a href="/Login_Module.html">
                        <div className="opcion">
                            <i className="fas fa-door-open text-xl" title="Salir"></i>
                            <h4> Salir </h4>
                        </div>
                    </a>
                </section>
            </div>

        </>

    );

}

export default Sidebar;