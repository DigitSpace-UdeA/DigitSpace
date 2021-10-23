//import '../style/VentasM_Style.css';

const VentasMaestro = () => {
    return (
        <>
            <section className="tabla-container">
                <article>
                    <div className="formSeparar">
                        <form className="FLexBV estilosForm">
                            <div className="estilosBuscar">
                                <label className="Flexhijo" for="Buscar venta" />
                                <h4>Buscar venta</h4>
                                <input className="input" 
                                    name="nombre"
                                    placeholder="Ingrese número de referencia"
                                />
                                <button className="Flexhijo boton" type="submit">Buscar</button>
                                <button onclick="boton1" className="Flexhijo boton" type="submit">Actualizar</button>
                                <script>
                                    alert ("Se ha actualizado correctamente")
                                </script>
                            </div>
                            <div className="estilosActualizarCampos">
                                <input className="input"
                                    number="nombre"
                                    placeholder="Valor total venta"
                                />
                                <input className="input"
                                    name="nombre"
                                    placeholder="Fecha de venta"
                                />
                                <input className="input"
                                    name="nombre"
                                    placeholder="Nombre cliente"
                                />
                                <input className="input"
                                    name="nombre"
                                    placeholder="ID cliente"
                                />
                                <input className="input"
                                    name="nombre"
                                    placeholder="Vendedor"
                                />
                                <input className="input"
                                    name="nombre"
                                    placeholder="Estado venta"
                                />
                            </div>
                        </form>
                    </div>
                </article>
            </section>

            <div className="tableContainer scrollConds">
                <table>
                    <thead>
                        <tr>
                            <th>Producto ID</th>
                            <th>Cantidad</th>
                            <th>Valor unitario</th>
                            <th>Valor total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>VZ19990204</td>
                            <td>2</td>
                            <td>10000</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>VM20040314</td>
                            <td>1</td>
                            <td>30000</td>
                            <td>30000</td>
                        </tr>
                        <tr>
                            <td>VZ20030810</td>
                            <td>1</td>
                            <td>300000</td>
                            <td>300000</td>
                        </tr>
                        <tr>
                            <td>VC20091205</td>
                            <td>2</td>
                            <td>70000</td>
                            <td>70000</td>
                        </tr>
                        <tr>
                            <td>VB28210911</td>
                            <td>5</td>
                            <td>5000</td>
                            <td>25000</td>
                        </tr>
                        <tr>
                            <td>VB20210612</td>
                            <td>3</td>
                            <td>10000</td>
                            <td>30000</td>
                        </tr>
                        <tr>
                            <td>VB20210755</td>
                            <td>2</td>
                            <td>10000</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>VB20210800</td>
                            <td>2</td>
                            <td>10000</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>VB20210912</td>
                            <td>2</td>
                            <td>10000</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>VB20210921</td>
                            <td>1</td>
                            <td>30000</td>
                            <td>30000</td>
                        </tr>
                        <tr>
                            <td>VN20406987</td>
                            <td>3</td>
                            <td>15000</td>
                            <td>45000</td>
                        </tr>
                        <tr>
                            <td>VS20060910</td>
                            <td>2</td>
                            <td>10000</td>
                            <td>20000</td>
                        </tr>
                        <tr>
                            <td>VP20030909</td>
                            <td>4</td>
                            <td>10000</td>
                            <td>40000</td>
                        </tr>
                        <tr>
                            <td>VP20040909</td>
                            <td>7</td>
                            <td>10000</td>
                            <td>70000</td>
                        </tr>
                        <tr>
                            <td>VP20030879</td>
                            <td>2</td>
                            <td>20000</td>
                            <td>40000</td>
                        </tr>
                        <tr>
                            <td>VP18030909</td>
                            <td>6</td>
                            <td>3000</td>
                            <td>18000</td>
                        </tr>
                        <tr>
                            <td>VP20052709</td>
                            <td>1</td>
                            <td>10000</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>VP20067891</td>
                            <td>1</td>
                            <td>45000</td>
                            <td>45000</td>
                        </tr>
                        <tr>
                            <td>VP20012345</td>
                            <td>2</td>
                            <td>17000</td>
                            <td>34000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default VentasMaestro;