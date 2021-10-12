import '../style/MainStyles.css';

const Sidebar = () => {

    return (
        <>
            {/* < !--Sección del Sidebar-- > */}
            <div className="menu_sidebar" id="menu_sidebar">

                <section className="menu_principal">
                    <i className="fab fa-buromobelexperte"></i>
                    <h3> Muebles Wood-Art </h3>
                </section>

                <section className="opciones_menu">

                    <a href="#" className="seleccionado">
                        <div className="opcion">
                            <i className="fas fa-home" title="Inicio"></i>
                            <h4> Menú Principal </h4>
                        </div>
                    </a>
                    <a href="#">
                        <div className="opcion">
                            <i className="fas fa-couch" title="Registrar Productos"></i>
                            <h4> Registrar Productos </h4>
                        </div>
                    </a>
                    <a href="Productos_Maestro.html">
                        <div className="opcion">
                            <i className="fas fa-luggage-cart" title="Gestionar Productos"></i>
                            <h4> Gestionar Productos </h4>
                        </div>
                    </a>
                    <a href="#">
                        <div className="opcion">
                            <i className="fas fa-shopping-cart" title="Registrar Venta"></i>
                            <h4> Registrar Venta </h4>
                        </div>
                    </a>
                    <a href="#">
                        <div className="opcion">
                            <i className="fas fa-clipboard-list" title="Gestionar Venta"></i>
                            <h4> Gestionar Venta </h4>
                        </div>
                    </a>
                    <a href="#">
                        <div className="opcion">
                            <i className="fas fa-id-card" title="Administrar Usuarios"></i>
                            <h4> Administrar Usuarios </h4>
                        </div>
                    </a>
                    <a href="/Login_Module.html">
                        <div className="opcion">
                            <i className="fas fa-door-open" title="Salir"></i>
                            <h4> Salir </h4>
                        </div>
                    </a>
                </section>
            </div>

        </>

    );

}

export default Sidebar;