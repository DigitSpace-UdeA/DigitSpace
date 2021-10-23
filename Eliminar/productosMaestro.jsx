
import '../style/ProdMaestroStyles.css';

const ProductosMaestro = () => {
    return (
        <>
            <h1 classNameName="encabezadoh1">Maestro de productos</h1>


            <div className="formSeparar">
                {/*  <!--<img src="./media/engranajes.png" />--> */}
                <form className="estilosForm">
                    <div className="estilosListar">
                        <span>Listar todos los productos </span>
                        <button className="myButton" type="button" onclick="alert('Productos listados exitosamente.')"
                            onclick="funcListar()">Listar</button>
                    </div>

                    <div className="estilosBuscar">
                        <span>Buscar el producto</span> {/* &nbsp&nbsp&nbsp */}
                        <input className="inputsBuscar" name="IdBuscar" type="text" placeholder="Palabra a buscar" />
                        <div className="selectEstilos">
                            <div>
                                <input type="radio" id="porID" name="busqueda" value="porID" checked />
                                <label for="porID">Por ID</label>
                            </div>
                            <div>
                                <input type="radio" id="porNombre" name="busqueda" value="porNombre" />
                                <label for="porNombre">Por nombre</label>
                            </div>
                        </div>
                    </div>

                    <div className="estilosActualizar">
                        <span>Actualizar el producto {/* &nbsp&nbsp&nbsp */}
                            <button className="myButton" type="button" onclick="alert('Producto actualizado exitosamente.')"
                                onclick="funcUpdate()">Actualizar</button>
                        </span>

                        <div className="estilosActualizarCampos">
                            {/*  <!--<label for="IdProd">ID del producto</label>--> */}
                            <input className="inputsActualizar" name="IdProd" type="text" placeholder="ID del producto (Sólo lectura)"
                                readonly />
                            {/* <!--<label for="DescProd">Descripción del producto</label>--> */}
                            <input className="inputsActualizar" name="DescProd" type="text"
                                placeholder="Actualice descripción del producto" />
                            {/*  <!--<label for="ValUnitProd">Valor unitario del producto</label>--> */}
                            <input className="inputsActualizar" name="ValUnitProd" type="text"
                                placeholder="Actualice valor unitario del producto" />
                            {/*  <!--<label for="DispProd">Disponibilidad del producto</label>-- */}
                            <input className="inputsActualizar" name="DispProd" type="text"
                                placeholder="Actualice disponibilidad del producto" />
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
                            <th>Disponibilidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VZ19990204</td>
                            <td>Mesa Rectangular Marca Eliza</td>
                            <td>160900</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>VM20040314</td>
                            <td>Silla redonda Ikea</td>
                            <td>40500</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>VZ20150605</td>
                            <td>Armario doble puerta Maderas S.A.</td>
                            <td>650000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VZ20030810</td>
                            <td>Camarote metálico Kids Game</td>
                            <td>290000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VC20091205</td>
                            <td>Aparador Sonatta</td>
                            <td>150000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>VB20210911</td>
                            <td>Mecedora rústica Buitragos</td>
                            <td>460000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VP20010603</td>
                            <td>Mesa de estudio Ikea</td>
                            <td>420000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>VC20020603</td>
                            <td>Silla para computador Gamers 2000</td>
                            <td>890000</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>VC20120803</td>
                            <td>Mesa de centro Lily</td>
                            <td>102000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VA20016102</td>
                            <td>Espejo rinconero con cajón Rhinos</td>
                            <td>190300</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>VC20009105</td>
                            <td>Repisa portarretratos Zuckererg</td>
                            <td>96000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VB20416167</td>
                            <td>Nochero monocajón Hilltop</td>
                            <td>78900</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VN20406987</td>
                            <td>Baul de tendidos Mariana</td>
                            <td>750600</td>
                            <td>Disponible</td>
                        </tr>
                        <tr>
                            <td>VS20060910</td>
                            <td>Estanteria plástica Vivian</td>
                            <td>65000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VP20030909</td>
                            <td>Mesa de bar Brooklin</td>
                            <td>260000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VG20070808</td>
                            <td>Guardarropas El Guarro</td>
                            <td>1500000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VA20150729</td>
                            <td>Perchero de entrada Calimex</td>
                            <td>63000</td>
                            <td>Agotado</td>
                        </tr>
                        <tr>
                            <td>VC20020603</td>
                            <td>Biblioteca con vidrios Lapizlazuli</td>
                            <td>3500000</td>
                            <td>Disponible</td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </>

    );
}
export default ProductosMaestro;