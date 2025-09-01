import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
// import { TbBrandWhatsapp } from "react-icons/tb";

export default function LogoContact() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-1 gap-[30px] mt-4">
      <div className="text-center px-6">
        <div className="relative overflow-hidden text-transparent -m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-32 w-32 fill-primary/5 mx-auto"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
            <HiPhone />
          </div>
        </div>
        <div className="content mt-7">
          <h5 className="text-slate-900 h5 text-xl font-medium">Telefono</h5>
          <div className="mt-5 flex flex-col items-center justify-center">
            <a
              href="
            tel:+542216161258"
              className="link link-hover text-slate-800 hover:text-primary after:bg-green-600 transition duration-500"
            >
              0221 6161258
            </a>
            <a
              href="
            tel:+542215560489"
              className="link link-hover text-slate-800 hover:text-primary after:bg-green-600 transition duration-500"
            >
              0221 5560489
            </a>
          </div>
        </div>
      </div>
      {/* <div className="text-center px-6">
        <div className="relative overflow-hidden text-transparent -m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-32 w-32 fill-primary/5 mx-auto"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
            <TbBrandWhatsapp />
          </div>
        </div>
        <div className="content mt-7">
          <h5 className="text-slate-900 h5 text-xl font-medium">Whatsapp</h5>
          <div className="mt-5 flex flex-col items-center justify-center">
            <a
              href="
              whatsapp://send?text=Hola! Vengo de la página web&phone=+5492215461307"
              className="link link-hover text-slate-800 hover:text-primary after:bg-green-600 transition duration-500"
            >
              +549 2215461307
            </a>
            <a
              href="
              whatsapp://send?text=Hola! Vengo de la página web&phone=+5492216431287"
              className="link link-hover text-slate-800 hover:text-primary after:bg-green-600 transition duration-500"
            >
              +549 2216431287
            </a>
          </div>
        </div>
      </div> */}
      <div className="text-center px-6">
        <div className="relative overflow-hidden text-transparent -m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-32 w-32 fill-primary/5 mx-auto"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
            <HiOutlineMail />
          </div>
        </div>
        <div className="content mt-7">
          <h5 className="text-slate-900 h5 text-xl font-medium">Email</h5>

          <div className="mt-5">
            <a
              href="mailto:info@penayopropiedades.com.ar"
              className="link link-hover text-slate-800 hover:text-primary after:bg-green-600 transition duration-500"
            >
              info@penayopropiedades.com.ar
            </a>
          </div>
        </div>
      </div>
      <div className="text-center px-6">
        <div className="relative overflow-hidden text-transparent -m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="h-32 w-32 fill-primary/5 mx-auto"
          >
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          </svg>
          <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-primary rounded-xl transition-all duration-500 ease-in-out text-4xl flex align-middle justify-center items-center">
            <HiLocationMarker />
          </div>
        </div>
        <div className="content mt-7">
          <h5 className="text-slate-900 h5 text-xl font-medium">Dirección</h5>
          <p className="text-slate-900 mt-3">
            Calle 68 N° 446 La Plata, Buenos Aires
          </p>
          <div className="mt-5">
            <a
              href="https://g.co/kgs/bWC8rWY"
              data-type="iframe"
              target="_blank"
              className="video-play-icon read-more lightbox btn btn-link text-slate-800 hover:text-primary after:bg-green-600 transition duration-500"
            >
              Ver en Google maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
