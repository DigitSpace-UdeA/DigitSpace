import React, { useEffect, useState } from 'react';
import '../style/stylesUser.css';
const EditarUsuario = () => {

    //Use State
    const [rol, setRol] = useState('');

    //Use effect
    useEffect(()=>{
        console.log("use effect vacio")
    },[])
    

    //funcion
    const enviarDatos = () => {
        console.log("envio button");
    }


    return (
        <>

            <h2 className="titulo">Editar - Modulo de Usuarios y Roles</h2>
            <div className="section-edit">
                <form action="" className="form-edit">
                    <label>
                        <i className="fas fa-id-card"></i>
                        ID
                        <input className="input-edit" type="text" value="1" id="id-user" readonly="readonly" />
                    </label>
                    <label>
                        <i className="fas fa-user-tie"></i>
                        Usuario
                        <input className="input-edit" type="text" value="Mark" id="Name-user" readonly="readonly" />
                    </label>
                    <label>
                        <i className="fas fa-briefcase"></i>
                        Rol
                        <select onChange={
                            (e) =>{
                                console.log(e.target.value)
                                setRol = e.target.value
                            }
                        } className="input-edit">
                            <option>Vendedor</option>
                            <option>Administrador</option>
                        </select>
                    </label>
                    <label>
                        <i className="fas fa-unlock-alt"></i>
                        Estado
                        <select className="input-edit">
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>
                    </label>
                    <button className="button-gen btn-submit-edit" type="button" onClick={enviarDatos}>
                        <i className="fas fa-save"></i>
                        Guardar
                    </button>
                </form>
            </div>

      </>
    );

}

export default EditarUsuario;
