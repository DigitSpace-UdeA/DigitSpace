
import '../style/ZEstilos_Login.css';
import img16 from '../media/Imagen 16.jpg'
import img17 from '../media/Imagen 17.jpg'
import img18 from '../media/Imagen 18.jpg'
import img19 from '../media/Imagen 19.jpg'
//import img20 from '../media/Imagen 20.jpg'
//import img21 from '../media/Imagen 21.jpg'
//import img22 from '../media/Imagen 22.jpg'
//import img23 from '../media/Imagen 23.jpg'

const LoginModule = () => {
    return (
        <>

            <div className="flex" id="idCapa">    
                <div className="sliderlog">
                    <ul>
                        <li> <img src={img16} alt="1" /></li>
                        <li> <img src={img17} alt="2" /></li>
                        <li> <img src={img18} alt="3" /></li>
                        <li> <img src={img19} alt="4" /></li>
                        

                    </ul>
                </div>

                <div className=" text-center text-white border-4 border-blue-700 rounded-xl
                                 bg-blue-400 hover:to-blue-600 pt-12 mt-12 ml-40 px-10
                                 border-double">
                    <i className="fas fa-user-clock colorIcon text-5xl mb-3 p-7 rounded-full bg-white"></i> <br />
                    <span> Ingresa o registrate <br /> con tu cuenta de google </span>
                    <br />
                    <a href="Main"> <button className="button">
                        <i className="fab fa-google colorIcon"></i>
                        mail
                    </button> </a>
                </div>
            </div>    

        </>

    );

}
export default LoginModule;