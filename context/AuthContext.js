import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import axios from "axios";
import { useRouter } from "next/router";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const { data } = await axios.get("/api/protected");
        setUser(data.user);
      } catch (err) {
        setUser(null);
      }
    };
    checkUser();
  }, []);
  const logout = async () => {
    await axios.post("/api/logout");
    setUser(null);
    router.push("/login");
  };

  return (
    <AuthContext.Provider value={{ user, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
