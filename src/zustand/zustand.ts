import { ZustandType } from "@/types/type";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useBearStore = create<ZustandType>()(
  persist(
    (set) => ({
      userData: { tipoDocumento: "DNI", documento: "", celular: "" },
      updateUserData: (updates) =>
        set((state) => ({
          userData: {
            ...state.userData,
            ...updates,
          },
        })),
    }),
    {
      name: "user-data",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
