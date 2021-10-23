import '../style/Main.css';
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from 'react';

const Sidebar = () => {
    const { user, logout } = useAuth0();

    useEffect (()=>{
        console.log('usuario',user)
    })

    const cerrarSesion= () => {
        logout({ returnTo: window.location.origin })
        localStorage.setItem('token', null);
    };


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

                    <a href="Main" className="seleccionado">
                        <div className="opcion" usuario={user}>
                            <i className="fas fa-home text-xl" title="Inicio"></i>
                            <h4> Menú Principal </h4>
                        </div>
                    </a>
                    <Link to ={'/productos'}>
                        <div className="opcion" usuario={user}>
                            <i className="fas fa-couch text-xl" title="Administrar productos"></i>
                            <h4> Administrar productos </h4>
                        </div>
                    </Link>
                    <Link to ={'/Ventas'}>
                        <div className="opcion">
                            <i className="fas fa-shopping-cart text-xl" title="Registrar Venta"></i>
                            <h4> Registrar Venta </h4>
                        </div>
                    </Link>
                    <Link to ={'/ModuloUsuarios'}>
                        <div className="opcion " usuario={user}>
                            <i className="fas fa-users-cog text-xl" title="Administrar Usuarios" ></i>
                            <h4> Administrar usuarios </h4>
                        </div>
                    </Link>
                         <button onClick={() => cerrarSesion()} className="opcion">
                            <i className="fas fa-door-open text-xl" title="Cerrar sesión"></i>
                            <h4> Cerrar sesión </h4>
                        </button>
                </section>
            </div>

        </>

    );

};

// const Ruta = ({icono, ruta, nombre, usuario}) => {

//     console.log('usuario', usuario)


// }

export default Sidebar;