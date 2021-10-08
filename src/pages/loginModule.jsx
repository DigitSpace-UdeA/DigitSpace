import Layout from "../layouts/layout";

const LoginModule = () => {
    return (
        <>
            <Layout>
                <div class="slider">
                    <ul>
                        <li> <img src="./media/Imagen 16.jpg" alt="1" /></li>
                        <li> <img src="./media/Imagen 17.jpg" alt="2" /></li>
                        <li> <img src="./media/Imagen 18.jpg" alt="3" /></li>
                        <li> <img src="./media/Imagen 19.jpg" alt="4" /></li>
                        <li> <img src="./media/Imagen 20.jpg" alt="5" /></li>
                        <li> <img src="./media/Imagen 21.jpg" alt="6" /></li>
                        <li> <img src="./media/Imagen 22.jpg" alt="7" /></li>
                        <li> <img src="./media/Imagen 23.jpg" alt="8" /></li>

                    </ul>
                </div>

                <div class="loginSection contenedorImagen">
                    <i class="fas fa-user-clock colorIcon sizeIcon"></i> <br />
                    <span> Ingresa o registrate <br /> con tu cuenta de google </span>
                    <br />
                    <a href="Main.html"> <button class="button">
                        <i class="fab fa-google colorIcon"></i>
                        mail
                    </button> </a>
                </div>
            </Layout>
        </>

    );

}
export default LoginModule;