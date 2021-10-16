import '../style/MainStyles.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    return (
        <>
            {/* < !--Sección del Sidebar-- > */}
            <div class="menu_sidebar" id="menu_sidebar">

                <section class="menu_principal">
                    <i class="fab fa-buromobelexperte"></i>
                    <h3> Muebles Wood-Art </h3>
                </section>

                <section class="opciones_menu">

                    <a href="#" class="seleccionado">
                        <div class="opcion">
                            <i class="fas fa-home" title="Inicio"></i>
                            <h4> Menú Principal </h4>
                        </div>
                    </a>
                    <Link to ={'/productos'}>
                        <div class="opcion">
                            <i class="fas fa-couch" title="Administrar productos"></i>
                            <h4> Administrar productos </h4>
                        </div>
                    </Link>
                    {/*<a href="#">
                        <div class="opcion">
                            <i class="fas fa-couch" title="Registrar Productos"></i>
                            <h4> Registrar Productos </h4>
                        </div>
                    </a>
                    <a href="Productos_Maestro.html">
                        <div class="opcion">
                            <i class="fas fa-luggage-cart" title="Gestionar Productos"></i>
                            <h4> Gestionar Productos </h4>
                        </div>
                    </a>*/}
                    <a href="#">
                        <div class="opcion">
                            <i class="fas fa-shopping-cart" title="Registrar Venta"></i>
                            <h4> Registrar Venta </h4>
                        </div>
                    </a>
                    <a href="#">
                        <div class="opcion">
                            <i class="fas fa-clipboard-list" title="Gestionar Venta"></i>
                            <h4> Gestionar Venta </h4>
                        </div>
                    </a>
                    <a href="#">
                        <div class="opcion">
                            <i class="fas fa-id-card" title="Administrar Usuarios"></i>
                            <h4> Administrar Usuarios </h4>
                        </div>
                    </a>
                    <a href="/Login_Module.html">
                        <div class="opcion">
                            <i class="fas fa-door-open" title="Salir"></i>
                            <h4> Salir </h4>
                        </div>
                    </a>
                </section>
            </div>

        </>

    );

}

export default Sidebar;