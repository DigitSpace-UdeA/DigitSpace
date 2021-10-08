    
import Layout from '../layouts/layout';
import '../style/Carrusel_3D.css';

import img1 from '../media/Imagen 1.jpg'
import img2 from '../media/Imagen 2.jpg'
import img3 from '../media/Imagen 3.jpg'
import img4 from '../media/Imagen 4.jpg'
import img5 from '../media/Imagen 5.jpg'
import img6 from '../media/Imagen 6.jpg'
import img7 from '../media/Imagen 7.jpg'
import img8 from '../media/Imagen 8.jpg'
import img9 from '../media/Imagen 9.jpg'
import img10 from '../media/Imagen 10.jpg'
import img11 from '../media/Imagen 11.jpg'
import img12 from '../media/Imagen 12.jpg'
import img13 from '../media/Imagen 13.jpg'

function Main() {

    return (
        <div className="">

            <h1 className="title"> ¡Bienvenido! </h1> <br />
                <p>¡Bienvenido! Nuevamente estamos aquí para decirte que esperamos que esta empresa sea tu hogar durante muchos
                    años y que nos trate a todos como una segunda familia.
                    <br />
                    Desde ahora compartiremos momentos inolvidables y tendremos éxito asegurado. Tu forma de trabajo sumará
                    muchos puntos positivos al grupo y aprenderemos mucho de tí.
                </p> <br />
                <p>Te deseamos un productivo y feliz día, recuerda que a cada momento nace una nueva oportunidad para poder
                    desempeñarte y crecer a nivel laboral y personal!</p>

                <link rel="stylesheet" href="style/Carrusel_3D.css" />

                <div className="contenedor">
                    <div className="carrusel">
                        <figure><img src={img1} alt="Imagen 1" /></figure>
                        <figure><img src={img2} alt="Imagen 2" /></figure>
                        <figure><img src={img3} alt="Imagen 3" /></figure>
{/*                     <figure><img src="media/Imagen 4.jpg" alt="Imagen 4" /></figure>
                        <figure><img src="media/Imagen 5.jpg" alt="Imagen 5" /></figure>
                        <figure><img src="media/Imagen 6.jpg" alt="Imagen 6" /></figure>
                        <figure><img src="media/Imagen 7.jpg" alt="Imagen 7" /></figure>
                        <figure><img src="media/Imagen 8.jpg" alt="Imagen 8" /></figure>
                        <figure><img src="media/Imagen 9.jpg" alt="Imagen 9" /></figure>
                        <figure><img src="media/Imagen 10.jpg" alt="Imagen 10" /></figure>
                        <figure><img src="media/Imagen 11.jpg" alt="Imagen 11" /></figure>
                        <figure><img src="media/Imagen 12.jpg" alt="Imagen 12" /></figure>
                        <figure><img src="media/Imagen 13.jpg" alt="Imagen 13" /></figure> */}
                    </div>
                </div>
            

        </div>

    );
}

export default Main;