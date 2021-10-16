import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
//import { obtenerProductos } from 'utils/api';
import 'react-toastify/dist/ReactToastify.css';

const Productos = () => {
  const [mostrarTabla, setMostrarTabla] = useState(true);
  const [productos, setProductos] = useState([]);
  const [textoBoton, setTextoBoton] = useState('Crear nuevo producto');
  const [colorBoton, setColorBoton] = useState('indigo');
  const [ejecutarConsulta, setEjecutarConsulta] = useState(true);

  const obtenerProductos = async (setProductos, setEjecutarConsulta = () => {}) => {
    const options = { method: 'GET', url: 'http://localhost:5000/productos' }; // 'http://localhost:5000/vehiculos/'
    await axios
      .request(options)
      .then(function (response) {
        setProductos(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
    setEjecutarConsulta(false);
  };
  
  useEffect(() => {
    console.log('consulta', ejecutarConsulta);
    if (ejecutarConsulta) {
      obtenerProductos(setProductos, setEjecutarConsulta);
    }
  }, [ejecutarConsulta]);

  useEffect(() => {
    //obtener lista de productos desde el backend
    if (mostrarTabla) {
      setEjecutarConsulta(true);
    }
  }, [mostrarTabla]);

  useEffect(() => {
    if (mostrarTabla) {
      setTextoBoton('Crear nuevo producto');
      setColorBoton('gray');
    } else {
      setTextoBoton('Mostrar todos los productos');
      setColorBoton('gray');
    }
  }, [mostrarTabla]);
  return (
    <>
    <div className='flex h-full w-full flex-col items-center justify-start p-8'>
      <div className='flex flex-col w-full'>
        <h2 className='text-3xl font-extrabold text-gray-900'>
          Página de administración de productos
        </h2>
        <button
          onClick={() => {
            setMostrarTabla(!mostrarTabla);
          }}
          className={`text-white bg-${colorBoton}-500 p-5 m-6 w-40 rounded-lg self-end`}
        >
          {textoBoton}
        </button>
      </div>
      {mostrarTabla ? (
        <TablaProductos listaProductos={productos} setEjecutarConsulta={setEjecutarConsulta} />
      ) : (
        <FormularioCreacionProductos
          setMostrarTabla={setMostrarTabla}
          listaProductos={productos}
          setProductos={setProductos}
        />
      )}
      <ToastContainer position='bottom-center' autoClose={5000} />
    </div>
    </>
  );
};

const TablaProductos = ({ listaProductos, setEjecutarConsulta }) => {
  const [busqueda, setBusqueda] = useState('');
  const [productosFiltrados, setProductosFiltrados] = useState(listaProductos);

  useEffect(() => {
    setProductosFiltrados(
      listaProductos.filter((elemento) => {
        return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
      })
    );
  }, [busqueda, listaProductos]);

  return (
    <div className='flex flex-col items-center justify-center w-full'>
      <input
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        placeholder='Buscar'
        className='border-2 border-gray-700 px-3 py-1 self-start rounded-md focus:outline-none focus:border-indigo-500'
      />
      <h2 className='text-2xl font-extrabold text-gray-800'>Todos los productos</h2>
      <div className='hidden md:flex w-full'>
        <table className='tabla'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Descripción del producto</th>
              <th>Marca del producto</th>
              <th>Valor unitario del producto</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((producto) => {
              return (
                <FilaProducto
                  key={nanoid()}
                  producto={producto}
                  setEjecutarConsulta={setEjecutarConsulta}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const FilaProducto = ({ producto, setEjecutarConsulta }) => {
  const [edit, setEdit] = useState(false);
  const [borrar, setBorrar] = useState(false);
  //const [openDialog, setOpenDialog] = useState(false);
  const [infoNuevoProducto, setInfoNuevoProducto] = useState({
    _id: producto._id,
    name: producto.name,
    brand: producto.brand,
    valorunit: producto.valorunit,
  });

  const actualizarProducto = async () => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/productos/editar', // `http://localhost:5000/productos/${producto._id}`
      headers: { 'Content-Type': 'application/json' },
      data: { ...{name: infoNuevoProducto.name, brand: infoNuevoProducto.brand, valorunit: infoNuevoProducto.valorunit}, id: producto._id }, // data: { ...infoNuevoProducto, id: producto._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('producto modificado con éxito');
        setEdit(false);
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        toast.error('Error modificando el producto');
        console.error(error);
      });
  };

  const eliminarProducto = async () => {
    const options = {
      method: 'DELETE',
      url: 'http://localhost:5000/productos/eliminar/',
      headers: { 'Content-Type': 'application/json' },
      data: { id: producto._id },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto eliminado con éxito');
        setEjecutarConsulta(true);
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error eliminando el producto');
      });
    //setOpenDialog(false);
  };

  return (
    <tr>
      {edit ? (
        <>
          <td>{infoNuevoProducto._id}</td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoProducto.name}
              onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, name: e.target.value })}
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoProducto.brand}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, brand: e.target.value })
              }
            />
          </td>
          <td>
            <input
              className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
              type='text'
              value={infoNuevoProducto.valorunit}
              onChange={(e) =>
                setInfoNuevoProducto({ ...infoNuevoProducto, valorunit: e.target.value })
              }
            />
          </td>
        </>
      ) : (
        <>
          <td>{producto._id.slice(20)}</td>
          <td>{producto.name}</td>
          <td>{producto.brand}</td>
          <td>{producto.valorunit}</td>
        </>
      )}

      <td>
        <div className='flex w-full justify-around'>
          
        
          {edit ? (
            <>
              
                <i
                  onClick={() => actualizarProducto()}
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
                          onClick={() => eliminarProducto()}
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

const FormularioCreacionProductos = ({ setMostrarTabla, listaProductos, setProductos }) => {
  const form = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevoProducto = {};
    fd.forEach((value, key) => {
      nuevoProducto[key] = value;
    });

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/productos/nuevo/', // 'http://localhost:5000/productos/nuevo/'
      headers: { 'Content-Type': 'application/json' },
      data: { name: nuevoProducto.name, brand: nuevoProducto.brand, valorunit: nuevoProducto.valorunit },
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        toast.success('Producto agregado con éxito');
      })
      .catch(function (error) {
        console.error(error);
        toast.error('Error creando un producto');
      });

    setMostrarTabla(true);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <h2 className='text-2xl font-extrabold text-gray-800'>Crear nuevo producto</h2>
      <form ref={form} onSubmit={submitForm} className='flex flex-col'>
        <label className='flex flex-col' htmlFor='name'>
          Descripción del producto
          <input
            name='name'
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            type='text'
            placeholder='Descripción del producto'
            required
          />
        </label>
        <label className='flex flex-col' htmlFor='marca'>
          Marca del producto
          <select
            className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
            name='brand'
            required
            defaultValue={0}
          >
            <option disabled value={0}>
              Seleccione una opción
            </option>
            <option>Ikasa</option>
            <option>Loreley</option>
            <option>Tiffany</option>
            <option>Ikea</option>
            <option>Micasa</option>
            <option>Encanto</option>
            <option>Vainilla</option>
            <option>Maderas SA</option>
            <option>Artesano</option>
            <option>Spezia</option>
            <option>Comfort</option>
            <option>Aqua</option>
          </select>
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

        <button
          type='submit'
          className='col-span-2 bg-green-400 p-2 rounded-full shadow-md hover:bg-green-600 text-white'
        >
          Guardar producto
        </button>
      </form>
    </div>
  );
};

export default Productos;