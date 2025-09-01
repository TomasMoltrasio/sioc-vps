"use client";
import Cookies from "universal-cookie";
import { useRouter } from "next/navigation";

export default function SelectOrder({ options }) {
  const cookies = new Cookies();
  const router = useRouter();

  const transformName = (name) => {
    switch (name) {
      case "Menor precio":
        return { orderKeyByPrice: "cheapest" };
      case "Mayor precio":
        return { orderKeyByPrice: "expensive" };
      case "Mas recientes":
        return { orderKeyByDate: "newest" };
      case "Mas antiguos":
        return { orderKeyByDate: "oldest" };
    }
  };

  const handleChange = (e) => {
    const searchParams = transformName(e.target.value);
    const cookie = cookies.get("searchParams");
    delete cookie?.orderKeyByPrice;
    delete cookie?.orderKeyByDate;
    cookies.set("searchParams", { ...cookie, ...searchParams });
    router.refresh();
  };

  return (
    <select
      onChange={(e) => handleChange(e)}
      defaultValue={
        cookies.get("searchParams")?.orderKeyByPrice === "cheapest"
          ? "Menor precio"
          : cookies.get("searchParams")?.orderKeyByPrice === "expensive"
          ? "Mayor precio"
          : cookies.get("searchParams")?.orderKeyByDate === "newest"
          ? "Mas recientes"
          : cookies.get("searchParams")?.orderKeyByDate === "oldest"
          ? "Mas antiguos"
          : "Ordenar por"
      }
      className="select select-ghost w-max text-slate-900 bg-base-100 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
    >
      <option disabled selected>
        Ordenar por
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
