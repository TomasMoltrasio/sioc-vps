import SearchFilter from "@/components/SearchFilter";
import Head from "next/head";

export default function HomeContainer() {
  return (
    <>
      <Head>
        <title>Fondado Negocios Inmobiliarios</title>
        <meta name="description" content="Fondado Negocios Inmobiliarios" />
      </Head>

      <section
        className="hero relative min-h-[80vh] rounded-3xl"
        style={{
          backgroundImage: `url("/fondo.webp")`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-opacity-70 rounded-3xl"></div>
        <div className="flex flex-row items-center justify-start w-5/6  py-20 lg:py-32">
          <div className="hero-content text-center md:text-left text-neutral-content">
            <div className="max-w-2xl">
              <h1 className="mb-3 text-6xl md:text-7xl text-base-100 font-bold whitespace-pre-line tracking-wide md:whitespace-break-spaces">
                Fondado
              </h1>
              <h2 className="mb-5 text-lg tracking-wide text-primary-content md:text-2xl font-bold whitespace-pre-line  md:whitespace-break-spaces">
                Negocios Inmobiliarios
              </h2>
              <p className="mb-5 text-left text-xs md:text-sm text-base-200">
                Queremos ayudarte a encontrar la propiedad adecuada o la
                inversión ideal. Contamos con años de experiencia en el mercado
                inmobiliario; nuestro compromiso es ofrecerte asesoramiento
                personalizado, un servicio transparente y cercano, adaptándonos
                a tus necesidades. Explorá nuestro catálogo de propiedades y
                descubrí nuestras opciones. ¡Gracias por confiar en nosotros!
              </p>
            </div>
          </div>
        </div>
      </section>
      <SearchFilter />
    </>
  );
}
