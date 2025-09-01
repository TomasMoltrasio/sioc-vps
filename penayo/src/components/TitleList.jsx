import SelectOrder from "@/components/SelectOrder";
import { option } from "@/services/selecciones";

export default function TitleList({ tipoPublicacion, total }) {
  return (
    <div className="flex items-center justify-between w-full mt-4 md:mt-0 mb-6">
      <div className="flex flex-col">
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">
          Propiedades en {tipoPublicacion}
        </h1>
        <p className="text-sm text-slate-600">
          {total} propiedades encontradas
        </p>
      </div>
      <SelectOrder options={option} />
    </div>
  );
}
