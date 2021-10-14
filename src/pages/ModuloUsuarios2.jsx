import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid';
import { obtenerUsuarios } from '../utils/api';

 /*const UsuariosBackend = [
        {
            
            usuario: "12Mark",
            rol: "Vendedor",
            estado: "Autorizado",
        },
        {
            
            usuario: "2Mark",
            rol: "Vendedor",
            estado: "Autorizado",
        },
        {
            
            usuario: "3Mark",
            rol: "Administrador",
            estado: "Autorizado",
        },
        {
            
            usuario: "284Mark",
            rol: "Vendedor",
            estado: "Autorizado",
        }
    ];*/


const Usuarios = () => {

    //const [usuarios, setUsuarios] = useEffect([]);
    const [usuarios, setUsuarios]= useState([]);

    useEffect(() => {
        //obtener lista desde el front
        obtenerUsuarios(setUsuarios)
    }, []);

    return(
        <div>pagina principal
        <TablaUsuarios listaUsuarios={usuarios}/></div>
    );

    
};

const TablaUsuarios = ({listaUsuarios}) => {
    useEffect(() =>{
        console.log('funcion', listaUsuarios);
    },[listaUsuarios]);
    

    return <div> 
               
       <div className= 'flex flex-col items-center justify-center'>
        <h2 className = 'text-2xl font-extrabold text-gray-800'> Modulo de usuarios y roles</h2>
        <table>
        <thead>
            <tr>
            <th>Usuario</th>
            <th>Rol</th>
            <th>Estado</th>
            <th>Opciones</th>
            </tr>
        </thead>
        <tbody>
            {listaUsuarios.map((usuario) => {
                return <FilaUsuario usuario={usuario}/>
            })}
        </tbody>
        </table>
        </div>
        </div>
};

const FilaUsuario = ({usuario}) => {
    return (
        <tr key={nanoid()}>
            <td>{usuario.usuario}</td>
            <td>{usuario.rol}</td>
            <td>{usuario.estado}</td>
            <td>
            <div className = 'flex w-full justify-around'>
                <a href="editarUsuario2">
                <button title="Editar" type="button" className=" button-gen btn-opcion "> 
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
}



export default Usuarios;