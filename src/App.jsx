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


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LandingPage from './layouts/landingPage';




function App() {
  return (
    <div className="App">

      <Router>
        {/*         <Link to="/">Home</Link>
        <Link to="/ModuloUsuarios">Usuarios</Link> */}

        <Switch>
          <Route
            path={["/ModuloUsuarios", "/editarUsuario", "/eliminarUsuario", "/productosMaestro", "/productosRegistro", "/registroVentas", "/ventasMaestro", "/main"]} exact>
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
