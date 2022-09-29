// import Webcam from "react-webcam";
import SignUpPage from "../SignUpPage";
import { useEffect, useState } from "react";
import { api } from "../../api/api";
import LoginPage from "../LoginPage";

function HomePage() {
  const [recipes, setRecipes] = useState();
  const [loading, setloading] = useState(true);
  const [user, setUser] = useState();
  const [reload, setReload] = useState(true);


  useEffect(() => {
    setloading(true);
    async function allRecipes() {
      try {
        const response = await api.get("/recipe/recipes");
        const user = await api.get("/user/profile");
        setUser(user.data);

        setRecipes(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    }
    allRecipes();
  }, [reload]);


  async function addToDislikes(recipeId) {
    try {
      await api.put(`/user/deleteFavorite/${recipeId}`);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  async function addToLikes(recipeId) {
    try {
      await api.post(`/user/addFavorite/${recipeId}`);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  console.log(user);

  return (
    <div>
      <h1>WELCOME TO CHEF'S TABLE!</h1>
      <h3>DIGA OI PARA A CAMERA</h3>
      {/* <Webcam width={200}></Webcam> */}

      <p>
        A place where you can discover and share new recipes and your passion
        for cooking.
      </p>
      <br></br>
      <h5>Create a profile and make the most of our space!</h5>

      <SignUpPage />
      <LoginPage />

      {!loading &&
        recipes.map((recipe) => {
          return (
            <>
              <div>
                <label>Creator: {recipe.creator}</label>
                <label>Cuisine: {recipe.cuisine}</label>
                <label>Dish Type: {recipe.dishType}</label>
                <img src={recipe.image} alt="" width={100} />
                {!user.favorites.includes(recipe._id) && (
                  <button
                    onClick={() => {
                      addToLikes(recipe._id);
                    }}
                  >
                    Add To Likes
                  </button>
                )}

                {user.favorites.includes(recipe._id) && (
                  <button
                    onClick={() => {
                      addToDislikes(recipe._id);
                    }}
                  >
                    Remove From Likes
                  </button>
                )}
              </div>
            </>
          );
        })}
    </div>
  );
}

export default HomePage;
