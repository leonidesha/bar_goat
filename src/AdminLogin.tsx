import "./AdminLogin.css";
export default function AdminLogin() {
  return (
    <>
      <div className="root-div">
        <div className="container">
          <form>
            <div className="form-row">
              <label htmlFor="usuario">Usuario:</label>
              <input id="usuario" type="text" placeholder="Nombre de usuario" />
            </div>
            <div className="form-row">
              <label htmlFor="password">Contraseña:</label>
              <input id="password" type="password" placeholder="Contraseña" />
            </div>
          </form>
          <div className="btn-container">
            <button className="btn btn-primary" type="submit">
              Iniciar sesión
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
