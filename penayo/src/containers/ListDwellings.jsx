"use client";

import CardDwelling from "@/components/CardDwelling";
import { Suspense } from "react";

export default function ListDwellings({ dwellings }) {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 pb-6  bg-transparent w-full gap-[30px]">
      {dwellings?.map((dwelling) => (
        <Suspense fallback={<p>Cargando...</p>}>
          <CardDwelling key={dwelling._id} dwelling={dwelling} />
        </Suspense>
      ))}
    </div>
  );
}
