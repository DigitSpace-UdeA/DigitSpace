
import '../style/ProdRegistroStyles.css';

const ProductosRegistro = () => {
    return (
        <>
            <h1 className="encabezadoh1">Registro de productos</h1>


            <div className="formSeparar">
                {/* <!--<img src="./media/engranajes.png" />--> */}
                <form className="estilosForm">


                    <div className="estilosRegistrar">
                        <span>Registrar el producto 
                            <button className="myButton" type="button" onclick="alert('Producto registrado exitosamente.')" onclick="funcUpdate()">Registrar</button>
                        </span>

                        <div className="estilosActualizarCampos">
                            <div className="labelInputRegistrar">
                                <label for="IdProd">ID del producto</label>
                                <input className="inputsActualizar" name="IdProd" type="text" placeholder="ID del producto (Sólo lectura)" readonly/>
                            </div>
                            <div className="labelInputRegistrar">
                                <label for="DescProd">Descripción del producto</label>
                                <input className="inputsActualizar" name="DescProd" type="text" placeholder="Registre la descripción del producto"/>
                            </div>
                            <div className="labelInputRegistrar">
                                <label for="ValUnitProd">Valor unitario del producto</label>
                                <input className="inputsActualizar" name="ValUnitProd" type="text" placeholder="Registre el valor unitario del producto"/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>



            <div className="tableContainer scrollConds">
                <table>
                    <thead>
                        <tr>
                            <th>Producto ID</th>
                            <th>Descripción</th>
                            <th>Valor unitario</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VZ19990204</td>
                            <td>Mesa oval Juliana</td>
                            <td>180900</td>
                            <td>Registrado</td>
                        </tr>
                    </tbody>
                </table>
            </div>


            <div className="estiloDivAMaestro">
                <span>Ir al maestro de productos{/*  &nbsp&nbsp&nbsp */}
                    <a href="Productos_Maestro.html">
                        <button className="myButton" type="button" onclick="funcUpdate()">Ir al maestro</button></a>
                </span>
            </div>
        </>
    );
}
export default ProductosRegistro;