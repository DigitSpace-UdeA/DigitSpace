import '../style/stylesUser.css';
import React, { useEffect, useState } from 'react'
import Pendiente from '../media/Pendiente.svg'
import autorizado from '../media/autorizado.svg'
import no_aut from '../media/no_Autorizado.svg'
import { nanoid } from 'nanoid';
import editRow from './editarUsuario2';



const ModuloUsuarios = () => {

    const ModuloUsuariosBackend = [
        {
            ID: 1,
            Usuario: "Mark",
            Rol: "Vendedor",
            Estado: "Autorizado",
        },
        {
            ID: 2,
            Usuario: "Mark",
            Rol: "Vendedor",
            Estado: "Autorizado",
        },
        {
            ID: 3,
            Usuario: "Mark",
            Rol: "Administrador",
            Estado: "Autorizado",
        }
    ];

    const [listaModuloUsuarios, setlistaModuloUsuarios]= useState([]);
    useEffect(() => {
        //obtener lista desde el front
        setlistaModuloUsuarios(ModuloUsuariosBackend)
    }, []);

   
    
    return (


    <div className= 'flex flex-col items-center justify-center'>
        <h2 className = 'text-2xl font-extrabold text-gray-800'> Modulo de ModuloUsuarios y roles</h2>
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
            {listaModuloUsuarios.map((usuario) => {
                return (
                    <tr key={nanoid()}>
                    <td>{usuario.ID}</td>
                    <td>{usuario.Usuario}</td>
                    <td>{usuario.Rol}</td>
                    <td>{usuario.Estado}</td>
                    <td>
                    <div className = 'flex w-full justify-around'>
                        <a href="editarUsuario2">
                        <button title="Editar" type="button" className=" button-gen btn-opcion " onClick={
                            () => {editRow (usuario)}
                        } >
                        <i className="fas fa-edit"></i>
                        </button></a>
                        <a href="eliminarUsuario">
                        <button title="Eliminar" type="button" className="button-gen btn-opcion">
                        <i className="fas fa-trash-alt"></i>
                        </button></a>
                    </div>
                    </td> 
                    </tr>
                )
            })}
        </tbody>
        </table>
    </div>
          
)};



export default ModuloUsuarios;


