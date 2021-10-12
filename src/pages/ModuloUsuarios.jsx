import logo from '../media/logo.svg';
import '../style/stylesUser.css';
import Layout from '../layouts/layout';


import Pendiente from '../media/Pendiente.svg'
import autorizado from '../media/autorizado.svg'
import no_aut from '../media/no_Autorizado.svg'

function ModuloUsuarios() {
    return (
        <div >

            <h1 className="titlulo">Modulo de Usuarios y Roles</h1>

            <div className="section-table">
                <table className="tabla-usuarios">
                    <thead>
                        <tr>
                            <th className="table-element" scope="col">ID</th>
                            <th className="table-element" scope="col">Usuario</th>
                            <th className="table-element" scope="col">Rol</th>
                            <th className="table-element" scope="col">Estado</th>
                            <th className="table-element" scope="col" colspan="2">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="table-element" scope="row">1</th>
                            <td className="table-element" >Mark</td>
                            <td className="table-element" >Admin</td>
                            <td className="table-element" >
                                <img title="Pendiente" src={Pendiente} alt="imagen" className="icon-eliminar" />
                            </td>
                            <td className="table-element">
                                <a href="editarUsuario">
                                    <button title="Editar" type="button" className=" button-gen btn-opcion">

                                        <i className="fas fa-edit"></i>
                                    </button>
                                </a>
                            </td>
                            <td className="table-element">
                                <a href="eliminarUsuario">
                                    <button title="Eliminar" type="button" className="button-gen btn-opcion">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <th className="table-element" scope="row">2</th>
                            <td className="table-element" >Mark</td>
                            <td className="table-element" >Vendedor</td>
                            <td className="table-element" >
                                <img title="Autorizado" src="./media/autorizado.svg" alt="imagen" className="icon" />
                            </td>
                            <td className="table-element">
                                <button type="button" className="button-gen btn-opcion">
                                    <i className="fas fa-edit"></i>
                                </button>
                            </td>
                            <td className="table-element">
                                <button type="button" className="button-gen btn-opcion">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <th className="table-element" scope="row">3</th>
                            <td className="table-element" >Mark</td>
                            <td className="table-element" >Usuario</td>
                            <td className="table-element" >
                                <img title="Pendiente" src="./media/pendiente.svg" alt="imagen" className="icon" />
                            </td>
                            <td className="table-element">
                                <button type="button" className="button-gen btn-opcion">
                                    <i className="fas fa-edit"></i>
                                </button>
                            </td>
                            <td className="table-element">
                                <button type="button" className="button-gen btn-opcion">
                                    <i className="fas fa-trash-alt"></i>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ModuloUsuarios;
