
import axios from "axios";
export const obtenerUsuarios = async (setUsuarios) => {
    const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/moduloUsuarios' };
    
    axios.
    request(options).
    then(function (response) {
    setUsuarios(response.data)
    })
    .catch(function (error) {
    console.error(error);
    });
}


/*
export const actualizarUsuario = async (setInfoNuevoUsuario) => {
    //enviar la info al backend
    const options = {
      method: 'PATCH',
      url: 'http://localhost:5000/moduloUsuarios2/editar', // `http://localhost:5000/productos/${producto._id}`
      headers: { 'Content-Type': 'application/json' },
      data: { ...{usuario: infoNuevoUsuario.usuario, rol: infoNuevoProducto.rol, estado: infoNuevoProducto.estado}, id: producto._id }, // data: { ...infoNuevoProducto, id: producto._id },
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
  */