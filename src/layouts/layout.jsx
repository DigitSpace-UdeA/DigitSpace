import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';
import PrivateRoute from '../components/PrivateRoute';

const Layout = ({children}) => {
    return(
        <PrivateRoute>
        <div>
        <Header/>
        <Sidebar/>
        <main >{children}</main>
       {/*  <!-- Llama las funciones de javascript --> */}
        {/*<script type="text/javascript" src="./JavaScript/Clases.js"></script>*/}
        <Footer/>
        </div>
        </PrivateRoute>
    );
}

export default Layout;