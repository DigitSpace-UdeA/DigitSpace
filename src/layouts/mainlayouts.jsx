import Headermain from '../components/main/Headermain';
import Footermain from '../components/main/Footermain';
import Sidebarmain from '../components/main/Sidebarmain';

const Layout = ({children}) => {
    return(
        <div>
        <Headermain/>
        <Sidebarmain/>
        <main >{children}</main>
       {/*  <!-- Llama las funciones de javascript --> */}
        {/*<script type="text/javascript" src="./JavaScript/Clases.js"></script>*/}
        <Footermain/>
        </div>
    );
}

export default Layout;