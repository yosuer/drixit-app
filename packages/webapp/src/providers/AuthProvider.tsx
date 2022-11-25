import { createContext, useState } from "react";

interface AuthContextType {
  user: any;
  signin: (user: string, password: string, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (email: string, password: string, callback: VoidFunction) => {
    setUser({ email, password });
    callback();
    // set token
  };

  const signout = (callback: VoidFunction) => {
    setUser(null);
    callback();
    //clean token
  };

  const value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
