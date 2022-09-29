import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

function ProtectedRoute({ Component }) {
  const { loggedUser } = useContext(AuthContext);
  loggedUser ? <Component /> : <Navigate to="/login" />;
}
export default ProtectedRoute;
