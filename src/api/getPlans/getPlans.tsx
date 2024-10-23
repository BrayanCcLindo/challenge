import { PlanType } from "@/types/type";
import { useQuery } from "@tanstack/react-query";

async function getPlansData() {
  const response = await fetch(
    "https://rimac-front-end-challenge.netlify.app/api/plans.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const plans = await response.json();
  return plans.list;
}

export function useGetPlans() {
  const response = useQuery<PlanType[]>({
    queryKey: ["plans"],
    queryFn: getPlansData,
  });
  return { ...response, plans: response.data };
}
