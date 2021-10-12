import './App.css';



import logo from './media/logo.svg';
import Layout from "./layouts/layout";



import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main'
import RegistroVentas from './pages/registroVentas';
import EditarUsuario from './pages/editarUsuario';
import LoginModule from './pages/loginModule';
import EliminarUsuario from './pages/eliminarUsuario';
import VentasMaestro from './pages/ventasMaestro';
import ProductosMaestro from './pages/productosMaestro';
import ProductosRegistro from './pages/productosRegistro';
import ModuloUsuarios from './pages/ModuloUsuarios';
import LandingPage from './layouts/landingPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";





function App() {
  return (
    <div className='App'>
      <div className='bg-red-400'> Hola mundo</div>

    </div>
  );
}

export default App;
