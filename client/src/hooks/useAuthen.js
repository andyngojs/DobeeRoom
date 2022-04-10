import React, { useCallback } from "react";
import { useQuery } from "react-query";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { getUser } from "../api";

export default function useAuthen() {
  const findUser = useCallback(
    (res) =>
      new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const userCurrent = res.data.find(
              (item) => item.email === user.email,
            );
            resolve(userCurrent);
          }
        });
      }),
    [],
  );

  const { data, isLoading } = useQuery(
    "users",
    async () => {
      const res = await getUser();
      const returnData = await findUser(res);
      return returnData;
    },
    {
      staleTime: 600000,
      cacheTime: 86400,
      retry: 3,
    },
  );
  return {
    data,
    isLoading,
  };
}
