import { useState } from "react";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import SecondStep from "@/components/steps/SecondStep";
import { PlanType } from "@/types/type";
import { useNavigate } from "react-router-dom";
import FirstStep from "@/components/steps/FirstStep";
import { useGetUser } from "@/api/getUser/getUser";
import Loader from "@/components/status/Loader";
import Error from "@/components/status/Error";

const steps = [
  { id: 1, title: "Planes y coberturas" },
  { id: 2, title: "Resumen" },
];

export default function Component() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<PlanType | null>(null);
  const [selectedOption, setSelectedOption] = useState<"self" | "other" | null>(
    null,
  );
  const { user, isUserLoading, isUserError, isUserSuccess } = useGetUser();

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen w-full space-y-10 bg-[#F8F7FF] font-lato text-gray-400">
      <nav className="mb-4 flex items-center justify-center bg-[#EDEFFC] p-4">
        <div className="items-center hidden space-x-2 text-sm md:flex">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center gap-4">
              <div
                className={`flex items-center ${
                  step.id === activeStep ? "text font-medium" : "text-gray-300"
                }`}
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-full ${
                    step.id === activeStep
                      ? "bg-[#4f4fff] text-white"
                      : step.id < activeStep
                        ? "bg-[#4f4fff] text-white"
                        : "border-2 border-gray-300 text-gray-300"
                  }`}
                >
                  {step.id}
                </span>
                <span className="ml-2">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <span className="text-gray-300">• • • •</span>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-4 text-xs font-medium md:hidden">
          <Button
            onClick={handleBack}
            variant="ghost"
            className="w-8 h-8 p-0 text-gray-200 border-2 border-gray-200 rounded-full"
          >
            <ChevronLeft />
          </Button>
          <p>
            Paso {activeStep} de {steps.length}
          </p>
        </div>
      </nav>

      <main className="mx-auto max-w-[928px] space-y-10 p-6">
        <Button
          onClick={handleBack}
          variant="ghost"
          className="p-0 text-[#4f4fff]"
        >
          <ArrowLeft className="w-4 h-4" /> Volver
        </Button>

        {isUserSuccess && user && !isUserLoading && !isUserError && (
          <>
            {activeStep === 1 && (
              <FirstStep
                user={user}
                setSelectedPlan={setSelectedPlan}
                handleNext={handleNext}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
              />
            )}
            {activeStep === 2 && (
              <SecondStep
                user={user}
                selectedPlan={selectedPlan}
                selectedOption={selectedOption}
              />
            )}
          </>
        )}
        {isUserLoading && <Loader />}
        {isUserError && <Error />}
      </main>
    </div>
  );
}
