"use client";

import { TiArrowRightThick } from "react-icons/ti";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchCode() {
  const [codigo, setCodigo] = useState(0);
  const router = useRouter();

  const handleChange = (e) => {
    setCodigo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/dwelling/${codigo}`);
  };

  return (
    <div className="form-control w-full max-w-xs">
      <label className="label">
        <span className="label-text font-semibold text-base">Codigo</span>
      </label>

      <div className="join">
        <input
          onChange={(e) => handleChange(e)}
          className="input join-item border-slate-300 rounded-r-none text-slate-900"
        />
        <button
          onClick={(e) => handleSubmit(e)}
          disabled={codigo.toString().length <= 4}
          className="btn join-item rounded-r-full bg-primary text-base-100"
        >
          <TiArrowRightThick />
        </button>
      </div>
    </div>
  );
}
