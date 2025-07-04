import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import { useAuth } from "./components/AuthContext";

export default function AdminLogin() {
  const { login } = useAuth();
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Login successful:", data);
        login(data.usuario, data.token); // Pass the received token to your auth context
        navigate("/manage");
      } else {
        setError("Credenciales incorrectas");
        console.error("Login failed:", response.statusText);
      }
    } catch (err) {
      setError("Error de conexión");
      console.error("Login error:", err);
    }
  };

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
