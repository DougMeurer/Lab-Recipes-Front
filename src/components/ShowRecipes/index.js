import axios from "axios";
import { useEffect, useState } from "react";

function ShowRecipes() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function getRecipes() {
      try {
        const response = await axios.get(
          "http://localhost:4000/recipe/recipes"
        );

        console.log("sou um array", response.data);
        setRecipes(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getRecipes();
  }, []);

  return (
    <>
      <h3>AVAILABLE RECIPES</h3>
      {!loading &&
        recipes.map((cE) => {
          console.log("cheguei no loading e map", recipes);
          return (
            <div>
              <h3>Title: {cE.title}</h3>
              <label>Cuisine: {cE.cuisine}</label>
              <br></br>
              <span>Difficulty level: {cE.level}</span>
              <br></br>
              <label>Type: {cE.dishType}</label>
              <br></br>
              <label>Preparation Time: {cE.duration}</label>
              <br></br>
              <img width={200} src={cE.image} alt="food" />
              <h2>INGREDIENTS</h2>
              {cE.ingredients.map((ingredient) => {
                return <p>*{ingredient}</p>;
              })}
              <p>Chef: {cE.creator}</p>
            </div>
          );
        })}
    </>
  );
}

export default ShowRecipes;
