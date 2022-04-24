import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUser } from "../api";

export default function useAuthen() {
  const navigate = useNavigate()

  const findUser = (res) =>
    new Promise((resolve, reject) => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const userCurrent = res.data.find(
            (item) => item.email === user.email,
          );
          resolve(userCurrent);
        }
        reject();
      });
    });

  const { data, isLoading } = useQuery(
    "users",
    async () => {
      const res = await getUser();
      const returnData = await findUser(res)
        .then((userCurrent) => {
          return userCurrent;
        })
        .catch(() => {
          console.warn("[Warning] - User Not Login !");
          navigate('/login')
        });
      return returnData;
    },
    {
      staleTime: 30 * 60 * 1000,
      cacheTime: 86400,
      retry: 2,
    },
  );
  return {
    data,
    isLoading,
  };
}
