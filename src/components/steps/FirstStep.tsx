import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../ui/button";
import { useGetPlans } from "@/api/getPlans/getPlans";
import { FirstStepType, PlanCardType } from "@/types/type";
import Error from "../status/Error";
import Loader from "../status/Loader";

export default function FirstStep({
  setSelectedPlan,
  handleNext,
  selectedOption,
  setSelectedOption,
  user,
}: FirstStepType) {
  const [currentMobileCard, setCurrentMobileCard] = useState(0);

  const { plans, isSuccess, isError, isLoading } = useGetPlans();

  const fechaActual = new Date().getFullYear();
  const fechaNac = new Date(user.birthDay).getFullYear();
  const edad = fechaActual - fechaNac;

  const userPlans = [...plans.filter((plan) => plan.age >= edad)];

  const nextMobileCard = () => {
    setCurrentMobileCard((prev) => (prev + 1) % userPlans.length);
  };

  const prevMobileCard = () => {
    setCurrentMobileCard(
      (prev) => (prev - 1 + userPlans.length) % userPlans.length,
    );
  };

  const precios = [...userPlans].map((plan) => plan.price);

  const precioMax = Math.max(...precios);

  //
  const planRecomendado = [...userPlans].find(
    (plan) => plan.price === precioMax,
  );

  return (
    <div className="space-y-8 text-gray-400">
      <div className="mx-auto w-full max-w-[600px]">
        <div className="space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
              {user.name} ¿Para quién deseas cotizar?
            </h1>
            <p className="">
              Selecciona la opción que se ajuste más a tus necesidades.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card
              className={`box-content cursor-pointer border-2 border-transparent p-6 ${selectedOption === "self" ? "border-2 border-gray-500" : "shadow-xl shadow-gray-50"}`}
              onClick={() => setSelectedOption("self")}
            >
              <div className="flex justify-end">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 ${selectedOption === "self" && "bg-[#379e0e]"}`}
                >
                  {selectedOption === "self" && (
                    <Check className="text-white" size={14} />
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-start justify-center gap-2">
                  <img
                    src="/svg/plansPageSvg/paraMi.svg"
                    alt="icono-plan-para-mi"
                  />

                  <h3 className="font-semibold">Para mí</h3>
                  <p className="text-xs">
                    Cotiza tu seguro de salud y agrega familiares si así lo
                    deseas.
                  </p>
                </div>
              </div>
            </Card>
            <Card
              className={`box-content cursor-pointer border-2 border-transparent p-6 ${selectedOption === "other" ? "border-2 border-gray-500" : "shadow-xl shadow-gray-50"}`}
              onClick={() => setSelectedOption("other")}
            >
              <div className="flex justify-end">
                <div
                  className={`flex h-6 w-6 items-center justify-center rounded-full border border-gray-100 ${selectedOption === "other" && "bg-[#379e0e]"}`}
                >
                  {selectedOption === "other" && (
                    <Check className="text-white" size={14} />
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-start justify-center gap-2">
                  <img
                    src="/svg/plansPageSvg/paraAlguienMas.svg"
                    alt="icono-plan-para-alguien-mas"
                  />

                  <h3 className="font-semibold">Para alguien más</h3>
                  <p className="text-xs">
                    Realiza una cotización para uno de tus familiares o
                    cualquier persona.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="p-4 overflow-hidden md:hidden">
          {isSuccess && selectedOption && !isError && !isLoading && (
            <div className="relative">
              <div
                className="flex gap-4 transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${currentMobileCard * 105}%)`,
                }}
              >
                {userPlans.map((plan, index) => {
                  return (
                    <div key={index} className="flex-shrink-0 w-full">
                      <PlanCard
                        planRecomendado={planRecomendado}
                        selectedOption={selectedOption}
                        handleNext={handleNext}
                        plan={plan}
                        setSelectedPlan={setSelectedPlan}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex items-center justify-center gap-4 mt-4">
                <Button
                  variant="ghost"
                  className="w-8 h-8 p-0 text-gray-200 border border-gray-200 rounded-full"
                  onClick={prevMobileCard}
                >
                  <ChevronLeft />
                </Button>
                <div className="flex gap-2">
                  <span>{currentMobileCard + 1}</span>/
                  <span>{userPlans.length}</span>
                </div>

                <Button
                  variant="ghost"
                  className="w-8 h-8 p-0 text-gray-200 border border-gray-200 rounded-full"
                  onClick={nextMobileCard}
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          )}
          {isLoading && selectedOption && <Loader />}
          {isError && selectedOption && <Error />}
        </div>
      </div>

      <div className="hidden gap-6 md:grid md:grid-cols-3">
        {isSuccess &&
          !isError &&
          !isLoading &&
          selectedOption &&
          userPlans.map((plan, index) => (
            <PlanCard
              planRecomendado={planRecomendado}
              selectedOption={selectedOption}
              setSelectedPlan={setSelectedPlan}
              key={index}
              plan={plan}
              handleNext={handleNext}
            />
          ))}
        {isLoading && <Loader />}
        {isError && selectedOption && (
          <div className="col-span-3">
            <Error />
          </div>
        )}
      </div>
    </div>
  );
}

function PlanCard({
  plan,
  setSelectedPlan,
  handleNext,
  selectedOption,
  planRecomendado,
}: PlanCardType) {
  const discountPrice = plan.price - plan.price * 0.05;

  return (
    <Card className="flex flex-col justify-between h-full px-8 py-10 shadow-xl shadow-gray-50">
      <div>
        {planRecomendado?.price === plan.price && (
          <span className="self-start rounded-full bg-gradient-to-r from-[#00F4E2] to-[#00FF7F] px-2 py-1 text-xs font-bold">
            Plan recomendado
          </span>
        )}
        <div className="py-6 border-b">
          <div className="flex items-center justify-between mb-4 space-x-3">
            <h3 className="text-2xl font-semibold">{plan.name}</h3>
            <img src="/svg/plansPageSvg/homePlan/planCasa.svg" alt="" />
          </div>
          <div className="space-y-1">
            <p className="text-xs text-gray-300">COSTO DEL PLAN</p>
            {selectedOption === "other" ? (
              <div>
                <p className="text-xs text-gray-300 line-through">
                  {plan.price.toLocaleString("es-US", {
                    currency: "USD",
                    style: "currency",
                    maximumFractionDigits: 0,
                  })}{" "}
                  antes
                </p>
                <p className="text-xl font-bold text-gray-400">
                  {discountPrice.toLocaleString("es-US", {
                    currency: "USD",
                    style: "currency",
                  })}{" "}
                  al mes
                </p>
              </div>
            ) : (
              <p className="text-xl font-bold text-gray-400">
                {plan.price.toLocaleString("es-US", {
                  currency: "USD",
                  style: "currency",
                  maximumFractionDigits: 0,
                })}{" "}
                al mes
              </p>
            )}
          </div>
        </div>

        <ul className="pt-6 pb-10 space-y-6">
          {plan.description.map((description, index) => (
            <li key={index} className="space-y-2 list-disc list-outside">
              <span className="text-sm">{description}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button
        onClick={() => {
          handleNext();
          setSelectedPlan(plan);
        }}
        variant={"secondary"}
      >
        Seleccionar Plan
      </Button>
    </Card>
  );
}
