import './App.css';
import Layout from "./layouts/layout";
import Main from './pages/Main'
import RegistroVentas from './pages/registroVentas';
import LoginModule from './pages/loginModule';
import VentasMaestro from './pages/ventasMaestro';
import ProductosMaestro from './pages/productosMaestro';
import ProductosRegistro from './pages/productosRegistro';
import ModuloUsuarios from './pages/ModuloUsuarios';
import LandingPage from './layouts/landingPage';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        {/* <Link to="/">Home</Link> <Link to="/ModuloUsuarios">Usuarios</Link> */}
        <Switch>
          <Route path={["/ModuloUsuarios", "/ModuloUsuarios2","/editarUsuario", "/editarUsuario2", "/eliminarUsuario", "/productosMaestro", "/productosRegistro", "/registroVentas", "/ventasMaestro", "/main"]} exact>
            <Layout>
              <Switch>
                <Route path="/ModuloUsuarios2" exact>
                  <ModuloUsuarios />
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

*/