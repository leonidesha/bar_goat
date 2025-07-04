import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function PrivateRoute({ children }: { children: JSX.Element }) {
  const { isAuth } = useAuth();
  return isAuth ? children : <Navigate to="/admin" replace />;
}
