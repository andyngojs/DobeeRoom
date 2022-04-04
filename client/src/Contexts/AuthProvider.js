import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUser } from "../api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const { data } = useQuery("users", async () => await getUser());

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userCurrent = data.data.find((item) => item.email === user.email);
        setUserInfo(userCurrent);
      }
    });
  }, [data]);

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
}
