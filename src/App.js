import { Routes, Route } from "react-router-dom";
import "./App.css";
import UserForm from "./components/UserForm";
import HomePage from "./pages/HomePage";
import RecipeForm from "./components/RecipeForm";
import { AuthContextComponent } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/createUser" element={<UserForm />} />
          <Route path="/createRecipe" element={<RecipeForm />} />
        </Routes>
      </AuthContextComponent>
    </div>
  );
}

export default App;
