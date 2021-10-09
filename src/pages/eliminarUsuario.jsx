import Layout from "../layouts/layout";
import '../style/stylesUser.css';

const EliminarUsuario = () => {

    return (
        <>
            <h1 className="titlulo">Eliminar - Modulo de Usuarios y Roles</h1>
            <span>¿Esta seguro que desea eliminar el usuario?</span>
            <div className="section-edit">
                <form action="" className="form-edit">
                    <label className="label-delete">
                        ID
                        <input className="input-delete" type="text" value="1" id="id-user" readonly="readonly" />
                    </label>
                    <label className="label-delete">
                        Usuario
                        <input className="input-delete" type="text" value="Mark" id="Name-user" readonly="readonly" />
                    </label>
                    <label className="label-delete">
                        Rol
                        <input className="input-delete" type="text" value="Vendedor" id="Name-user" readonly="readonly" />
                    </label>
                    <label className="label-delete">
                        Estado
                        <input className="input-delete" type="text" value="Autorizado" id="Name-user" readonly="readonly" />
                    </label>
                    <button className="button-gen btn-submit-edit" type="submit">
                        <i className="fas fa-trash-alt"></i>
                        Confirmar
                    </button>
                </form>
            </div>
        </>
    );
}

export default EliminarUsuario;