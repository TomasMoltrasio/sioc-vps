import Image from "next/image";
import { LuBed, LuBath, LuHouse, LuMapPin } from "react-icons/lu";
import ButtonMoreDetails from "./ButtonMoreDetails";
import Link from "next/link";

export default function CardDwelling({ dwelling }) {
  const {
    address,
    price,
    currency,
    features,
    spaces,
    images,
    subtype,
    publicationType,
    updatedAt,
    siocId,
  } = dwelling;

  const calcularDiferencia = (fecha) => {
    const hoy = new Date();
    const fechaPublicacion = new Date(fecha);
    const diferencia = hoy.getTime() - fechaPublicacion.getTime();
    const dias = Math.round(diferencia / (1000 * 60 * 60 * 24));
    const meses = Math.round(dias / 30);
    return { dias, meses };
  };

  const priceTextColor =
    publicationType === "Alquiler" ? "text-secondary" : "text-primary";

  // Extraer info de la imagen para optimizar con Cloudinary (ejemplo: resize, formato webp)
  const getOptimizedImageUrl = (
    url,
    width = 600,
    height = 400,
    quality = 100
  ) => {
    // Solo optimiza si es de Cloudinary
    if (!url.includes("cloudinary.com")) return url;
    // Busca el segmento de upload/ para insertar transformaciones
    const parts = url.split("/upload/");
    if (parts.length !== 2) return url;
    // Puedes ajustar los parámetros de transformación según tus necesidades
    const transformation = `f_auto,q_${quality},w_${width},h_${height},c_fill`;
    return `${parts[0]}/upload/${transformation}/${parts[1]}`;
  };

  // Función para formatear el precio con puntos como separador de miles
  const formatPrice = (value) => {
    if (typeof value !== "number") return value;
    return value.toLocaleString("es-AR");
  };

  return (
    <Link
      key={siocId}
      href={`/dwelling/${siocId}`}
      className="group rounded-lg w-full cursor-pointer bg-white border  shadow-2xs hover:shadow-xl  text-slate-900 overflow-hidden ease-in-out duration-500"
    >
      <div className="relative w-full h-[250px]">
        <Image
          src={getOptimizedImageUrl(images[0].secure_url, 400, 250, 100)}
          alt="dwelling image"
          fill
          className="cover transform transition duration-500 ease-in-out relative"
        />
        <ButtonMoreDetails href={siocId} publicationType={publicationType} />
      </div>
      <div className="p-6">
        <h3
          className={`text-lg mb-2 font-medium ease-in-out duration-300 ${
            publicationType === "Alquiler"
              ? "hover:text-secondary group-hover:text-secondary"
              : "hover:text-primary group-hover:text-primary"
          }`}
        >
          {`${subtype} en ${publicationType}`}
        </h3>
        <div className="flex justify-start mb-3 items-center">
          <LuMapPin className="text-gray-600 text-sm mr-2" />
          <span className="text-sm font-normal ease-in-out duration-500">
            {address &&
            (address.streetName || address.streetNumber || address.city)
              ? (() => {
                  const { streetName, streetNumber, city } = address;
                  let result = "";
                  if (streetName) result += streetName;
                  if (streetNumber)
                    result += `${streetName ? " " : ""}N°${streetNumber}`;
                  if (city) {
                    if (streetName || streetNumber) {
                      result += `, ${city}`;
                    } else {
                      result += city;
                    }
                  }
                  return result;
                })()
              : ""}
          </span>
        </div>

        <ul className="text-base flex items-center list-none mb-4">
          {features?.coveredSurface >= 0 ? (
            <li className="flex items-center me-4 text-sm">
              <LuHouse className="me-2 text-gray-600 text-sm" />
              {features.coveredSurface} m2
            </li>
          ) : null}
          {spaces?.bedrooms > 0 ||
          (spaces?.bedrooms >= 0 && subtype === "Departamento") ? (
            <li className="flex items-center me-4 text-sm">
              <LuBed className="me-2 text-gray-600" />
              {spaces?.bedrooms === 0 && subtype === "Departamento"
                ? "Monoambiente"
                : spaces.bedrooms}
            </li>
          ) : null}
          {spaces?.bathRoom > 0 ? (
            <li className="flex items-center me-4 text-sm">
              <LuBath className="me-2 text-gray-600" />
              {spaces.bathRoom}
            </li>
          ) : null}
        </ul>
        <span
          className={`text-2xl font-bold ${
            publicationType === "Alquiler" ? "text-secondary" : "text-primary"
          } me-4`}
        >
          {currency + formatPrice(price)}
        </span>
      </div>
      <div className="flex justify-end items-end p-2">
        <p className="text-xs text-slate-500">
          {calcularDiferencia(updatedAt).meses === 0 &&
          calcularDiferencia(updatedAt).dias === 0 ? (
            <>Actualizado hoy</>
          ) : calcularDiferencia(updatedAt).meses > 0 ? (
            <>Actualizado hace {calcularDiferencia(updatedAt).meses} mes/es</>
          ) : (
            <>Actualizado hace {calcularDiferencia(updatedAt).dias} día/s</>
          )}
        </p>
      </div>
    </Link>
  );
}
