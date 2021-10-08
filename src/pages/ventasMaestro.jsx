import '../style/MainStyles.css';

const VentasMaestro = () => {
    return (
        <>
            <section class="tabla-container">
                <article>
                    <div class="formSeparar">
                        <form class="FLexBV estilosForm">
                            <div class="estilosBuscar">
                                <label class="Flexhijo" for="Buscar venta" />
                                <h4>Buscar venta</h4>
                                <input class="input"
                                    name="nombre"
                                    placeholder="Ingrese número de referencia"
                                />
                                <button class="Flexhijo boton" type="submit">Buscar</button>
                            </div>
                            <div class="estilosActualizarCampos">
                                <input class="input"
                                    number="nombre"
                                    placeholder="Valor total venta"
                                />
                                <input class="input"
                                    name="nombre"
                                    placeholder="Fecha de venta"
                                />
                                <input class="input"
                                    name="nombre"
                                    placeholder="Nombre cliente"
                                />
                                <input class="input"
                                    name="nombre"
                                    placeholder="ID cliente"
                                />
                                <input class="input"
                                    name="nombre"
                                    placeholder="Vendedor"
                                />
                                <input class="input"
                                    name="nombre"
                                    placeholder="Estado venta"
                                />
                            </div>
                        </form>
                    </div>
                </article>
            </section>

            <div class="tableContainer scrollConds">
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
                            <td>290000</td>
                            <td>Agotado</td>
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