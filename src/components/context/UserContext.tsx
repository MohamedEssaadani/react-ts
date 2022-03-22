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

/**
 *  * Create Context
 */
export const AuthUserContext = createContext<AuthUserContextType | null>(null);

/**
 *  * Provide Context
 */
const AuthUserContextProvider = ({
  children,
}: AuthUserContextProviderProps) => {
  /**
   *  * Hooks
   */
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <AuthUserContext.Provider value={{ user, setUser }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export default AuthUserContextProvider;
