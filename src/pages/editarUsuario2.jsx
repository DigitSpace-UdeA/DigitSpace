import { useState } from 'react';
import '../style/stylesUser.css';
import listaModuloUsuarios from './ModuloUsuarios2';
import ModuloUsuariosBackend from './ModuloUsuarios2';

const EditarUsuario = () => {
  
    
    return (
        <>

            <h2 className="titulo">Editar - Modulo de Usuarios y Roles</h2>
            <div className="section-edit">
                <form action="" className="form-edit">
                    <label>
                        <i className="fas fa-id-card"></i>
                        ID
                        <input className="input-edit" type="text" value="2" id="id-user" readonly="readonly" name= "ID"/>
                    </label>
                    <label>
                        <i className="fas fa-user-tie"></i>
                        Usuario
                        <input className="input-edit" type="text" value="Mark" id="Name-user" readonly="readonly" name= "Usuario"/>
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
