"use client";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";
import { LuSearch } from "react-icons/lu";
import { useEffect, useState } from "react";

export default function ButtonSearch() {
  const router = useRouter();
  const [buttonClass, setButtonClass] = useState(
    "btn btn-primary w-full mt-4 text-white md:mt-0"
  );
  const [tipo, setTipo] = useState(null);

  useEffect(() => {
    const cookies = new Cookies();
    const cookie = cookies.get("searchParams");
    setTipo(cookie?.tipo);
    const interval = setInterval(() => {
      const updatedCookie = cookies.get("searchParams");
      if (updatedCookie?.tipo !== tipo) {
        setTipo(updatedCookie?.tipo);
      }
    }, 500);
    return () => clearInterval(interval);
  }, [tipo]);

  useEffect(() => {
    if (tipo === "Alquilar") {
      setButtonClass("btn btn-secondary w-full mt-4 text-white md:mt-0");
    } else {
      setButtonClass("btn btn-primary w-full mt-4 text-white md:mt-0");
    }
  }, [tipo]);

  const handleClick = (e) => {
    e.preventDefault();
    const cookies = new Cookies();
    const cookie = cookies.get("searchParams");
    cookie?.tipo === "Alquilar"
      ? router.push("/alquileres")
      : router.push("/ventas");
  };

  return (
    <div className="form-control justify-end h-full w-full max-w-xs">
      <button onClick={handleClick} className={buttonClass}>
        <LuSearch className="text-xl mr-1" />
        Buscar
      </button>
    </div>
  );
}
