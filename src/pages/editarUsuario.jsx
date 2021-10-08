import Layout from "../layouts/layout";
import '../style/stylesUser.css';
const EditarUsuario = () => {

    return (
        <>
        {/* <Layout> */}
            <h2 class="titlulo">Editar - Modulo de Usuarios y Roles</h2>

            <div class="section-edit">
                <form action="" class="form-edit">

                    <label>
                        <i class="fas fa-id-card"></i>
                        ID
                        <input class="input-edit" type="text" value="1" id="id-user" readonly="readonly" />
                    </label>
                    <label>
                        <i class="fas fa-user-tie"></i>
                        Usuario
                        <input class="input-edit" type="text" value="Mark" id="Name-user" readonly="readonly" />
                    </label>
                    <label>
                        <i class="fas fa-briefcase"></i>
                        Rol
                        <select class="input-edit">
                            <option>Vendedor</option>
                            <option>Administrador</option>
                        </select>
                    </label>
                    <label>
                        <i class="fas fa-unlock-alt"></i>
                        Estado
                        <select class="input-edit">
                            <option>Autorizado</option>
                            <option>No Autorizado</option>
                        </select>
                    </label>
                    <button class="button-gen btn-submit-edit" type="submit">
                        <i class="fas fa-save"></i>
                        Guardar
                    </button>
                </form>
            </div>
       {/*  </Layout> */}
      </>
    );

}

export default EditarUsuario;
