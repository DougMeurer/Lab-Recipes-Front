import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthContextComponent(props) {
  const [loggedUser, seetLoggedUser] = useState({
    token: "",
    user: {},
  });

  return (
    <AuthContext.Provider value={{ loggedUser, seetLoggedUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextComponent };
