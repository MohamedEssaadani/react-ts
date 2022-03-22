import { createContext, ReactNode, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type AuthUserContextProviderProps = {
  children: ReactNode;
};

type AuthUserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

// create context
export const AuthUserContext = createContext<AuthUserContextType | null>(null);

// provide context
const AuthUserContextProvider = ({
  children,
}: AuthUserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <AuthUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
