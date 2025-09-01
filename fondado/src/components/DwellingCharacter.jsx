"use client";
import { FaSwimmingPool } from "react-icons/fa";
import {
  LuBed,
  LuBath,
  LuWarehouse,
  LuLeaf,
  LuWashingMachine,
  LuToilet,
  LuBuilding,
} from "react-icons/lu";

export default function DwellingCharacter({ subtype, spaces }) {
  return (
    <div
      className="
    flex    
    justify-start
    items-center
    w-full
    h-full
    gap-3
    flex-wrap
  "
    >
      {(spaces?.bedrooms >= 0 && subtype === "Departamento") ||
      (spaces?.bedrooms > 0 && subtype !== "Departamento") ? (
        <div
          className="
            flex
            justify-center
            items-center
            w-max
            h-full
            gap-1
            "
        >
          <LuBed className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {spaces.bedrooms === 0 && subtype === "Departamento"
              ? "Monoambiente"
              : spaces.bedrooms === 0
              ? null
              : `${spaces.bedrooms} Dormitorio/s`}
          </p>
        </div>
      ) : null}
      {spaces?.bathRoom > 0 ? (
        <div
          className="
            flex
            justify-center
            items-center
            w-max
            h-full
            gap-1
            "
        >
          <LuBath className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {`${spaces.bathRoom} Baño/s`}
          </p>
        </div>
      ) : null}
      {spaces?.toilette > 0 ? (
        <div
          className="
            flex
            justify-center
            items-center
            w-max
            h-full
            gap-1
            "
        >
          <LuToilet className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {`${spaces.toilette} Toilette/s`}
          </p>
        </div>
      ) : null}
      {spaces?.swimmingPool === true ? (
        <div
          className="
            flex
            justify-center
            items-center
            w-max
            h-full
            gap-1
            "
        >
          <FaSwimmingPool className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {`Pileta`}
          </p>
        </div>
      ) : null}
      {spaces?.garage?.length > 3 ? (
        <div
          className="
            flex
            justify-center
            items-center
            w-max
            h-full
            gap-1
            "
        >
          <LuWarehouse className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {`${spaces.garage}`}
          </p>
        </div>
      ) : null}
      {spaces?.garden === true ? (
        <div
          className="
                flex
                justify-center
                items-center
                w-max
                h-full
                gap-1
                "
        >
          <LuLeaf className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {`Jardin`}
          </p>
        </div>
      ) : null}
      {spaces?.floors > 1 ? (
        <div
          className="
                flex
                justify-center
                items-center
                w-max
                h-full
                gap-1
                "
        >
          <LuBuilding className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {`${spaces.floors} Pisos`}
          </p>
        </div>
      ) : null}
      {spaces?.laundryRoom?.length > 2 ? (
        <div
          className="
                flex
                justify-center
                items-center
                w-max
                h-full
                gap-1
                "
        >
          <LuWashingMachine className="text-gray-600 text-xl" />
          <p className="text-base font-normal text-left text-slate-900">
            {`${spaces.laundryRoom}`}
          </p>
        </div>
      ) : null}
    </div>
  );
}
