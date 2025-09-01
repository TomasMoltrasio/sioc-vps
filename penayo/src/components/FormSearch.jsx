import SelectForm from "./SelectForm";
import SearchCode from "./SearchCode";
import { selecciones } from "../services/selecciones";
import ButtonSearch from "./ButtonSearch";

export default function FormSearch() {
  return (
    <form className="flex flex-col items-center md:grid grid-rows-2 grid-cols-4 grid-flow-row p-4 gap-0 md:gap-4 w-full">
      {selecciones.map((seleccion, index) => (
        <SelectForm key={index} selecciones={seleccion} />
      ))}
      <ButtonSearch />
      <SearchCode />
    </form>
  );
}
