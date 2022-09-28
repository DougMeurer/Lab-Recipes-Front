import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function RecipeForm() {
  const [form, setForm] = useState({
    title: "",
    level: "",
    ingredients: [""],
    cuisine: "",
    dishType: "",
    image: "",
    duration: 0,
    creator: "",
    likes: 0,
    dislikes: 0,
  });

  const navigate = useNavigate()

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/recipe/create", form);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input
        id="title"
        name="title"
        type="text"
        required
        onChange={handleChange}
        value={form.title}
      />
      <br></br>
      <label htmlFor="level">Level of Difficulty:</label>
      <input
        id="level"
        name="level"
        type="text"
        required
        onChange={handleChange}
        value={form.level}
      />
      <br></br>
      <label htmlFor="ingredients">Ingredients:</label>
      <input
        id="ingredients"
        name="ingredients"
        type="text"
        required
        onChange={handleChange}
        value={form.ingredients}
      />
      <br></br>
      <label htmlFor="cuisine">Cuisine:</label>
      <input
        id="cuisine"
        name="cuisine"
        type="text"
        required
        onChange={handleChange}
        value={form.cuisine}
      />
      <br></br>
      <label htmlFor="dishType">Dish Origin:</label>
      <input
        id="dishType"
        name="dishType"
        type="text"
        required
        onChange={handleChange}
        value={form.dishtype}
      />
      <br></br>
      <label htmlFor="duration">Preparation Time:</label>
      <input
        id="duration"
        name="duration"
        type="number"
        required
        onChange={handleChange}
        value={form.duration}
      />
      <br></br>
      <label htmlFor="creator">Chef:</label>
      <input
        id="creator"
        name="creator"
        type="text"
        required
        onChange={handleChange}
        value={form.creator}
      />
      <br></br>
      <label htmlFor="likes">Likes</label>
      <span
        id="likes"
        name="likes"
        type="number"
        onChange={handleChange}
        value={form.likes}
      />
      <br></br>
      <label htmlFor="dislikes">Dislikes</label>
      <span
        id="dislikes"
        name="dislikes"
        type="number"
        onChange={handleChange}
        value={form.dislikes}
      />
      <br></br>
      <button>Save</button>
    </form>
  );
}

export default RecipeForm;
