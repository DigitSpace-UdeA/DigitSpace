
import axios from "axios";

export const obtenerUsuarios = async (setlistaModuloUsuarios) => {
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };

    axios.request(options).then(function (response) {
        setlistaModuloUsuarios(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}