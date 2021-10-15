import React from 'react';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import '../style/stylesUser.css';
import  EnvioDatos from './ModuloUsuarios2';
    
/*
FilaUsuario = usuarioTabla;

const usuarioTabla = [
    {
        usuario: usuario.usuario,
        rol: usuario.rol,
        estado: usuario.estado
    }
]
*/

const FormEdit = ({usuario}) =>{
        
    /*const [editFila, setEditFila]= useState([]);

    useEffect(() => {
        //obtener lista desde el front
        FilaUsuario(setEditFila)
    }, []);*/


  //  const [edit, setEdit] = useState([FilaUsuario]);   

    return (
         
        
        <div>
            <h2 className="titulo">Editar - Modulo de Usuarios y Roles</h2>
            <div className="section-edit">
                <form className="form-edit" >
              
                    <label><i className="fas fa-user-tie"></i>
                        Usuario
                        <input className="input-edit" type="text"  name= "Usuario" />
                    </label>
                    <label><i className="fas fa-briefcase"></i>
                        Rol
                        <select className="input-edit" name= "Rol" >
                            <option>Vendedor</option>
                            <option>Administrador</option>
                        </select></label>
                    <label><i className="fas fa-unlock-alt" ></i>
                        Estado
                        <select className="input-edit" >
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

        </div> 
    )}

const EditarUsuario = () => {
    //const [editarUsuario, setEditarUsuario]= useEffect([]);

    //useEffect(() => {
        //obtener lista desde el front
      //  setEditarUsuario(usuarioTabla)
    //}, []);
    
   // return( <FormEdit usuarioActual={usuarioActual}/>);

   return ( <FormEdit/>)


}



export default EditarUsuario;
