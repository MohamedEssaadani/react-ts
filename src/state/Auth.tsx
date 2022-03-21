import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const Auth = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const handleLogin = () => {
    setUser({
      name: "Mohamed",
      email: "mohamed@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser({} as AuthUser);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is : {user.name!!}</div>
      <div>User Email is : {user.email!!}</div>
    </div>
  );
};

export default Auth;
