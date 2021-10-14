import axios from "axios";

export const obtenerUsuarios = async (setUsuarios) => {
    const options = { method: 'GET', url: 'http://localhost:5000/usuarios' };

    axios.request(options).then(function (response) {
        /* console.log(response.data); */
        setUsuarios(response.data)
    }).catch(function (error) {
        console.error(error);
    });
}