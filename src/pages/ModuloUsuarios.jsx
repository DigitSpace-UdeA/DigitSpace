import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from "axios";


import '../style/stylesUser.css';


import Pendiente from '../media/Pendiente.svg'
import autorizado from '../media/autorizado.svg'
import no_aut from '../media/no_Autorizado.svg'
import { Link } from 'react-router-dom';
import { nanoid } from 'nanoid';

const ModuloUsuarios = ({ listaUsuarios }) => {

    const usuariosBD = [
        {
            nombre: "Juan",
            rol: "Admin",
            estado: "No Auth"
        },
        {
            nombre: "Pepito",
            rol: "Vendedor",
            estado: "Auth"
        },
        {
            nombre: "Poter",
            rol: "Vendedor",
            estado: "Pendiente"
        }
    ]

    // Estado
    const [usuarios, setUsuarios] = useState([])

    /* const [estado, setEstado] = useState("") */

    //Effect, estar pendiente de una variable y ejecutar acciones cuando esta cambie
    useEffect(() => {
        // traer informacion de bk. Obtener lista de usuarios. variable vacia se ejecuta la primera vez del render
        setUsuarios(usuariosBD)
    }, [])

    listaUsuarios = usuarios;


    ///****** Para las rutas activas

    const location = useLocation();
    useEffect(() => {
        console.log(location)
    }, [location]);

    return (
        <div >
            <h1 className="titlulo">Modulo de Usuarios y Roles</h1>
            <div className="section-table">
                <table className="tabla-usuarios">
                    <thead>
                        <tr>
                            {/* <th className="table-element" scope="col">ID</th> */}
                            <th className="table-element" scope="col">Usuario</th>
                            <th className="table-element" scope="col">Rol</th>
                            <th className="table-element" scope="col">Estado</th>
                            <th className="table-element" scope="col" colSpan="2">Opciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* .map le paso un array en tipo JSON y devuelve un array de htlm */}
                        {listaUsuarios.map((usuario) => {
                            return (
                                <tr key={nanoid()}>
                                    {/* <th className="table-element" scope="row">1</th> */}
                                    <td className="table-element" >{usuario.nombre}</td>
                                    <td className="table-element" >{usuario.rol}</td>
                                    <td className="table-element" >
                                        {usuario.estado}
                                        {/* <img title="Pendiente" src={Pendiente} alt="imagen" className="icon-eliminar" /> */}
                                    </td>
                                    <td className="table-element">
                                        <Link to='/editarUsuario'>
                                            <button title="Editar" type="button" className=" button-gen btn-opcion">

                                                <i className="fas fa-edit"></i>
                                            </button>
                                        </Link>
                                    </td>
                                    <td className="table-element">
                                        <Link to='/eliminarUsuario'>
                                            <button title="Eliminar" type="button" className="button-gen btn-opcion">
                                                <i className="fas fa-trash-alt"></i>
                                            </button>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>


    );
};

export default ModuloUsuarios;

