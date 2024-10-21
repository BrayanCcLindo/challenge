import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { ReactNode } from "react";

import Layout from "./components/layout/Layout";
import Homepage from "@/pages/Homepage";
import Plans from "./pages/Plans";
import { RimacProvider, useRimacContext } from "./context/context";

function App() {
  const ProtectedRoute = ({ children }: { children: ReactNode }) => {
    const { formData } = useRimacContext();

    if (!(formData.celular && formData.documento)) {
      return <Navigate to={"/"} />;
    }
    return children;
  };

  return (
    <BrowserRouter>
      <RimacProvider>
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
      </RimacProvider>
    </BrowserRouter>
  );
}

export default App;
