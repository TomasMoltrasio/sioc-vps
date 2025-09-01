import LogoContact from "@/components/LogoContact";
import EmailContainer from "./EmailContainer";
import { Suspense } from "react";

export default function ContactContainer() {
  return (
    <section className="flex min-h-screen w-full flex-col items-center justify-around bg-transparent py-4">
      <div className="flex flex-col w-full items-center justify-center">
        <Suspense fallback={<p>Cargando...</p>}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3271.822882865735!2d-57.95076618883247!3d-34.910894073672154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a2e7cd410e691b%3A0x2d997ac46b5e0d02!2sPenayo%20Negocios%20Inmobiliarios!5e0!3m2!1ses-419!2sar!4v1685247862677!5m2!1ses-419!2sar"
            className="w-full h-96 rounded-xl shadow-md border-2 border-slate-300"
            loading="lazy"
          ></iframe>
        </Suspense>
      </div>
      <EmailContainer />
      <div className="divider">
        <p
          className="
        text-xl
        text-center
        text-slate-900
        font-medium
      "
        >
          También por
        </p>
      </div>
      <LogoContact />
    </section>
  );
}
