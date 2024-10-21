import { PlanType } from "@/types/type";
import { useState, useEffect } from "react";
// import '../data/data.json'

export function useGetPlans() {
  const [plans, setPlans] = useState<PlanType[]>([]);
  const [status, setStatus] = useState("idle");
  const isLoading = status === "pending";
  const isSuccess = status === "success";
  const isError = status === "error";

  useEffect(() => {
    setStatus("pending");
    fetch("https://rimac-front-end-challenge.netlify.app/api/plans.json")
      .then((response) => response.json())
      .then((data) => {
        setPlans(data.list);
        setStatus("success");
      })
      .catch(() => setStatus("error"));
  }, []);
  return { plans, isLoading, isSuccess, isError };
}
