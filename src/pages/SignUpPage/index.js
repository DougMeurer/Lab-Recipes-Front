import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

function SignUpPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("/user/sign-up", form);
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  }
  console.log(form);
  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <label>Password:</label>
      <input
        type="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <button type="submit">Enter</button>
    </form>
  );
}

export default SignUpPage;
