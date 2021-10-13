import { useState } from 'react';
import { useForm } from 'react-hook-form';
import '../style/stylesUser.css';
import usuario from './ModuloUsuarios2';
import ModuloUsuariosBackend from './ModuloUsuarios2';

const EditarUsuario = () => {
  
    const [usuarioActual, setUsuarioActual] = useState({
        ID: '', Usuario: '', Rol: ' ', Estado: '' 
    });
    
    const editRow = (usuario) => {
        setUsuarioActual({
            ID: usuario.id, 
            Usuario: usuario.Usuario, 
            Rol: usuario.Rol,
            Estado: usuario.Estado
        })
    };

    const {resgiter} = useForm({
        defaultValues: usuarioActual
    });

    return (
        <>

            <h2 className="titulo">Editar - Modulo de Usuarios y Roles</h2>
            <div className="section-edit">
                <form className="form-edit" usuarioActual ={usuarioActual} >
                    <label>
                        <i className="fas fa-id-card"></i>
                        ID
                        <input className="input-edit" type="text" name="ID"
                        ref={({
                            required: {value: true, message: 'Campo requerido'}}
                        )}/>
                    </label>

                    <label>
                        <i className="fas fa-user-tie"></i>
                        Usuario
                        <input className="input-edit" type="text"  name= "Usuario"/>
                    </label>
                    <label>
                        <i className="fas fa-briefcase"></i>
                        Rol
                        <select className="input-edit" name= "Rol">
                            <option>Vendedor</option>
                            <option>Administrador</option>
                        </select>
                    </label>
                    <label>
                        <i className="fas fa-unlock-alt" name= "Estado"></i>
                        Estado
                        <select className="input-edit">
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>
                    </label>
                    <button className="button-gen btn-submit-edit" type="submit">
                        <i className="fas fa-save"></i>
                        Guardar
                    </button>
                </form>
            </div>

      </>
    );

}



export default EditarUsuario;
