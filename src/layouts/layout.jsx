import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/sidebar';

const Layout = ({children}) => {
    return(
        <div>
        <Header/>
        <Sidebar/>
        <main>{children}</main>
        <Footer/>
        </div>
    );
}

export default Layout;