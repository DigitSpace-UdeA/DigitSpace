import Layout from "../layouts/layout";
import '../style/stylesUser.css';
const EditarUsuario = () => {

    return (
        <>
        {/* <Layout> */}
            <h2 className="titulo">Editar - Modulo de Usuarios y Roles</h2>
            <div className="section-edit">
                <form action="" className="form-edit">
                    <label>
                        <i className="fas fa-id-card"></i>
                        ID
                        <input className="input-edit" type="text" value="1" id="id-user" readonly="readonly" />
                    </label>
                    <label>
                        <i className="fas fa-user-tie"></i>
                        Usuario
                        <input className="input-edit" type="text" value="Mark" id="Name-user" readonly="readonly" />
                    </label>
                    <label>
                        <i className="fas fa-briefcase"></i>
                        Rol
                        <select className="input-edit">
                            <option>Vendedor</option>
                            <option>Administrador</option>
                        </select>
                    </label>
                    <label>
                        <i className="fas fa-unlock-alt"></i>
                        Estado
                        <select className="input-edit">
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>
                    </label>
                    <button className="button-gen btn-submit-edit" type="submit">
                        <i className="fas fa-save"></i>
                        Guardar
                    </button>
                </form>
            </div>
       {/*  </Layout> */}
      </>
    );

}

export default EditarUsuario;
