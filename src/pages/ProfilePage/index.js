// import { useState, useEffect } from "react";
// import { api } from "../../api/api";

// function ProfilePage() {
//   const [img, setImg] = useState();
//   const [preview, setPreview] = useState("");
//   const [isLoading, setIsloading] = useState(true);
//   const [user, setUser] = useState({
//     name: "",
//     profilePic: "",
//     favorites: [],
//     dislikes: [],
//     role: "",
//   });

//   function handleImg(e) {
//     setImg(e.target.files[0]);
//   }

//   useEffect(() => {
//     async function fetchUser() {
//       setIsloading(true);
//       try {
//         const response = api.get("/user/profile");
//         setUser(response.data);
//         setIsloading(false);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     fetchUser();
//   }, []);

//   useEffect(() => {
//     if (!img) {
//       setPreview(null);
//       return;
//     }

//     const objUrl = URL.createObjectURL(img);
//     setPreview(objUrl);
//   }, [img]);

//   async function handleUpload() {
//     try {
//       const dataUpload = new FormData();
//       dataUpload.append("images", img);

//       const response = api.post("/upload-image", dataUpload);

//       return response.data.url;
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <>
//       (!isLoading && (
//       <div>
//         <h3>{user.name}</h3> 
//         <label>upload a picture:</label>
//         <input type="file"/>
//         <img src={user.profilePic} width={200} alt="" />
//         <label>Update Picture</label>
//         <input type="file" onChange={handleImg} />
//         <br></br>
//         <label>{user.role}</label>
//         <br></br>
//         <button>{user.favorites}</button>
//         <button>{user.dislikes}</button>
//       </div>
//       ))
//     </>
//   );
// }

// export default ProfilePage;
