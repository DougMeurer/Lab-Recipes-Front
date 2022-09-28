import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/user/create", user);
      navigate("/");
    } catch (error) {
      console.log("nao deu", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name: </label>
      <input
        type="string"
        name="name"
        onChange={handleChange}
        value={user.name}
      />
      <br></br>
      <label>e-mail: </label>
      <input
        type="email"
        name="email"
        required
        onChange={handleChange}
        value={user.email}
      />

      <button>Save</button>
    </form>
  );
}

export default UserForm;
