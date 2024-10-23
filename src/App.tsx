import { Route, Routes, Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Layout from "./components/layout/Layout";
import Homepage from "@/pages/Homepage";
import Plans from "./pages/Plans";
import { useBearStore } from "./zustand/zustand";

const queryClient = new QueryClient();

function App() {
  const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { userData } = useBearStore();

    if (!(userData.celular && userData.documento)) {
      return <Navigate to={"/"} />;
    }
    return children;
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/plans"
            element={
              <ProtectedRoute>
                <Plans />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
