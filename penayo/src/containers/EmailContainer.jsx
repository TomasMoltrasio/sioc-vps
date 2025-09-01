import FormEmail from "@/components/FormEmail";
import Image from "next/image";

export default function EmailContainer() {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px] my-4">
      <div className="lg:col-span-7 md:col-span-6">
        <Image src="/contacto.webp" alt="contacto" width={500} height={300} />
      </div>
      <div className="lg:col-span-5 md:col-span-6">
        <div className="lg:me-5">
          <div className="bg-white  rounded-md shadow  p-6">
            <h3 className="mb-3 text-2xl leading-normal text-slate-900 font-medium">
              Contactate con nosotros!
            </h3>
            <FormEmail />
          </div>
        </div>
      </div>
    </div>
  );
}
