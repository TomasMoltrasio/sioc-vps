import SearchFilter from "@/components/SearchFilter";
import Head from "next/head";

export default function HomeContainer() {
  return (
    <>
      <Head>
        <title>Penayo Negocios Inmobiliarios</title>
        <meta name="description" content="Penayo Negocios Inmobiliarios" />
      </Head>

      <section
        className="hero relative min-h-[80vh] rounded-3xl"
        style={{
          backgroundImage: `url("/fondo.webp")`,
          // backgroundSize: "cover",
          // backgroundPosition: "bottom",
          // backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
        <div className="flex flex-row items-center justify-start w-5/6  py-20 lg:py-32">
          <div className="hero-content text-center md:text-left text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-6xl md:text-7xl text-base-100 font-bold whitespace-pre-line tracking-wide md:whitespace-break-spaces">
                Penayo
              </h1>
              <h2 className="mb-5 text-lg tracking-wide text-primary-content md:text-2xl font-bold whitespace-pre-line  md:whitespace-break-spaces">
                Negocios Inmobiliarios
              </h2>
              <p className="mb-5 text-left text-xs md:text-sm text-base-200">
                Más de 20 años de trayectoria en el mercado inmobiliario de la
                ciudad de La Plata y alrededores, contamos con un equipo
                altamente capacitado de profesionales, martilleros y corredores,
                abogados, escribanos, agrimensores, arquitectos; servicios de
                excelencia en compraventa, tasaciones, alquileres garantizados,
                mantenimiento de la propiedad, administración de propiedades,
                pagos a través de depósitos o transferencias bancarias.
              </p>
            </div>
          </div>
        </div>
      </section>
      <SearchFilter />
    </>
  );
}
