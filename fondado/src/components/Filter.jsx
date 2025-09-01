"use client";

import OptionFilter from "./OptionFilter";
import { selecciones } from "../services/selecciones";
import ButtonFilter from "./ButtonFilter";

export default function Filter() {
  return (
    <>
      <ul className="menu menu-vertical bg-base-100 rounded-lg border shadow-2xs text-slate-900 w-full">
        {selecciones.map((seleccion) => (
          <OptionFilter key={seleccion.name} selecciones={seleccion} />
        ))}
      </ul>
      <ButtonFilter />
    </>
  );
}
