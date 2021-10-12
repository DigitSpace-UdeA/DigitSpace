import '../style/stylesUser.css';
import Pendiente from '../media/Pendiente.svg'
import autorizado from '../media/autorizado.svg'
import no_aut from '../media/no_Autorizado.svg'

const ModuloUsuarios = () => {
  //return (

    const TablaUsuarios = () =>{
    <div className= 'flex flex-col items-center justify-center'>
        <h2 className = 'text-2xl font-extrabold text-gray-800'> Modulo de usuarios y roles</h2>
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Usuario</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Opciones</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Vendedor</td>
                    <td>Autorizado</td>
                    <tr><div className = 'flex'>
                    <td><a href="editarUsuario">
                        <button title="Editar" type="button" className=" button-gen btn-opcion">
                        <i className="fas fa-edit"></i>
                        </button></a></td> 
                    <td><a href="eliminarUsuario">
                        <button title="Eliminar" type="button" className="button-gen btn-opcion">
                        <i className="fas fa-trash-alt"></i>
                        </button>
                    </a></td></div></tr>
                </tr>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Vendedor</td>
                    <td>Autorizado</td>
                    <tr><div className = 'flex'>
                    <td><a href="editarUsuario">
                        <button title="Editar" type="button" className=" button-gen btn-opcion">
                        <i className="fas fa-edit"></i>
                        </button></a></td> 
                    <td><a href="eliminarUsuario">
                        <button title="Eliminar" type="button" className="button-gen btn-opcion">
                        <i className="fas fa-trash-alt"></i>
                        </button>
                    </a></td></div></tr>
                </tr>
            </tbody>
        </table>
    </div>
    };



    




};

export default ModuloUsuarios;
