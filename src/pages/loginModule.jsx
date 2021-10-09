import Layout from "../layouts/layout";
import '../style/Estilos_Login.css';


import img16 from '../media/Imagen 16.jpg'
import img17 from '../media/Imagen 17.jpg'
import img18 from '../media/Imagen 18.jpg'
import img19 from '../media/Imagen 19.jpg'
import img20 from '../media/Imagen 20.jpg'
import img21 from '../media/Imagen 21.jpg'
import img22 from '../media/Imagen 22.jpg'
import img23 from '../media/Imagen 23.jpg'

const LoginModule = () => {
    return (
        <>

            <div className="main">    
                <div className="slider">
                    <ul>
                        <li> <img src={img16} alt="1" /></li>
                        <li> <img src={img17} alt="2" /></li>
                        <li> <img src={img18} alt="3" /></li>
                        <li> <img src={img19} alt="4" /></li>
                        <li> <img src={img20} alt="5" /></li>
                        <li> <img src={img21} alt="6" /></li>
                        <li> <img src={img22} alt="7" /></li>
                        <li> <img src={img23} alt="8" /></li>

                    </ul>
                </div>

                <div className="loginSection contenedorImagen">
                    <i className="fas fa-user-clock colorIcon sizeIcon"></i> <br />
                    <span> Ingresa o registrate <br /> con tu cuenta de google </span>
                    <br />
                    <a href="Main.html"> <button className="button">
                        <i className="fab fa-google colorIcon"></i>
                        mail
                    </button> </a>
                </div>
            </div>    

        </>

    );

}
export default LoginModule;