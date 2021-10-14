import '../style/stylesUser.css';
import React, { useEffect, useState } from 'react'
import Pendiente from '../media/Pendiente.svg'
import autorizado from '../media/autorizado.svg'
import no_aut from '../media/no_Autorizado.svg'
import { nanoid } from 'nanoid';
import editRow from './editarUsuario2';
import axios, { Axios } from 'axios';
import {obtenerUsuarios} from '../utils/api'

const ModuloUsuarios = () => {

  


    const ModuloUsuariosBackend = [
        {
            
            usuario: "Mark",
            rol: "Vendedor",
            estado: "Autorizado",
        },
        {
            
            usuario: "Mark",
            rol: "Vendedor",
            estado: "Autorizado",
        },
        {
            
            usuario: "Mark",
            rol: "Administrador",
            estado: "Autorizado",
        }
    ];

    const [listaModuloUsuarios, setlistaModuloUsuarios]= useState([]);

    useEffect(() => {
        //obtener lista desde el front
        setlistaModuloUsuarios(ModuloUsuariosBackend)
    }, []);

   
    useEffect(() => {
        // traer informacion de bk. Obtener lista de usuarios. variable vacia se ejecuta la primera vez del render
        //AXIOS
        obtenerUsuarios(setlistaModuloUsuarios)

    }, [])


    const tablaUsuarios = () => {
        return(

            
    <div className= 'flex flex-col items-center justify-center'>
    <h2 className = 'text-2xl font-extrabold text-gray-800'> Modulo de usuarios y roles</h2>
    <table editRow = {editRow}>
    <thead>
        <tr>
        
        <th>Usuario</th>
        <th>Rol</th>
        <th>Estado</th>
        <th>Opciones</th>
        </tr>
    </thead>
    <tbody>
        {listaModuloUsuarios.map((Usuario) => {
            return (
                <tr key={nanoid()}>
                
                <td>{Usuario.usuario}</td>
                <td>{Usuario.rol}</td>
                <td>{Usuario.estado}</td>
                <td>
                <div className = 'flex w-full justify-around'>
                    <a href="editarUsuario2">
                    <button title="Editar" type="button" className=" button-gen btn-opcion " 
                    onClick={
                        () => {editRow (Usuario)}
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
    
    return (
        tablaUsuarios()

          
)};

export default ModuloUsuarios;


