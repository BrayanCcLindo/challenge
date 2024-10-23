export type DocumentType = "DNI" | "Pasaporte";

export type FormType = {
  tipoDocumento: DocumentType;
  documento: string;
  celular: string;
  politicaPrivacidad: boolean;
  politicaCommercial: boolean;
};
export type FormType2 = {
  tipoDocumento: DocumentType;
  documento: string;
  celular: string;
};

export type PlanType = {
  name: string;
  price: number;
  description: string[];
  age: number;
};

export type UserType = {
  name: string;
  lastName: string;
  birthDay: string;
};
export type UseGetUserType = {
  // El data puede ser null cuando no hay datos
  data: UserType | null;
  loading: boolean;
  // El error puede ser null cuando no hay error o Error/unknown para casos de error
  error: Error | null;
  fetch: () => Promise<void>;
};

// Tipo para el contexto
export type ContextType = {
  formData: FormType;
  updateFormData: (data: FormType) => void;
};

export type ZustandType = {
  userData: FormType2;
  updateUserData: (updates: Partial<FormType2>) => void;
};

export type SelectedOptionType = "self" | "other" | null;

// Tipo para el primer paso del formulario
export type FirstStepType = {
  user: UserType;
  setSelectedPlan: React.Dispatch<React.SetStateAction<PlanType | null>>;
  handleNext: () => void;
  selectedOption: SelectedOptionType;
  setSelectedOption: React.Dispatch<React.SetStateAction<SelectedOptionType>>;
};

export type PlanCardType = {
  planRecomendado: PlanType | undefined;
  plan: PlanType;
  setSelectedPlan: React.Dispatch<React.SetStateAction<PlanType | null>>;
  handleNext: () => void;
  selectedOption: SelectedOptionType;
};

// Tipo para el segundo paso del formulario
export type SecondStepType = {
  user: UserType;
  selectedPlan: PlanType | null;
  selectedOption: SelectedOptionType;
};
