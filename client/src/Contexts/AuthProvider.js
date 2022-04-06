import { createContext, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUser } from "../api";
import Loading from "../components/Loading";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [isLoadingData, setIsLoadingData] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const { data } = useQuery(
    "users",
    async () =>
      await getUser().then((res) => {
        if (res.status === 200) {
          return res;
        }
      }),
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (data !== undefined) {
          const userCurrent = data.data.find(
            (item) => item.email === user.email,
          );
          setUserInfo(userCurrent);
        }
      }
    });
    return () => {
      unsubscribe();
    };
  }, [data]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoadingData(false);
    }, 1000);
    return () => {
      setIsLoadingData(true);
    };
  }, []);

  return (
    <>
      {isLoadingData ? (
        <Loading />
      ) : (
        <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
      )}
    </>
  );
}
