
import axios from "axios";
export const obtenerUsuarios = async (setUsuarios) => {
    const options = { 
    method: 'GET', 
    url: 'http://localhost:5000/moduloUsuarios2' };
    
    axios.
    request(options).
    then(function (response) {
    setUsuarios(response.data)
    })
    .catch(function (error) {
    console.error(error);
    });
}