import './App.css';
import Layout from "./layouts/layout";
import Main from './pages/Main'
import RegistroVentas from './pages/registroVentas';
import LoginModule from './pages/loginModule';
import VentasMaestro from './pages/ventasMaestro';
//import ProductosMaestro from './pages/productosMaestro';
//import ProductosRegistro from './pages/productosRegistro';
import ProdRegMasterFront from './pages/ProdRegMasterFront';
import ModuloUsuarios from './pages/ModuloUsuarios';
import LandingPage from './layouts/landingPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { nanoid } from 'nanoid';
//import { obtenerProductos } from 'utils/api';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  return (

    <div className="App">
       <Router>
        <Switch>
          <Route path={["/ModuloUsuarios", "/productos", "/registroVentas", "/ventasMaestro", "/main"]} exact>
            <Layout>
              <Switch>
                <Route path="/ModuloUsuarios" exact>
                  <ModuloUsuarios />
                </Route>
                <Route path='/productos'>
                  <ProdRegMasterFront/>
                </Route>
                <Route path="/registroVentas" exact>
                  <RegistroVentas />
                </Route>
                <Route path="/ventasMaestro" exact>
                  <VentasMaestro />
                </Route>
                <Route path="/main" exact>
                  <Main />
                </Route>
              </Switch>
            </Layout>
          </Route>
          <Route path={["/"]}>
            <LandingPage>
              <Switch>
                <Route path="/" exact>
                  <LoginModule />
                </Route>
              </Switch>
            </LandingPage>
          </Route>
        </Switch>
      </Router> 
    </div>
  );
}

export default App;




/* -----------COMENTARIOS-----------------
****para modificar y hacer pruebas (futuro)****

//import ModuloUsuarios from './pages/ModuloUsuarios';
//import EditarUsuario from './pages/editarUsuario';
//import EditarUsuario2 from './pages/editarUsuario2';
//import EliminarUsuario from './pages/eliminarUsuario';

<Route path="/editarUsuario2" exact>
<EditarUsuario2 />
</Route>

<Route path="/editarUsuario" exact>
  <EditarUsuario />
</Route>

<Route path="/eliminarUsuario" exact>
  <EliminarUsuario />
</Route>


"/productosMaestro", "/productosRegistro",

 <Route path="/productosRegistro" exact>
   <ProductosRegistro />
</Route>
<Route path="/productosMaestro" exact>
   <ProductosMaestro />
</Route>


*/