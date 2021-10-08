import '../style/MainStyles.css';

const RegistroVentas = () => {
    return (
        <>
                <section id="encabezado">
                    <div class="titulo_pagina">
                        <h1><i class="fas fa-cart-arrow-down"></i> Registrar Venta </h1>
                    </div>
                    <div class="cliente">
                        <div class="accion_cliente">
                            <h4> Información del Cliente </h4>
                            <a href="#" class="registrar_cliente boton_cliente"><i class="far fa-id-card"></i> Registrar Cliente </a>
                        </div>
                    </div>
                </section>
                <form name="formulario_venta" id="form_venta" class="datos">
                    <input type="hidden" name="action" value="agregar_cliente" />
                    <input type="hidden" id="idcliente" name="idcliente" value="" required />
                    <div class="largo">
                        <label> Nit o Cédula del Cliente </label>
                        <input type="text" name="nit_cliente" id="nit_cliente" />
                    </div>
                    <div class="largo">
                        <label> Nombre del Cliente </label>
                        <input type="text" name="nombre_cliente" id="nombre_cliente" disabled required />
                    </div>
                    <div class="largo">
                        <label> Teléfono </label>
                        <input type="number" name="tel_cliente" id="tel_cliente" disabled required />
                    </div>
                    <div class="largo">
                        <label> Dirección </label>
                        <input type="text" name="dir_cliente" id="dir_cliente" disabled required />
                    </div>
                    <div class="largo100">
                        <label> Correo Electrónico </label>
                        <input type="email" name="email_cliente" id="email_cliente" disabled required />
                    </div>
                    <div id="registro_cliente" class="largo100">
                        <button type="submit" class="guardar_cliente"><i class="far fa-save"></i> Guardar </button>
                    </div>
                </form>

                <section class="datos_venta">
                    <h4> Datos de la Venta </h4>
                    <div class="datos">
                        <label for="id venta">
                            ID Venta
                            <input name="nombre" placeholder="Ej: FV-00001" required />
                        </label>
                        <div class="largo50">
                            <label> Nombre del Vendedor </label>
                            <input type="text" name="nombre_cliente" id="nombre_vendedor" required />
                        </div>
                        <div class="largo50">
                            <label> Acciones </label>
                            <div id="acciones_venta">
                                <a href="#" class="boton_anular texto_centrado" id="boton_anular"><i class="far fa-window-close"></i> Cancelar Venta </a>
                                <a href="#" class="boton_crear texto_centrado" id="boton_crear"><i class="fas fa-handshake"></i> Crear Venta </a>
                            </div>
                        </div>
                    </div>
                </section>

                <table class="venta">
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
                            <td id="precio_prod" class="texto_tabla"> 0.00 </td>
                            <td id="precio_prod_total" class="texto_tabla"> 0.00 </td>
                            <td><a href="#" id="agregar_otro_prod" class="link_adicion"><i class="fas fa-cart-plus"></i> Agregar
                                Producto </a></td>
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

                    <tbody class="detalle_venta">
                        <tr>
                            <td> FV04873 </td>
                            <td> Cama Queen Beige - Caoba Roble </td>
                            <td class="texto_centrado"> 1 </td>
                            <td class="texto_tabla"> 1'550.000.00 </td>
                            <td class="texto_tabla"> 1'550.000.00 </td>
                            <td class="">
                                <a class="link_eliminar" href="#" onclick="event.preventDefault(); del_product_detalle(1);"><i
                                    class="far fa-minus-square"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td> FV00056 </td>
                            <td> Silla Isabelina Sencilla </td>
                            <td class="texto_centrado"> 7 </td>
                            <td class="texto_tabla"> 350.000.00 </td>
                            <td class="texto_tabla"> 2'450.000.00 </td>
                            <td class="">
                                <a class="link_eliminar" href="#" onclick="event.preventDefault(); del_product_detalle(1);"><i
                                    class="far fa-minus-square"></i></a>
                            </td>
                        </tr>
                        <tr>
                            <td> FV00452 </td>
                            <td> Sofa Cama Rey Azul Nocturno </td>
                            <td class="texto_centrado"> 1 </td>
                            <td class="texto_tabla"> 1'180.000.00 </td>
                            <td class="texto_tabla"> 1'180.000.00 </td>
                            <td class="">
                                <a class="link_eliminar" href="#" onclick="event.preventDefault(); del_product_detalle(1);"><i
                                    class="far fa-minus-square"></i></a>
                            </td>
                        </tr>
                    </tbody>

                    <tfoot>
                        <tr>
                            <td colspan="4" class="texto_tabla"> SUBTOTAL </td>
                            <td class="texto_tabla"> 5'180.000.00 </td>
                        </tr>
                        <tr>
                            <td colspan="4" class="texto_tabla"> IVA (19%) </td>
                            <td class="texto_tabla"> 984.200.00 </td>
                        </tr>
                        <tr>
                            <td colspan="4" class="texto_tabla"> TOTAL </td>
                            <td class="texto_tabla"> 6'164.200.00 </td>
                        </tr>
                    </tfoot>

                </table>
        </>
    );
}
export default RegistroVentas;
