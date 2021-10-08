import logo from './logo.svg';
import './style/App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './pages/Main'
import ModuloUsuarios from './pages/ModuloUsuarios';
import EditarUsuario from './pages/editarUsuario';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import EliminarUsuario from './pages/eliminarUsuario';



function App() {
  return (
    <div className="App">

      <Router>
        <Link to="/">Home</Link>
        <Link to="/ModuloUsuarios">Usuarios</Link>

        <Switch>
          <Route path="/ModuloUsuarios" exact>
            <ModuloUsuarios/>
          </Route>
          <Route path="/editarUsuario" exact>
            <EditarUsuario/>
          </Route>
          <Route path="/eliminarUsuario" exact>
            <EliminarUsuario/>
          </Route>
          <Route path="/" exact>
            <Main />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
