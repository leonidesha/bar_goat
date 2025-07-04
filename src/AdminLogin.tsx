import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Agrega esto
import "./AdminLogin.css";
import { useAuth } from "./components/AuthContext";

export default function AdminLogin() {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // <-- Agrega esto

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (usuario === "admin" && password === "Asdf.1230") {
      login();
      setError("");
      navigate("/manage"); // <-- Redirige después de login exitoso
    } else {
      setError("Usuario o contraseña incorrectos");
    }
  }

  return (
    <div className="root-div">
      <div className="container">
        <form onSubmit={handleLogin}>
          <div className="form-row">
            <label htmlFor="usuario">Usuario:</label>
            <input
              id="usuario"
              type="text"
              placeholder="Nombre de usuario"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="password">Contraseña:</label>
            <input
              id="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && (
            <div style={{ color: "red", marginBottom: 10 }}>{error}</div>
          )}
          <div className="btn-container">
            <button className="btn btn-primary" type="submit">
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
