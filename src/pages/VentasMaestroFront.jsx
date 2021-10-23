import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
import 'react-toastify/dist/ReactToastify.css';
import {getToken} from '../utils/api.js';
//import {obtenerProductos} from './ProdRegMasterFront';
import PrivateComponent from '../components/PrivateComponent.jsx';

const Venta = () => {
    const [mostrarTabla, setMostrarTabla] = useState(true);
    const [ventas, setVentas] = useState([]);
    const [productos, setProductos] = useState([]);
    //const [vendedores, setVendedores] = useState([]);
    const [textoBoton, setTextoBoton] = useState('Buscar Venta');
    const [colorBoton, setColorBoton] = useState('grey');
    const [ejecutarConsulta, setEjecutarConsulta] = useState(true);


  
    const obtenerVentas = async (setVenta, setEjecutarConsulta = () => {}) => {   
        const options = { method: 'GET', url: 'http://localhost:5000/ventas', headers: {Authorization: getToken(), },};
        await axios
          .request(options)
          .then(function (response) {
            setVenta(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
        setEjecutarConsulta(false);
      };      

      useEffect (() => {
          console.log('Consulta', ejecutarConsulta);
          if (ejecutarConsulta) {
              obtenerVentas(setVentas, setEjecutarConsulta);
          }
      }, [ejecutarConsulta]);

      useEffect(() => {
          if(mostrarTabla) {
              setEjecutarConsulta(true);
          }
      }, [mostrarTabla]);

      useEffect(() => {
        if (mostrarTabla) {
          setTextoBoton('Registrar Venta');
          setColorBoton('blue');
        } else {
          setTextoBoton('Volver');
          setColorBoton('blue');
        }
      }, [mostrarTabla]);

     // useEffect(() =>{
      //  console.log('consulta', ejecutarConsulta);
      //  if (ejecutarConsulta) {
      //    obtenerProductos(
     //       (response)=>{
     //         setProductos(response.data);
     //       }
     //     )
     //   }
    //  })

      
      return (
        <>  <PrivateComponent roleList={'Administrador, Vendedor'}>     
        <div className='flex h-full w-full flex-col items-center justify-start p-8'>
          <div className='flex flex-col w-full'>
            <h2 className='text-3xl font-extrabold text-gray-900'>
              Página administración de ventas
            </h2>
            <button
              onClick={() => {
                setMostrarTabla(!mostrarTabla);
              }}
              className={`text-white bg-${colorBoton}-500 p-5 rounded-full m-6 w-28 self-end`}
            >
              {textoBoton}
            </button>
          </div>
          {mostrarTabla ? (
            <TablaVenta listaVentas={ventas} setEjecutarConsulta={setEjecutarConsulta} />
          ) : (
            <FormularioRegistroVentas
              setMostrarTabla={setMostrarTabla}
              listaVentas={ventas}
              setVentas={setVentas}
            />
          )}
          <ToastContainer position='bottom-center' autoClose={5000} />
        </div>
        </PrivateComponent>  
        </>

      );

    
};

const TablaVenta = ({listaVentas, setEjecutarConsulta}) => {
    const [busqueda, setBusqueda] = useState('');
    const [ventasFiltradas, setVentasFiltradas] = useState(listaVentas);

    useEffect(() => {
        setVentasFiltradas(
          listaVentas.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
          })
        );
      }, [busqueda, listaVentas]);

      return (
        <div className='flex flex-col items-center justify-center w-full'>
          <input
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder='Buscar Referencia'
            className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'
          />
          <h2 className='text-2xl font-extrabold text-gray-800'>Ventas de la Referencia</h2>
          <div className='hidden md:flex w-full'>
            <table className='tabla'>
              <thead>
                <tr>
                  <th>Id Producto</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Valor unitario</th>
                  <th>Valor total</th>
                  <th>Acciones</th>                 
                </tr>
              </thead>
              <tbody>
                {ventasFiltradas.map((venta) => {
                  return (
                    <FilaVenta
                      key={nanoid()}
                      venta={venta}
                      setEjecutarConsulta={setEjecutarConsulta}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );  
}

const FilaVenta = ({productos, venta, setEjecutarConsulta }) => {
    const [edit, setEdit] = useState(false);
    const [borrar, setBorrar] = useState(false);
    //const [openDialog, setOpenDialog] = useState(false);
    const [infoNuevoVenta, setInfoNuevoVenta] = useState({
        _id: venta._id,
        productos: productos,
        cantidad: venta.cantidad,
        valorunit: venta.valorunit,
        valortotal: venta.valortotal,
    });

    const actualizarVenta = async () => {
        //enviar la info al backend
        const options = {
          method: 'PATCH',
          url: 'http://localhost:5000/ventas/editar',
          headers: { 'Content-Type': 'application/json', Authorization: getToken()},
          data: { ...{cantidad: infoNuevoVenta.cantidad, valorunit: infoNuevoVenta.valorunit, valortotal: infoNuevoVenta.valortotal}, id: venta._id, productos: infoNuevoVenta.productos },
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('venta modificada con éxito');
                setEdit(false);
                setEjecutarConsulta(true);
            })
            .catch(function (error) {
                toast.error('Error modificando la venta');
                console.error(error);
        })
    };

    const eliminarVentas = async () => {
        const options = {
          method: 'DELETE',
          url: 'http://localhost:5000/ventas/eliminar',
          headers: { 'Content-Type': 'application/json',Authorization: getToken() },
          data: { _id: venta._id },
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Venta eliminada con éxito');
                setEjecutarConsulta(true);
            })
            .catch(function (error) {
                console.error(error);
                toast.error('Error eliminando la venta');
            });
        
    };

    return (
        <tr>
          {edit ? (
            <>
              <td>{infoNuevoVenta._id}</td>
              <td>{infoNuevoVenta.productos}</td>
              <td>
                <input
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  type='text'
                  value={infoNuevoVenta.cantidad}
                  onChange={(e) => setInfoNuevoVenta({ ...infoNuevoVenta, cantidad: e.target.value })}
                />
              </td>
              <td>
                <input
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  type='text'
                  value={infoNuevoVenta.valorunit}
                  onChange={(e) =>
                    setInfoNuevoVenta({ ...infoNuevoVenta, valorunit: e.target.value })
                  }
                />
              </td>
              <td>
                <input
                  className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                  type='text'
                  value={infoNuevoVenta.valortotal}
                  onChange={(e) =>
                    setInfoNuevoVenta({ ...infoNuevoVenta, valortotal: e.target.value })
                  }
                />
              </td>
            </>
          ) : (
            <>
              <td>{venta._id.slice(20)}</td>
              <td>{venta.productos}</td>
              <td>{venta.cantidad}</td>
              <td>{venta.valorunit}</td>
              <td>{venta.valortotal}</td>
            </>
          )}
    
          <td>
            <div className='flex w-full justify-around'>
              
            
              {edit ? (
                <>
                  
                    <i
                      onClick={() => actualizarVenta()}
                      className='fas fa-check text-green-700 hover:text-green-500'
                    />
                 
                  
                    <i
                      onClick={() => setEdit(!edit)}
                      className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                    />
                  
                </>
              ) : [borrar ? (
                        <>
                                      
                            <i
                              onClick={() => eliminarVentas()}
                              className='fas fa-trash-alt text-yellow-700 hover:text-yellow-500'
                            />
    
    
                            <i
                              onClick={() => setBorrar(!borrar)}
                              className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                            />    
                          
                                        
                        </>
                        
                
                  ) : (
                        <>
                          
                            <i
                              onClick={() => setEdit(!edit)}
                              className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                            />
    
                            <i
                              onClick={() => setBorrar(!borrar)}
                              className='fas fa-trash-alt text-yellow-700 hover:text-yellow-500'
                            />
                          
                                        
                        </>
                    
                    )
              ]}
    
    
            </div>
    
          </td>
    
        </tr>
      );

};

const FormularioRegistroVentas = ({ setMostrarTabla, listaVentas, setVentas }) => {
    const form = useRef(null);

    const submitForm = async (e) => {
        e.preventDefault();
        const fd = new FormData(form.current);
    
        const nuevaVenta = {};
        fd.forEach((value, key) => {
          nuevaVenta[key] = value;
        });

        const options = {
            method: 'POST',
            url: 'http://localhost:5000/ventas/nueva',
            headers: { 'Content-Type': 'application/json' },
            data: { cantidad: nuevaVenta.cantidad, valorunit: nuevaVenta.valorunit, valortotal: nuevaVenta.valortotal },
        };

        await axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                toast.success('Venta registrada con éxito');
            })
            .catch(function (error) {
                console.error(error);
                toast.error('Error al registrar venta');
            });

        setMostrarTabla(true);
    }

    return (
        <div className='flex flex-col items-center justify-center'>
          <h2 className='text-2xl font-extrabold text-gray-800'>Registrar nueva venta</h2>
          <form ref={form} onSubmit={submitForm} className='flex flex-col'>
            <label className='flex flex-col' htmlFor='name'>
              Cliente
              <input
                name='name'
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                placeholder='Nombre cliente'
                required
              />
            </label>
            <label className='flex flex-col' htmlFor='name'>
              Vendedor
              <input
                name='name'
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                placeholder='Nombre vendedor'
                required
              />
            </label>
            <label className='flex flex-col' htmlFor='name'>
              Producto
              <input
                name='name'
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='text'
                placeholder='Id Producto'
                required
              />
            </label>
            <label className='flex flex-col' htmlFor='cantidad'>
              Cantidad producto
              <input
                name='cantidad'
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='number'
                //min={0}
                //max={1000000}
                placeholder='Cantidad'
                required
              />
            </label>
            <label className='flex flex-col' htmlFor='valorunit'>
              Valor unitario del producto
              <input
                name='valorunit'
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='number'
                //min={0}
                //max={1000000}
                placeholder='Valor unitario del producto'
                required
              />
            </label>
            <label className='flex flex-col' htmlFor='valortotal'>
              Fecha venta
              <input
                name='fechaventa'
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='date'
                //min={0}
                //max={1000000}
                placeholder='dd/mm/AAAA'
                required
              />
            </label>
            <label className='flex flex-col' htmlFor='valortotal'>
              Valor total venta
              <input
                name='valortotal'
                className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                type='number'
                //min={0}
                //max={1000000}
                placeholder='Valor total'
                required
              />
            </label>
    
            <button
              type='submit'
              className='col-span-2 bg-blue-400 p-2 rounded-full shadow-md hover:bg-blue-600 text-white'
            >
              Registrar venta
            </button>
          </form>
        </div>
      );
}
export default Venta;