import { useForm, Controller } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { FloatingLabelInput } from "./FloatingInputs";
import { useRimacContext } from "@/context/context";
import { FormType } from "@/types/type";
import { useNavigate } from "react-router-dom";

export default function LandingForm() {
  const { updateFormData } = useRimacContext();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: {
      tipoDocumento: "DNI",
      documento: "",
      celular: "",
      politicaPrivacidad: false,
      politicaCommercial: false,
    },
  });

  const onSubmit = (data: FormType) => {
    updateFormData(data);
    navigate("/plans");
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 text-sm text-gray-500"
    >
      <div className="space-y-4">
        <div>
          <div className="flex">
            <Controller
              name="tipoDocumento"
              control={control}
              rules={{ required: "Este campo es requerido" }}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-[140px] border border-r-0 border-gray-500 p-4">
                    <SelectValue placeholder="Tipo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="DNI">DNI</SelectItem>
                    <SelectItem value="Pasaporte">Pasaporte</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            <Controller
              name="documento"
              control={control}
              rules={{
                required: "Este campo es requerido",
                minLength: { value: 8, message: "Mínimo 8 caracteres" },
                maxLength: { value: 20, message: "Máximo 20 caracteres" },
              }}
              render={({ field }) => (
                <FloatingLabelInput
                  label="Nro. de documento"
                  {...field}
                  className="rounded-l-none"
                />
              )}
            />
          </div>
          {errors.documento && (
            <p className="text-sm text-red-500 absoulute">
              {errors.documento.message}
            </p>
          )}
        </div>
        <div>
          <Controller
            name="celular"
            control={control}
            rules={{
              required: "Este campo es requerido",
              pattern: {
                value: /^[0-9]{9}$/,
                message: "Debe ser un número de 9 dígitos",
              },
            }}
            render={({ field }) => (
              <FloatingLabelInput
                label="Celular"
                {...field}
                type="tel"
                className="w-full"
                name="celular"
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^\d*\.?\d*$/.test(value)) {
                    setValue("celular", value);
                  }
                }}
              />
            )}
          />
          {errors.celular && (
            <p className="text-sm text-red-500">{errors.celular.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-4 text-sm">
        <div>
          <Controller
            name="politicaPrivacidad"
            control={control}
            rules={{ required: "Debes aceptar la Política de Privacidad" }}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="politicaPrivacidad"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label htmlFor="acceptPrivacy">
                  Acepto la Política de Privacidad
                </Label>
              </div>
            )}
          />
          {errors.politicaPrivacidad && (
            <p className="text-sm text-red-500">
              {errors.politicaPrivacidad.message}
            </p>
          )}
        </div>
        <div>
          <Controller
            name="politicaCommercial"
            control={control}
            rules={{
              required:
                "Debes aceptar la Política de Comunicaciones Comerciales",
            }}
            render={({ field }) => (
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="politicaCommercial"
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
                <Label htmlFor="acceptCommercial" className="text-sm">
                  Acepto la Política Comunicaciones Comerciales
                </Label>
              </div>
            )}
          />
          {errors.politicaCommercial && (
            <p className="text-sm text-red-500">
              {errors.politicaCommercial.message}
            </p>
          )}
        </div>

        <p className="">
          <a href="#" className="text-xs font-semibold underline sm:text-sm">
            Aplican Términos y Condiciones
          </a>
          .
        </p>
      </div>
      <div className="flex items-start justify-start">
        <Button type="submit" className="hidden md:block">
          Cotiza aquí
        </Button>
        <Button type="submit" className="w-full md:hidden">
          Cotiza aquí
        </Button>
      </div>
    </form>
  );
}
