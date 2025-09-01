export default function CharacteristicsDwelling({ features }) {
  return (
    <div className="flex flex-col items-start justify-start h-full w-full lg:w-1/2 p-2 gap-1">
      <h3 className="text-xl font-semibold text-center text-slate-900">
        Características
      </h3>
      {features?.status !== "Desconocido" ? (
        <p className="text-base font-normal text-left text-slate-900">
          Estado: {features?.status}
        </p>
      ) : null}
      {features?.antiquity !== "Desconocida" ? (
        <p className="text-base font-normal text-left text-slate-900">
          Antigüedad: {features?.antiquity}
        </p>
      ) : null}
      {features?.orientation !== "Desconocida" ? (
        <p className="text-base font-normal text-left text-slate-900">
          Orientación: {features?.orientation}
        </p>
      ) : null}
      {features?.luminosity !== "Desconocida" ? (
        <p className="text-base font-normal text-left text-slate-900">
          Luminosidad: {features?.luminosity}
        </p>
      ) : null}
      {features?.floor > 0 ? (
        <p className="text-base font-normal text-left text-slate-900">
          Piso: {features?.floor}
        </p>
      ) : null}
      {features?.elevator !== false ? (
        <p className="text-base font-normal text-left text-slate-900">
          Elevador: {features?.elevator}
        </p>
      ) : null}
      {features?.heating?.length > 0 ? (
        <p className="text-base font-normal text-left text-slate-900">
          Calefacción: {features?.heating[0].value}
        </p>
      ) : null}
    </div>
  );
}
