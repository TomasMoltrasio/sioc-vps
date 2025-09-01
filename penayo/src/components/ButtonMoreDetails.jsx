"use client";
import Link from "next/link";
import { useState } from "react";

export default function ButtonMoreDetails({ href, publicationType }) {
  const [show, setShow] = useState(false);

  const isAlquiler = publicationType === "Alquiler";
  const btnClass = isAlquiler ? "btn btn-secondary" : "btn btn-primary";
  const bgClass = isAlquiler ? "bg-secondary" : "bg-primary";

  return (
    <div onClick={() => setShow(!show)}>
      <Link
        href={`/dwelling/${href}`}
        className={`absolute inset-0 z-10 group-hover:flex justify-center items-center hidden ${bgClass} bg-opacity-10 text-white text-2xl cursor-pointer`}
      >
        {show ? (
          <span
            className={`loading loading-spinner loading-lg ${
              isAlquiler ? "text-secondary" : "text-primary"
            }`}
          ></span>
        ) : (
          <span className={btnClass}>Ver más</span>
        )}
      </Link>
    </div>
  );
}
