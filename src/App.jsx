import logo from './media/logo.svg';
import Layout from "./layouts/layout";


import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main'
import ModuloUsuarios from './pages/ModuloUsuarios';
import EditarUsuario from './pages/editarUsuario';
import LoginModule from './pages/loginModule';
import EliminarUsuario from './pages/eliminarUsuario';
import ProductosMaestro from './pages/productosMaestro';
import ProductosRegistro from './pages/productosRegistro';
import RegistroVentas from './pages/registroVentas';
import VentasMaestro from './pages/ventasMaestro';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";




function App() {
  return (
    <div className="App">

      <Router>
        {/*         <Link to="/">Home</Link>
        <Link to="/ModuloUsuarios">Usuarios</Link> */}
        <Layout>
          <Switch>
            <Route path="/ModuloUsuarios" exact>
              <ModuloUsuarios />
            </Route>
            <Route path="/editarUsuario" exact>
              <EditarUsuario />
            </Route>
            <Route path="/eliminarUsuario" exact>
              <EliminarUsuario />
            </Route>
            <Route path="/loginModule" exact>
              <LoginModule />
            </Route>
            <Route path="/productosMaestro" exact>
              <ProductosMaestro />
            </Route>
            <Route path="/productosRegistro" exact>
              <ProductosRegistro />
            </Route>
            <Route path="/registroVentas" exact>
              <RegistroVentas />
            </Route>
            <Route path="/ventasMaestro" exact>
              <VentasMaestro />
            </Route>
            <Route path="/" exact>
              <Main />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
