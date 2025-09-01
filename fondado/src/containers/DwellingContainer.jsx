"use client";

// import { fetchDwelling } from "@/services/fetchData";
import LightboxContainer from "./Lightbox";
import dynamic from "next/dynamic";
import DwellingCharacter from "@/components/DwellingCharacter";
import DwellingFeatures from "@/components/DwellingFeatures";
import ContactDwelling from "@/components/ContactDwelling";
import Link from "next/link";
import { TbArrowBackUp } from "react-icons/tb";
import ButtonShare from "@/components/ButtonShare";
import CharacteristicsDwelling from "@/components/CharacteristicsDwelling";
import ServicesDwelling from "@/components/ServicesDwelling";
import { Suspense } from "react";

export default async function DwellingContainer({ data }) {
  // const data = await fetchDwelling(id);

  const Mapa = dynamic(() => import("@/components/Mapa"), {
    loading: () => <p>Cargando...</p>,
    ssr: false,
  });

  const title = [
    data?.dwelling?.subtype,
    "en",
    data?.dwelling?.address?.streetName,
    data?.dwelling?.address?.streetNumber
      ? `N°${data.dwelling.address.streetNumber}`
      : null,
    data?.dwelling?.address?.city,
  ]
    .filter(Boolean)
    .join(" ");

  const description = data?.dwelling?.generalDescription.replace(
    /(<([^>]+)>)/gi,
    ""
  );

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {data?.dwelling !== null ? (
        <>
          <div className="flex flex-row items-center justify-start w-full py-4 px-1">
            <Link
              className="text-base font-semibold text-left text-slate-900 flex flex-row items-center justify-start gap-1"
              href={
                data?.dwelling?.publicationType === "Alquiler"
                  ? "/alquileres"
                  : "/ventas"
              }
            >
              <TbArrowBackUp className="text-xl font-semibold text-left text-slate-900" />
              Volver a{" "}
              {data?.dwelling?.publicationType === "Alquiler"
                ? "Alquileres"
                : "Ventas"}
            </Link>
          </div>
          <Suspense fallback={<p>Cargando...</p>}>
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <LightboxContainer image={data?.dwelling?.images} />
            </div>
          </Suspense>
          <div className="flex flex-col md:flex-row items-center justify-start w-full gap-3">
            <div className="flex flex-col items-start justify-start w-full gap-1 p-2">
              <h4 className="text-xl font-bold text-left text-slate-700 underline underline-offset-4 decoration-primary">
                {data?.dwelling?.publicationType}
              </h4>
              <div className="flex flex-col md:flex-row items-center justify-start h-full gap-2">
                <h2 className="text-2xl md:text-4xl font-normal text-left text-slate-900">
                  {title}
                </h2>
                <ButtonShare />
              </div>
              <p className="text-xs font-normal text-left text-slate-900">
                {`Cod: ${data?.dwelling?.siocId}`}
              </p>
            </div>
            <div className="flex flex-col items-center justify-end h-full w-full lg:w-1/3 gap-1 p-2">
              {data?.dwelling?.price ? (
                <h3 className="text-4xl font-semibold text-center lg:text-right w-full text-primary">
                  {`${data?.dwelling?.currency}${data?.dwelling?.price}`}
                </h3>
              ) : (
                <h3 className="text-2xl font-bold text-left text-slate-900">
                  {`Consulte precio`}
                </h3>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start justify-center w-full p-2 mt-3 lg:mt-0 lg:p-4">
            <div className="flex flex-col items-center justify-start w-full h-full gap-2 md:w-1/2">
              <DwellingCharacter
                subtype={data?.dwelling?.subtype}
                spaces={data?.dwelling?.spaces}
              />

              <div className="flex flex-col items-start justify-start w-full gap-1 pr-2 py-2">
                <p
                  dangerouslySetInnerHTML={{ __html: description }}
                  className="text-base font-normal text-left text-slate-900 first-letter:uppercase"
                ></p>
              </div>
              <DwellingFeatures features={data?.dwelling?.features} />
              <div className="flex flex-col lg:flex-row items-start justify-start w-full gap-2 py-2 pr-2">
                <CharacteristicsDwelling features={data?.dwelling?.features} />
                <div className="divider lg:divider-horizontal"></div>
                <ServicesDwelling services={data?.dwelling?.services} />
              </div>
            </div>

            <div className="flex h-full w-full md:w-1/2">
              <Suspense fallback={<p>Cargando...</p>}>
                <Mapa
                  lat={data?.dwelling?.address.latitude}
                  alt={data?.dwelling?.address.altitude}
                />
              </Suspense>
            </div>
          </div>
          <div className="divider"></div>
          <div className="flex">
            <h3 className="text-2xl font-semibold text-center text-slate-900">
              ¿Querés saber más sobre esta propiedad?
            </h3>
          </div>

          <ContactDwelling phone={data?.dwelling?.createdBy?.whatsapp} />
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <h3 className="text-2xl font-semibold text-center text-slate-900">
            No se encontró la propiedad
          </h3>
        </div>
      )}
    </div>
  );
}
