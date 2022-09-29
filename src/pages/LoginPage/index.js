import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";
import { AuthContext } from "../../context/authContext";

function LoginPage() {
  const [user, setUser] = useState({ email: "", password: "" });

  const { setLoggedUser } = useContext(AuthContext); // this is to double check

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", user);
      console.log(response);
      localStorage.setItem("loggedUser", JSON.stringify(response.data));
      setLoggedUser(response.data); // response.data is the token + user {}
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h3>Login In</h3>

      <form onSubmit={handleSubmit}>
        <label>e-mail:</label>
        <input
          type="text"
          name="email"
          required
          value={user.email}
          onChange={handleChange}
        />

        <label>password:</label>
        <input
          type="password"
          name="password"
          required
          value={user.password}
          onChange={handleChange}
        />

        <button type="submit">
          <strong>CLICK HERE </strong>
        </button>
      </form>
    </>
  );
}

export default LoginPage;
