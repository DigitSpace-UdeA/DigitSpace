//import '../style/Estilos_Registro_Ventas.css';

const RegistroVentas = () => {
    return (
        <>
            <section id="encabezado">
                <div className="encabezadoh1">
                    <h1><i className="fas fa-cart-arrow-down colorIcon"></i> Registrar Venta </h1>
                </div>
                <div className="cliente">
                    <div className="accion_cliente">
                        <h4> Información del Cliente </h4>
                    </div>
                </div>
            </section>

            <form action="" id="formulario" className="formulario">

                {/* <!-- Sección Nit o Usuario --> */}
                <section className="formulario_grupo" id="campo_idcliente">
                    <label for="usuario" className="formulario_label"> Nit o Cédula del Cliente </label>
                    <div className="formulario_grupo_input">
                        <input type="text" className="formulario_input" name="id_usuario" id="id_usuario"
                            placeholder="Nit o Cédula del Cliente" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                    <p className="formulario_error"> El campo sólo recibe números. </p>
                </section>

                {/* <!-- Sección Nombre Cliente --> */}
                <section className="formulario_grupo" id="campo_nombre">
                    <label for="nombre" className="formulario_label"> Nombre del Cliente </label>
                    <div className="formulario_grupo_input">
                        <input type="text" className="formulario_input" name="id_nombre" id="id_nombre"
                            placeholder="Nit o Cédula del Cliente" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                </section>

                {/*  <!-- Sección Dirección Cliente --> */}
                <section className="formulario_grupo" id="campo_direccion">
                    <label for="direccion" className="formulario_label"> Dirección</label>
                    <div className="formulario_grupo_input">
                        <input type="text" className="formulario_input" name="id_direccion" id="id_direccion"
                            placeholder="Ej: Calle 1 # 2 - 3" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                </section>

                {/* <!-- Sección Teléfono Usuario --> */}
                <section className="formulario_grupo" id="campo_telefono">
                    <label for="telefono" className="formulario_label"> Teléfono </label>
                    <div className="formulario_grupo_input">
                        <input type="number" className="formulario_input" name="id_telefono" id="id_telefono"
                            placeholder="Ej: 1234567" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                    <p className="formulario_error"> El campo sólo recibe números. </p>
                </section>

                {/* <!-- Sección Ciudad Usuario --> */}
                <section className="formulario_grupo" id="campo_ciudad">
                    <label for="ciudad" className="formulario_label"> Ciudad de Envío </label>
                    <div className="formulario_grupo_input">
                        <input type="text" className="formulario_input" name="id_ciudad" id="id_ciudad" placeholder="" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                    <p className="formulario_error"> La ciudad a la que se entregará el producto. </p>
                </section>

                {/* <!-- Sección Correo Usuario --> */}
                <section className="formulario_grupo" id="campo_correo">
                    <label for="correo" className="formulario_label"> Email del Cliente </label>
                    <div className="formulario_grupo_input">
                        <input type="text" className="formulario_input" name="id_correo" id="id_correo" placeholder="" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                    <p className="formulario_error"> La ciudad a la que se entregará el producto. </p>
                </section>

                {/* <!-- Sección Mensaje Formulario --> */}
                <section className="formulario_mensaje" id="formulario_mensaje">
                    <p><i className="fas fa-exclamation-triangle"></i> <b> Error: </b> Diligenciar los campos correctamente.
                    </p>
                </section>

                {/* <!-- Sección Botón Registrar Cliente --> */}
                <section className="formulario_grupo boton_cliente">
                    <button type="submit" className="registro_cliente"><i className="fas fa-user-circle"></i> Enviar </button>
                    <p className="mensaje_registro" id="mensaje_registro"> Formulario enviado exitosamente! </p>
                </section>

            </form>

            <div className="cliente">
                <div className="accion_cliente">
                    <h4> Datos de la Venta </h4>
                </div>
            </div>

            <form action="" id="formulario" className="formulario">

                {/*  <!-- Sección ID Venta --> */}
                <section className="formulario_grupo" id="campo_idventa">
                    <label for="idventa" className="formulario_label"> ID Venta </label>
                    <div className="formulario_grupo_input">
                        <input type="text" className="formulario_input" name="id_idventa" id="id_idventa"
                            placeholder="Ej: FV-00001" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                </section>

                {/*  <!-- Sección Nombre del Venderor --> */}
                <section className="formulario_grupo" id="campo_nombrevendedor">
                    <label for="nombrevendedor" className="formulario_label"> Nombre del Vendedor </label>
                    <div className="formulario_grupo_input">
                        <input type="text" className="formulario_input" name="id_nombrevendedor" id="id_nombrevendedor"
                            placeholder="Nombre del Vendedor" required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                </section>

                {/* <!-- Sección Fecha Venta --> */}
                <section className="formulario_grupo" id="campo_fechaventa">
                    <label for="fechaventa" className="formulario_label"> Fecha de la Venta </label>
                    <div className="formulario_grupo_input">
                        <input type="date" className="formulario_input" name="id_fechaventa" id="id_fechaventa" placeholder=""
                            required />
                        <i className="formulario_validacion fas fa-times-circle"></i>
                    </div>
                </section>

            </form><br /><br /><br />

            {/* <!-- Tabla con cada Item --> */}

            <table className="venta">
                <thead>
                    <tr>
                        <th width="100px"> Identificador de la Venta </th>
                        <th> Descripción </th>
                        <th width="100px"> Cantidad </th>
                        <th width="texto_tabla"> Precio </th>
                        <th width="texto_tabla"> Precio Total </th>
                        <th> Acción </th>
                    </tr>
                    <tr>
                        <td><input type="text" name="cod_producto" id="cod_producto" /></td>
                        <td id="descripcion"> - </td>
                        <td><input type="text" name="cant_producto" id="cant_producto" value="0" min="1" disabled /></td>
                        <td id="precio_prod" className="texto_tabla"> 0.00 </td>
                        <td id="precio_prod_total" className="texto_tabla"> 0.00 </td>
                        <td><button type="submit" className="agregar_producto"><a href="#" id="agregar_otro_prod"
                            className="link_adicion"><i className="fas fa-cart-plus"></i> Agregar Producto </a></button>
                        </td>
                    </tr>
                    <tr>
                        <th> Código </th>
                        <th> Descripción </th>
                        <th> Cantidad </th>
                        <th width="texto_tabla"> Precio </th>
                        <th width="texto_tabla"> Precio Total </th>
                        <th> Acción </th>
                    </tr>
                </thead>

                <tbody className="detalle_venta">
                    <tr>
                        <td> FV04873 </td>
                        <td> Cama Queen Beige - Caoba Roble </td>
                        <td className="texto_centrado"> 1 </td>
                        <td className="texto_tabla"> 1'550.000.00 </td>
                        <td className="texto_tabla"> 1'550.000.00 </td>
                        <td className="">
                            <button type="submit" className="quitar_producto"><a className="link_eliminar" href="#"><i
                                className="far fa-minus-square"></i></a></button>
                        </td>
                    </tr>
                    <tr>
                        <td> FV00056 </td>
                        <td> Silla Isabelina Sencilla </td>
                        <td className="texto_centrado"> 7 </td>
                        <td className="texto_tabla"> 350.000.00 </td>
                        <td className="texto_tabla"> 2'450.000.00 </td>
                        <td className="">
                            <button type="submit" className="quitar_producto"><a className="link_eliminar" href="#"><i
                                className="far fa-minus-square"></i></a></button>
                        </td>
                    </tr>
                    <tr>
                        <td> FV00452 </td>
                        <td> Sofa Cama Rey Azul Nocturno </td>
                        <td className="texto_centrado"> 1 </td>
                        <td className="texto_tabla"> 1'180.000.00 </td>
                        <td className="texto_tabla"> 1'180.000.00 </td>
                        <td className="">
                            <button type="submit" className="quitar_producto"><a className="link_eliminar" href="#"><i
                                className="far fa-minus-square"></i></a></button>
                        </td>
                    </tr>
                </tbody>

                <tfoot>
                    <tr>
                        <td colspan="4" className="texto_tabla"> SUBTOTAL </td>
                        <td className="texto_tabla"> 5'180.000.00 </td>
                    </tr>
                    <tr>
                        <td colspan="4" className="texto_tabla"> IVA (19%) </td>
                        <td className="texto_tabla"> 984.200.00 </td>
                    </tr>
                    <tr>
                        <td colspan="4" className="texto_tabla"> TOTAL </td>
                        <td className="texto_tabla"> 6'164.200.00 </td>
                    </tr>
                </tfoot>

            </table><br /><br />

            {/* <!-- Sección Botón Registrar Cliente --> */}
            <section className="formulario_grupo boton_cliente">
                <button type="submit" className="registro_cliente"><i className="fas fa-handshake"></i> Crear Venta </button>
                <p className="mensaje_registro" id="mensaje_registro"> Venta registrada exitosamente! </p>
            </section>

        </>
    );
}
export default RegistroVentas;
