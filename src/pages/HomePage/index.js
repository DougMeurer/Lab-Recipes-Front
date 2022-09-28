// import Webcam from "react-webcam";
import ShowRecipes from "../../components/ShowRecipes";

function HomePage() {
  return (
    <div>
      <h1>WELCOME TO CHEF'S TABLE!</h1>
      {/* <h3>DIGA OI PARA A CAMERA</h3>
      <Webcam width={200}></Webcam> */}

      <p>
        A place where you can discover and share new recipes and your passion
        for cooking.
      </p>
      <br></br>
      <h5>Create a profile and make the most of our space!</h5>
      <ShowRecipes />
    </div>
  );
}

export default HomePage;
