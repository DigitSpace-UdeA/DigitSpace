import Headermain from '../components/Headermain';
import Footermain from '../components/Footermain';
import Sidebarmain from '../components/Sidebarmain';
import PrivateRoute from '../components/PrivateRoute';

const Mainlayout = ({children}) => {
    
    return(
        <PrivateRoute>
        <div>      
        <Headermain/>
        <Sidebarmain/>
        <main >{children}</main>
       {/*  <!-- Llama las funciones de javascript --> */}
        {/*<script type="text/javascript" src="./JavaScript/Clases.js"></script>*/}
        <Footermain/>
        
        </div>
        </PrivateRoute>
    );
}

export default Mainlayout;