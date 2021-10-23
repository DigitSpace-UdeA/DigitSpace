import './App.css';
import Layout from "./layouts/layout";
import Main from './pages/Main'
// import RegistroVentas from './pages/registroVentas';
import LoginModule from './pages/loginModule';
// import VentasMaestro from '../Eliminar/ventasMaestro';
//import ProductosMaestro from './pages/productosMaestro';
//import ProductosRegistro from './pages/productosRegistro';
import ProdRegMasterFront from './pages/ProdRegMasterFront';
import ModuloUsuarios from './pages/ModuloUsuarios';
import LandingPage from './layouts/landingPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import axios from 'axios';
// import { nanoid } from 'nanoid';
//import { obtenerProductos } from 'utils/api';
import 'react-toastify/dist/ReactToastify.css';
import { Auth0Provider } from "@auth0/auth0-react";
import Mainlayouts from './layouts/mainlayouts'
import { UserContext } from './components/context/userContex';
import PrivateRoute from './components/PrivateRoute';
import VentasMaestroFront from './pages/VentasMaestroFront';

function App() {

  const [userData,setUserData]= useState({})

  return (

  <Auth0Provider
    domain="digit-space.us.auth0.com"
    clientId="aG3VBb8c92c3j0KWZmdWPmgmJqKpapxf"
    redirectUri="http://localhost:3000/main"
    audience="api-autenticacion-digitspace"
  >



    <div className="App">

      <UserContext.Provider value={{userData,setUserData}}> 

      <Router>
        {/* <Link to="/">Home</Link> <Link to="/ModuloUsuarios">Usuarios</Link> */}
        <Switch>
          <Route path={["/ModuloUsuarios", "/productos", "/Ventas", "/private"]} exact>
            <Layout>
              <Switch>
                <Route path="/ModuloUsuarios" exact>
                  <ModuloUsuarios />
                </Route>
                <Route path='/productos'>
                  <ProdRegMasterFront/>
                </Route>
                <Route path="/Ventas" exact>
                  <VentasMaestroFront />
                </Route>
               <Route path="/private" exact>
                  <PrivateRoute />
               </Route>
                {/* <Route path="/main" exact>
                  <Main />
                </Route>*/}
              </Switch>
            </Layout>
          </Route>

          <Route path={[ "/main"]}>
            <Mainlayouts>
              <Switch>
                <Route path="/main" exact>
                  <Main />
                </Route>
              </Switch>
            </Mainlayouts>
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

      </UserContext.Provider>
    </div>
  </Auth0Provider>
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