import React, { useEffect, useState, useRef } from 'react';
import '../style/stylesUser.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditarUsuario = () => {

    //Use State
    /*  const [rol, setRol] = useState(''); */

    //Use effect
    useEffect(() => {
        console.log("use effect vacio")
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

    const submitForm = (e) =>{
        console.log('datos form env')

    }



    return (
        <div>

            <h2 className="titulo">Editar - Modulo de Usuarios y Roles</h2>
            <div className="section-edit">
                <form onSubmit={submitForm} action="" className="form-edit">
                    <label htmlFor='ID' >
                        <i className="fas fa-id-card"></i>
                        ID
                        <input name='id' className="input-edit" type="text" id="id-user"
                            value={ID}
                        />
                    </label>
                    <label htmlFor='nombre'>
                        <i className="fas fa-user-tie"></i>
                        Usuario
                        <input name='nombre' className="input-edit" type="text" id="Name-user"
                            value={nombre}
                            onChange={(e) => {
                                setNombre(e.target.value)
                            }}
                        />
                    </label>
                    <label htmlFor='rol'>
                        <i className="fas fa-briefcase"></i>
                        Rol
                        <select className="input-edit" name='rol'
                            value={rol}
                            onChange={(e) => {
                                setRol(e.target.value)
                            }}
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
                            value={estado}
                            onChange={(e) => {
                                setEstado(e.target.value)
                            }}
                        >
                            <option disabled >Seleccione una Opción</option>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>
                    </label>
                    <button className="button-gen btn-submit-edit" type="submit"
                        onClick={enviarDatos}>
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
