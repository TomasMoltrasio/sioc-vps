"use client";
import Cookies from "universal-cookie";
import {
  transformName,
  transformOptions,
  defaultValue,
} from "@/services/transform";

export default function SelectForm({ selecciones }) {
  const { name, options } = selecciones;

  const cookies = new Cookies();

  const handleChange = (e) => {
    const cookie = cookies.get("searchParams");
    if (e.target.value === "") {
      delete cookie[transformName(name)];
      cookies.set("searchParams", { ...cookie });
      return;
    }

    const searchParams = transformOptions(name, e.target.value);

    cookies.set("searchParams", { ...cookie, ...searchParams });
  };

  const value = (name) => {
    return cookies.get("searchParams") === undefined
      ? ""
      : cookies.get("searchParams")[transformName(name)] !== undefined
      ? defaultValue(cookies.get("searchParams"), name)
      : "";
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-semibold text-base">{name}</span>
      </label>
      <select
        name={name}
        onChange={(e) => handleChange(e)}
        defaultValue={value(name)}
        className="select select-bordered text-slate-900"
      >
        <option selected value="">
          Elige una opción
        </option>
        {options.map((seleccion) => (
          <option value={seleccion} key={`${name}-${seleccion}`}>
            {seleccion === "0" ? "Monoambiente" : seleccion}
          </option>
        ))}
      </select>
    </div>
  );
}
