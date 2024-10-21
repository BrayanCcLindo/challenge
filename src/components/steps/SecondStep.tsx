import { useRimacContext } from "@/context/context";
import { SecondStepType } from "@/types/type";

export default function SecondStep({
  selectedPlan,
  selectedOption,
  user,
}: SecondStepType) {
  const { formData } = useRimacContext();
  if (!selectedPlan) return;
  const discountPrice = selectedPlan.price - selectedPlan.price * 0.05;

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-gray-400">Resumen del seguro</h1>
      <div className="p-6 space-y-4 bg-white shadow-lg rounded-3xl shadow-gray-50">
        <div className="space-y-2 border-b">
          <h2 className="mb-4 text-sm font-semibold">
            PRECIOS CALCULADOS PARA:
          </h2>
          <div className="flex items-baseline gap-2">
            <img src="/svg/user-icon.svg" alt="" />
            <h3 className="mb-4 text-xl font-semibold">
              {user.name} {user.lastName}
            </h3>
          </div>
        </div>
        <div className="space-y-1">
          <h4 className="mb-2 font-bold">Responsable de pago</h4>
          <p>
            {formData.tipoDocumento}: {formData.documento}
          </p>
          <p>Celular: {formData.celular}</p>
        </div>
        <div className="space-y-1">
          <h4 className="mb-2 font-bold">Plan elegido</h4>
          <p>{selectedPlan.name}</p>
          <p>
            Costo del Plan:{" "}
            {selectedOption === "other"
              ? discountPrice.toLocaleString("es-US", {
                  currency: "USD",
                  style: "currency",
                })
              : selectedPlan.price.toLocaleString("es-US", {
                  currency: "USD",
                  style: "currency",
                  maximumFractionDigits: 0,
                })}{" "}
            al mes
          </p>
        </div>
      </div>
    </div>
  );
}
