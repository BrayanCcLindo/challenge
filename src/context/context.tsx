import { ContextType, FormType } from "@/types/type";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const RimacContext = createContext<ContextType>({} as ContextType);

const initialState = {
  tipoDocumento: "DNI",
  documento: "",
  celular: "",
};

export function RimacProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<FormType>(() => {
    const storedData = localStorage.getItem("formData");
    return storedData ? JSON.parse(storedData) : initialState;
  });

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const updateFormData = (data: FormType) => {
    setFormData((prev) => ({
      ...prev,
      tipoDocumento: data.tipoDocumento,
      documento: data.documento,
      celular: data.celular,
    }));
  };

  return (
    <RimacContext.Provider value={{ formData, updateFormData }}>
      {children}
    </RimacContext.Provider>
  );
}

export function useRimacContext() {
  const data = useContext(RimacContext);

  return data;
}
