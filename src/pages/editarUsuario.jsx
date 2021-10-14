import React, { useEffect, useState, useRef } from 'react';
import '../style/stylesUser.css';
import ModuloUsuarios from './ModuloUsuarios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarUsuario = (user) => {

    //Use State
    /*  const [rol, setRol] = useState(''); */

    //Use effect
    useEffect(() => {
        console.log("use effec vacio", user.nombre)
    }, [])


    //funcion
    const enviarDatos = () => {
        console.log("envio button", ID, nombre, rol, estado);
        toast.success('Editado con éxito');
    }

    //////
    const [ID, setID] = useState();
    const [nombre, setNombre] = useState();
    const [rol, setRol] = useState();
    const [estado, setEstado] = useState();

    ///// Usando UseRef -> recomendado

    const form = useRef(null);

    const submitForm = (e) =>{
        e.preventDefault();

        const fd = new FormData(form.current);
        console.log('datos form env', fd )

        const nuevoUsuario = {};
        fd.forEach( (value, key) => {
            nuevoUsuario[key] = value;
        })
        console.log(nuevoUsuario)
    }

    return (
        <div>

            <h2 className="titulo">Editar - Modulo de Usuarios y Roles</h2>
            <div className="section-edit">
                <form ref={form} onSubmit={submitForm}  className="form-edit">
{/*                     <label htmlFor='ID' >
                        <i className="fas fa-id-card"></i>
                        ID
                        <input name='id' className="input-edit" type="text" id="id-user" 
                        />
                    </label> */}
                    <label htmlFor='nombre'>
                        <i className="fas fa-user-tie"></i>
                        Usuario
                        <input name='nombre' className="input-edit" type="text" id="Name-user"

                        />
                    </label>
                    <label htmlFor='rol'>
                        <i className="fas fa-briefcase"></i>
                        Rol
                        <select className="input-edit" name='rol'

                        >
                            <option disabled >Seleccione una Opción</option>
                            <option>Vendedor</option>
                            <option>Administrador</option>
                        </select>
                    </label>
                    <label htmlFor='estado'>
                        <i className="fas fa-unlock-alt"></i>
                        Estado
                        <select className="input-edit" name='estado'

                        >
                            <option disabled >Seleccione una Opción</option>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>
                    </label>
                    <button  className="button-gen btn-submit-edit" type="submit">
                        <i className="fas fa-save"></i>
                        Guardar
                    </button>
                </form>
            </div>
            <ToastContainer
                position="button-center"
                autoClose={3000}
                closeOnClick
            />

        </div>
    );

}

export default EditarUsuario;
