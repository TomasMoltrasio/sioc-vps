"use client";
import { useState } from "react";
import Cookies from "universal-cookie";

export default function TypeForm() {
  const cookies = new Cookies();
  const [active, setActive] = useState(
    cookies.get("searchParams")?.tipo || "Comprar"
  );

  const tipos = ["Comprar", "Alquilar"];

  const handleClick = (tipo) => {
    const cookie = cookies.get("searchParams");
    cookies.set("searchParams", { ...cookie, tipo });

    setActive(tipo);
  };

  return (
    <ul className="flex flex-row items-center justify-center bg-base-100 p-4 gap-3 w-full md:w-1/3 rounded-t-xl">
      {tipos.map((tipo) => (
        <li
          key={tipo}
          onClick={() => handleClick(tipo)}
          className={`flex flex-row items-center cursor-pointer text-slate-900 justify-center w-full px-2 ${
            active === tipo
              ? `${
                  tipo === "Comprar"
                    ? "bg-primary text-white"
                    : "bg-secondary text-white"
                } p-2 rounded-lg font-medium`
              : `${
                  tipo === "Comprar" ? "hover:bg-primary" : "hover:bg-secondary"
                } bg-white hover:text-white hover:p-2 hover:bg-opacity-50 hover:rounded-lg transition duration-100 ease-linear`
          } 
          `}
        >
          {tipo}
        </li>
      ))}
    </ul>
  );
}
