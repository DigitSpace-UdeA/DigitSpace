
import '../style/ProdRegistroStyles.css';

const ProductosRegistro = () => {
    return (
        <>
            <h1 class="encabezadoh1">Registro de productos</h1>


            <div class="formSeparar">
                {/* <!--<img src="./media/engranajes.png" />--> */}
                <form class="estilosForm">


                    <div class="estilosRegistrar">
                        <span>Registrar el producto {/* &nbsp&nbsp&nbsp */}
                            <button class="myButton" type="button" onclick="alert('Producto registrado exitosamente.')" onclick="funcUpdate()">Registrar</button>
                        </span>

                        <div class="estilosActualizarCampos">
                            <div class="labelInputRegistrar">
                                <label for="IdProd">ID del producto</label>
                                <input class="inputsActualizar" name="IdProd" type="text" placeholder="ID del producto (Sólo lectura)" readonly />
                            </div>
                            <div class="labelInputRegistrar">
                                <label for="DescProd">Descripción del producto</label>
                                <input class="inputsActualizar" name="DescProd" type="text" placeholder="Registre la descripción del producto" />
                            </div>
                            <div class="labelInputRegistrar">
                                <label for="ValUnitProd">Valor unitario del producto</label>
                                <input class="inputsActualizar" name="ValUnitProd" type="text" placeholder="Registre el valor unitario del producto" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>



            <div class="tableContainer scrollConds">
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


            <div class="estiloDivAMaestro">
                <span>Ir al maestro de productos {/* &nbsp&nbsp&nbsp */}
                    <a href="/productosMaestro">
                        <button class="myButton" type="button" onclick="funcUpdate()">Ir al maestro</button></a>
                </span>
            </div>
        </>
    );
}
export default ProductosRegistro;