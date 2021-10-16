import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

const Layout = ({children}) => {
    return(
        <div>
        <Header/>
        <Sidebar/>
        <main >{children}</main>
       {/*  <!-- Llama las funciones de javascript --> */}
        {/*<script type="text/javascript" src="./JavaScript/Clases.js"></script>*/}
        <Footer/>
        </div>
    );
}

export default Layout;