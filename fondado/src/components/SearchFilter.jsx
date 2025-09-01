import FormSearch from "./FormSearch";
import TypeForm from "./TypeForm";

export default function SearchFilter() {
  return (
    <div className="relative w-11/12 lg:w-max -mt-32">
      <div className="flex flex-col rounded-2xl items-start justify-start bg-transparent shadow w-full">
        <TypeForm />
        <div className="flex flex-row items-center justify-center bg-base-100 w-full rounded-t-none md:rounded-2xl md:rounded-ss-none">
          <FormSearch />
        </div>
      </div>
    </div>
  );
}
