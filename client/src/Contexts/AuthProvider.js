import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUser } from "../api";
import Loading from "../components/Loading";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const { data, isLoading } = useQuery(
    "users",
    async () =>
      await getUser().then((res) => {
        if (res.status === 200) {
          return res;
        }
      }),
  );

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (data !== undefined) {
          const userCurrent = data.data.find(
            (item) => item.email === user.email,
          );
          setUserInfo(userCurrent);
        }
      }
    });
  }, [data]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
      )}
    </>
  );
}
