import CardDwelling from "@/components/CardDwelling";
import { fetchData } from "@/services/fetchData";

export default async function DwellingSearch() {
  const searchParams = {
    page: {
      pageNumber: 1,
      perPage: 6,
    },
  };
  const data = await fetchData(searchParams);

  return (
    <section className="flex flex-col items-center justify-center w-full mt-10 mb-4 p-4">
      <div className="flex flex-col items-center justify-center w-full">
        <h2
          className={`text-xl font-sans md:text-4xl font-medium text-center text-slate-900`}
        >
          Últimas Propiedades
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 w-full md:w-10/12 gap-[30px]">
        {data?.dwellings?.map((dwelling) => (
          <CardDwelling key={dwelling._id} dwelling={dwelling} />
        ))}
      </div>
    </section>
  );
}
