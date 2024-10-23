import { useQuery } from "@tanstack/react-query";

async function getUserData() {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/user.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export function useGetUser() {
  const response = useQuery({ queryKey: ["user"], queryFn: getUserData });
  return {
    ...response,
    user: response.data,
    isUserLoading: response.isLoading,
    isUserError: response.isError,
    isUserSucces: response.isSuccess,
  };
}
