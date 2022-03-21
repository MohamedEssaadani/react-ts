import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const Auth = () => {
  const [user, setUser] = useState<AuthUser | null>(null);

  const handleLogin = () => {
    setUser({
      name: "Mohamed",
      email: "mohamed@gmail.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && <button onClick={handleLogin}>Login</button>}
      {user && <button onClick={handleLogout}>Logout</button>}
      {user && (
        <>
          <div>User name is : {user?.name!!}</div>
          <div>User Email is : {user?.email!!}</div>
        </>
      )}
    </div>
  );
};

export default Auth;
