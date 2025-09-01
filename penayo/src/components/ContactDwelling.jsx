"use client";

import { BsWhatsapp } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function ContactDwelling({ phone }) {
  const pathname = usePathname();

  const message = `Hola, estoy interesado en el inmueble https://penayo.com.ar${pathname}`;

  return (
    <>
      {phone ? (
        <a
          href={`https://api.whatsapp.com/send?phone=${phone}&text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center cursor-pointer justify-start w-full h-full gap-2 p-4"
        >
          <div className="flex flex-col items-center justify-start w-full h-full gap-2 p-4">
            <BsWhatsapp className="text-6xl text-green-500" />
            <h3 className="text-base font-semibold text-center text-slate-900">
              Escribinos por{" "}
              <b
                className="
        text-base font-semibold text-left text-green-500
        "
              >
                Whatsapp
              </b>{" "}
              web!
            </h3>
          </div>
        </a>
      ) : null}
    </>
  );
}
