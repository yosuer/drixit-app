import { notification } from "antd";
import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLoggedUser, loginUser } from "../services/authentication";

interface AuthContextType {
  user: any;
  isFetching: boolean;
  signin: (user: string, password: string) => void;
  signout: () => void;
}

export const AuthContext = createContext<AuthContextType>(null!);

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);
  const [isFetching, setIsFetching] = useState<boolean>(true);
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    const verifyLogin = async () => {
      setIsFetching(true);
      const user = await getLoggedUser();
      if (user) {
        setUser(user);
        navigate(from, { replace: true });
      } else {
        localStorage.removeItem("token");
      }
      setIsFetching(false);
    };
    verifyLogin();
  }, [setUser, from, navigate]);

  const signin = async (email: string, password: string) => {
    const user = await loginUser(email, password);
    if (user) {
      setUser(user);
      navigate(from, { replace: true });
    } else {
      api.error({
        message: "Login error",
        description: "Please provide a valid email address and password.",
        placement: "bottomLeft",
        duration: 3,
      });
    }
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  const value = { user, signin, signout, isFetching };

  return (
    <>
      {contextHolder}
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
}

export default AuthProvider;
