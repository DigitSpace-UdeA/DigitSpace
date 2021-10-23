import React, { useEffect, useRef, useState } from 'react'
import { nanoid } from 'nanoid';
import { obtenerUsuarios } from '../utils/api';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {getToken} from '../utils/api.js'
import ReactLoading from 'react-loading';
import PrivateComponent from '../components/PrivateComponent';


const Usuarios = () => {

    //const [usuarios, setUsuarios] = useEffect([]);
    const [usuarios, setUsuarios]= useState([]);
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        //obtener lista desde el back
       setLoading(true);
       
        obtenerUsuarios(setUsuarios,setLoading(false) )

    }, []);

    //nuevo para cargar again
    useEffect (()=>{
        if (ejecutarConsulta){
        obtenerUsuarios(setUsuarios);
        setEjecutarConsulta(false)
        }
    }, [ejecutarConsulta]);
    //nuevo 



    return(
        <div>
        <TablaUsuarios loading={loading} listaUsuarios={usuarios} setEjecutarConsulta={setEjecutarConsulta}/>
        <ToastContainer position='bottom-center' autoClose={5000} /></div> 
    );

    
};

const TablaUsuarios = ({loading, listaUsuarios, setEjecutarConsulta}) => {
    
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
    <PrivateComponent roleList={'Administrador'}>

         <h2 className = 'text-2xl font-extrabold text-gray-800 text-center pb-5 pt-3'> Modulo de usuarios y roles</h2>      
      
       {/* <PrivateComponent roleList={['Admnistrador','Vendedor']} ><button className='text-black'> hola JA</button></PrivateComponent> */}
       
       <div className= 'flex flex-col items-center justify-center '>        
       
            <table>
            <thead>
                <tr >
                <th>Usuario</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Opciones</th>
                </tr>
            </thead>
            {loading ? <ReactLoading type='cylon' color='abc123' height={667} width={375} />:
            <tbody className='text-gray-700'>

                {listaUsuarios.map((usuario) => {
                    return <FilaUsuario key={nanoid()} usuario={usuario} setEjecutarConsulta={setEjecutarConsulta}/>
                })}
                
            </tbody>} 
            </table>
           
        </div>
     </PrivateComponent>

        </div>
};




const FilaUsuario = ({usuario, setEjecutarConsulta}) => {

    console.log("usuariofff",usuario)
    const [edit,setEdit] = useState (false)  
    const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
        name: usuario.name,
        rol: usuario.rol,
        estado: usuario.estado
    })



    const actualizarUsuario = async () => {
            console.log(infoNuevoUsuario);
            //enviar info al backend
            const options = {
                method: 'PATCH',
                url: 'http://localhost:5000/moduloUsuarios/editar', 
                headers: { 'Content-Type': 'application/json', Authorization: getToken() },
                data: { ... infoNuevoUsuario, id: usuario._id }, 
              };
          
             await axios
                .request(options)
                .then(function (response) {
                  console.log(response.data);
                  toast.success('usuario modificado con éxito');
                  setEdit(false);
                  setEjecutarConsulta(true);
                })
                .catch(function (error) {
                  toast.error('Error modificando el producto');
                  console.error(error);
                });
        };


    const eliminarUsuario = async ()=>{
     
        const options = {
            method: 'DELETE',
            url: 'http://localhost:5000/moduloUsuarios/eliminar/',
            headers: { 'Content-Type': 'application/json', Authorization: getToken() },
            data: { id: usuario._id },
          };
      
          await axios
            .request(options)
            .then(function (response) {
              console.log(response.data);
              toast.success('Usuario eliminado con éxito');
              setEjecutarConsulta(true);
            })
            .catch(function (error) {
              console.error(error);
              toast.error('Error eliminando el usuario');
            });
    };
        // const [rol, setRol]=useState(usuario.rol);


        return (
        <tr className=" "> 
            {edit ?
                <>
                    <td  >
                        <input className=" rounded-md border-2 border-gray-400 
                        flex-col  justify-center text-center bg-blue-200 border-double focus:border-blue-500
                         " type="text"  name= "usuario" 
                         value = {usuario.name} readOnly
                        /*value={infoNuevoUsuario.usuario}
                        onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, usuario:e.target.value})}*/  />
                    </td>
                    <td  >
                        <select className="rounded-md border-2 hover:border-blue-300 border-gray-400 focus:border-blue-300 input-edit-Form
                        flex-col  justify-center items-center" type="text" name= "rol" 
                        value={infoNuevoUsuario.rol}
                        // onChange={e=>setRol(e.target.value) }
                        onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, rol:e.target.value}) }
                        >
                            <option value='Vendedor'>Vendedor</option>
                            <option value='Administrador'>Administrador</option>
                            <option value='Sin rol'>Sin rol</option>
                        </select></td>
                    <td >
                        <select className="rounded-md border-2 hover:border-blue-300 border-gray-400 focus:border-blue-300 input-edit-Form
                        flex-col text-center justify-center" 
                        value={infoNuevoUsuario.estado}
                        onChange={e=>setInfoNuevoUsuario({...infoNuevoUsuario, estado:e.target.value})}>
                            <option value="Autorizado">Autorizado</option>
                            <option value="No Autorizado">No Autorizado</option>
                            <option value="Pendiente">Pendiente</option>
                        </select></td>

                </>
            :  
            <>
            <td>{usuario.name}</td>
            <td>{usuario.rol}</td>
            <td>{usuario.estado}</td>
            </>
            }
            <td> 
            <div className = 'flex w-full justify-around'>
                {edit? (
                
                <i title="Guardar" type="submit" onClick={()=> actualizarUsuario()}
                className="far fa-check-circle text-green-400 hover:text-green-300  btn-opcioncheck cursor-pointer pt-0.4 text-xl"></i>
                
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

// const RolesUsuario = ({ usuario }) => {
//     const [rol, setRol] = useState(user.rol);


// const habilitarUsuarios = () =>{

// }


export default Usuarios;




/* -----------COMENTARIOS-----------------

//import { actualizarUsuario } from '../utils/api';
//import EditarUsuario2 from './editarUsuario2';


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
    ];



*/



