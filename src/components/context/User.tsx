import { useContext } from "react";
import { AuthUserContext } from "./UserContext";

const User = () => {
  const authUserContext = useContext(AuthUserContext);

  const handleLogin = () => {
    if (authUserContext) {
      authUserContext.setUser({
        name: "Mohamed",
        email: "med@gmail.com",
      });
    }
  };

  const handleLogout = () => {
    if (authUserContext) {
      authUserContext.setUser(null);
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is : {authUserContext?.user?.name}</div>
      <div>User Email is : {authUserContext?.user?.email}</div>
    </div>
  );
};

export default User;
