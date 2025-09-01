"use client";
import Cookies from "universal-cookie";
import {
  transformName,
  checkValue,
  substractOptions,
  addOptions,
} from "@/services/transform";

export default function OptionFilter({ selecciones }) {
  const { name, options } = selecciones;

  const cookies = new Cookies();

  const handleChange = (e) => {
    const cookie = cookies.get("searchParams");
    if (e.target.checked) {
      const searchParams = addOptions(name, e.target.name, cookie);
      cookies.set("searchParams", { ...cookie, ...searchParams });
    } else {
      if (cookie === undefined) return;
      const searchParams = substractOptions(name, e.target.name, cookie);
      cookies.set("searchParams", { ...cookie, ...searchParams });
      cookie[transformName(name)].length === 0 &&
        delete cookie[transformName(name)];
      cookies.set("searchParams", { ...cookie });
    }
  };

  const check = (name, option) => {
    return cookies.get("searchParams") === undefined
      ? false
      : cookies.get("searchParams")[transformName(name)]
      ? checkValue(cookies.get("searchParams"), name, option)
      : false;
  };

  return (
    <li>
      <details>
        <summary className="text-lg">{name}</summary>
        <ul>
          {options.map((option) => (
            <li key={option}>
              <div className="flex w-full">
                <label className="label cursor-pointer w-full">
                  <span className="label-text mr-2 ">{option}</span>
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    name={option}
                    defaultChecked={check(name, option)}
                    onChange={(e) => handleChange(e)}
                  />
                </label>
              </div>
            </li>
          ))}
        </ul>
      </details>
    </li>
  );
}
