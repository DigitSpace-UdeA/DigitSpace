import Layout from "../layouts/layout";
import '../style/stylesUser.css';

const EliminarUsuario = () => {

    return (
        <>
            <h1 class="titlulo">Eliminar - Modulo de Usuarios y Roles</h1>
            <span>¿Esta seguro que desea eliminar el usuario?</span>
            <div class="section-edit">
                <form action="" class="form-edit">
                    <label class="label-delete">
                        ID
                        <input class="input-delete" type="text" value="1" id="id-user" readonly="readonly" />
                    </label>
                    <label class="label-delete">
                        Usuario
                        <input class="input-delete" type="text" value="Mark" id="Name-user" readonly="readonly" />
                    </label>
                    <label class="label-delete">
                        Rol
                        <input class="input-delete" type="text" value="Vendedor" id="Name-user" readonly="readonly" />
                    </label>
                    <label class="label-delete">
                        Estado
                        <input class="input-delete" type="text" value="Autorizado" id="Name-user" readonly="readonly" />
                    </label>
                    <button class="button-gen btn-submit-edit" type="submit">
                        <i class="fas fa-trash-alt"></i>
                        Confirmar
                    </button>
                </form>
            </div>
        </>
    );
}

export default EliminarUsuario;