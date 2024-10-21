import { UserType } from "@/types/type";
import { useEffect, useState } from "react";

export function useGetUser() {
  const [user, setUser] = useState<UserType | null>(null);
  const [status, setStatus] = useState("idle");
  const isUserLoading = status === "pending";
  const isUserSuccess = status === "success";
  const isUserError = status === "error";

  useEffect(() => {
    setStatus("pending");
    fetch("https://rimac-front-end-challenge.netlify.app/api/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);
  return { user, isUserLoading, isUserSuccess, isUserError };
}
