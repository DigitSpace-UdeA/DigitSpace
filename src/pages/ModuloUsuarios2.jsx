import React, { useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid';
import { obtenerUsuarios } from '../utils/api';
import { actualizarUsuario } from '../utils/api';
import EditarUsuario2 from './editarUsuario2';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import EliminarUsuario from './eliminarUsuario';
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
        //obtener lista desde el back
        obtenerUsuarios(setUsuarios)
    }, []);

    return(
        <div>pagina principal
        <TablaUsuarios listaUsuarios={usuarios}/>
       <ToastContainer position='bottom-center' autoClose={5000} /></div> 
    );

    
};



const TablaUsuarios = ({listaUsuarios}) => {
    
    //const form = useRef(null);
    useEffect(() =>{
        console.log('funcion', listaUsuarios);
    },[listaUsuarios]);
    
    /*const submitEdit = (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
        console.log(e)
    };*/

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
                return <FilaUsuario key={nanoid()} usuario={usuario}/>
            })}
        </tbody>
        </table>
       
        </div>
        </div>
};

const FilaUsuario = ({usuario}) => {
    /*const editRow = (usuario) => {
        setUsuarioActual({
            id: usuario._id, 
            Usuario: usuario.usuario, 
            Rol: usuario.rol,
            Estado: usuario.estado
        })   }; 
    
    const [usuarioActual, setUsuarioActual] = useState({
    _id: null, usuario: ''
    , rol: ' ', estado: ''   });*/
    console.log("usuario",usuario)
    const [edit,setEdit] = useState (false)  
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        usuario: usuario.usuario,
        rol: usuario.rol,
        estado: usuario.estado
    })



    const actualizarUsuario = async () => {
            console.log(infoNuevoUsuario);
            //enviar info al backend
            const options = {
                method: 'PATCH',
                url: 'http://localhost:5000/moduloUsuarios2/editar', // `http://localhost:5000/productos/${producto._id}`
                headers: { 'Content-Type': 'application/json' },
                data: { ... infoNuevoUsuario, id: usuario._id }, // data: { ...infoNuevoProducto, id: producto._id },
              };
          
             await axios
                .request(options)
                .then(function (response) {
                  console.log(response.data);
                  toast.success('usuario modificado con éxito');
                  setEdit(false);
                  //setEjecutarConsulta(true);
                })
                .catch(function (error) {
                  toast.error('Error modificando el producto');
                  console.error(error);
                });
        };


    const eliminarUsuario = ()=>{
     
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/moduloUsuarios2/eliminar/',
            headers: { 'Content-Type': 'application/json' },
            data: { id: usuario._id },
          };
      
           axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              toast.success('Usuario eliminado con éxito');
              //setEjecutarConsulta(true);
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error eliminando el usuario');
            });
        

    };

        return (
        <tr className=" "> 
            {edit ?
                <>
                    <td  >
                        <input className="input-editForm
                        flex-col  justify-center text-center" type="text"  name= "usuario" 
                        value={infoNuevoUsuario.usuario}
                        onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, usuario:e.target.value})}  />
                    </td>
                    <td  >
                        <select className="input-editForm
                        flex-col  justify-center items-center" type="text" name= "rol" 
                        value={infoNuevoUsuario.rol}
                        onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, rol:e.target.value})}
                        >
                            <option >Vendedor</option>
                            <option >Administrador</option>
                        </select></td>
                    <td >
                        <select className="input-editForm
                        flex-col text-center justify-center" 
                        value={infoNuevoUsuario.estado}
                        onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, estado:e.target.value})}>
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                            <option>Pendiente</option>
                        </select></td>

                </>
            :  
            <>
            <td>{usuario.usuario}</td>
            <td>{usuario.rol}</td>
            <td>{usuario.estado}</td>
            </>
            }
            <td>
            <div className = 'flex w-full justify-around'>
                {edit? (
                
                <i type="submit" onClick={()=> actualizarUsuario()}
                className="far fa-check-circle text-green-400 hover:text-green-300  btn-opcioncheck"></i>
                
                ):(

                <button  title="Editar" type="button" className=" button-gen btn-opcion "
                onClick={()=> setEdit(!edit)}> 
                <i className="fas fa-edit"></i>
                </button>)}

                
                <button title="Eliminar" type="button" className="button-gen btn-opcion"
                onClick={()=> eliminarUsuario()}>
                <i className="fas fa-trash-alt"></i>
                </button>
            </div>
            </td> 
            </tr>
    )
}

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
                            <option>Pendiente</option>
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

const EnvioDatos = () => {
    //const [editarUsuario, setEditarUsuario]= useEffect([]);

    //useEffect(() => {
        //obtener lista desde el front
        //  setEditarUsuario(usuarioTabla)
    //}, []);
    


    return( <FormEdit />);
};


export default Usuarios;