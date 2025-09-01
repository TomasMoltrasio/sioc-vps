import Filter from "@/components/Filter";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      <aside className="w-12/12 lg:w-3/12 mt-4">
        <Filter />
      </aside>
      <section className="flex min-h-screen flex-col items-center w-full lg:w-9/12  justify-start pb-2 bg-transparent md:p-4">
        {children}
      </section>
    </div>
  );
}
